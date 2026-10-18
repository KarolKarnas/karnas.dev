import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { test } from "node:test"
import vm from "node:vm"
import ts from "typescript"

const compiled = ts.transpileModule(
  readFileSync(
    new URL(
      "../src/app/_components/ambient-network/ambient-network-engine.ts",
      import.meta.url
    ),
    "utf8"
  ),
  { compilerOptions: { module: ts.ModuleKind.CommonJS } }
).outputText

function environment(reducedMotion = false, options = {}) {
  const frames = new Map()
  const observers = []
  const bounds = { width: 1100, height: 760, left: 250, top: 68 }
  const circles = []
  let nextFrame = 0
  let draws = 0
  let seed = 1234
  function scope() {
    const listeners = new Map()
    return {
      listeners,
      addEventListener(type, callback) {
        const handlers = listeners.get(type) ?? new Set()
        handlers.add(callback)
        listeners.set(type, handlers)
      },
      removeEventListener(type, callback) {
        listeners.get(type)?.delete(callback)
      },
      emit(type, event) {
        for (const callback of listeners.get(type) ?? []) callback(event)
      },
    }
  }
  const window = {
    ...scope(),
    devicePixelRatio: 3,
    getSelection: () => "",
    requestAnimationFrame(callback) {
      frames.set(++nextFrame, callback)
      return nextFrame
    },
    cancelAnimationFrame(id) {
      frames.delete(id)
    },
  }
  const document = { ...scope(), hidden: false }
  const context = {
    setTransform() {},
    clearRect() {
      circles.length = 0
      draws++
    },
    beginPath() {},
    moveTo() {},
    lineTo() {},
    stroke() {},
    fill() {},
    arc(x, y, radius) {
      circles.push({ x, y, radius, alpha: this.globalAlpha })
    },
  }
  const canvas = {
    width: 0,
    height: 0,
    getContext: () => context,
    getBoundingClientRect: () => bounds,
  }
  const observer = (kind) =>
    class {
      constructor(callback) {
        this.callback = callback
        this.kind = kind
        observers.push(this)
      }
      observe() {}
      disconnect() {
        this.disconnected = true
      }
    }
  const randomMath = Object.create(Math)
  randomMath.random = () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
  const exports = {}
  class Element {
    constructor(interactive = false) {
      this.interactive = interactive
    }
    closest() {
      return this.interactive ? this : null
    }
  }
  vm.runInNewContext(compiled, {
    exports,
    window,
    document,
    Math: randomMath,
    Element,
    ResizeObserver: observer("resize"),
    IntersectionObserver: observer("visibility"),
  })
  const stop = exports.startAmbientNetwork(canvas, {
    reducedMotion,
    color: "#c4ed85",
    secondaryColor: "#82d9e3",
    cursorReaction: false,
    addOnClick: false,
    ...options,
  })
  return {
    window,
    document,
    frames,
    observers,
    bounds,
    circles,
    canvas,
    stop,
    click(patch = {}) {
      window.emit("click", {
        target: new Element(),
        button: 0,
        detail: 1,
        clientX: bounds.left + 100,
        clientY: bounds.top + 100,
        ...patch,
      })
    },
    interactiveTarget: () => new Element(true),
    get draws() {
      return draws
    },
    step(time) {
      const callbacks = [...frames.values()]
      frames.clear()
      callbacks.forEach((callback) => callback(time))
    },
  }
}

test("network points move independently and pixel density and particle count stay bounded", () => {
  const env = environment()
  assert.equal(env.canvas.width, 2200)
  assert.equal(env.canvas.height, 1520)
  const before = env.circles
    .filter((_, index) => index % 2 === 1)
    .map((p) => ({ ...p }))
  env.step(50)
  const after = env.circles.filter((_, index) => index % 2 === 1)
  assert.notEqual(after[0].x, before[0].x)
  assert.notEqual(after[1].x - before[1].x, after[0].x - before[0].x)
  env.bounds.width = 10000
  env.bounds.height = 10000
  env.observers.find((o) => o.kind === "resize").callback()
  assert.equal(env.circles.length / 2, 70)
  env.stop()
})

test("reduced motion renders a static network without animation or cursor effects", () => {
  const env = environment(true)
  assert(env.circles.length > 0)
  assert.equal(env.frames.size, 0)
  const draws = env.draws
  env.window.emit("pointermove", {
    pointerType: "mouse",
    clientX: 400,
    clientY: 300,
  })
  env.step(100)
  assert.equal(env.draws, draws)
  env.observers.find((o) => o.kind === "resize").callback()
  assert.equal(env.draws, draws + 1)
  assert.equal(env.frames.size, 0)
  env.stop()
})

test("hidden documents and offscreen panes pause and resume without duplicate loops", () => {
  const env = environment()
  env.document.hidden = true
  env.document.emit("visibilitychange")
  assert.equal(env.frames.size, 0)
  env.document.hidden = false
  env.document.emit("visibilitychange")
  assert.equal(env.frames.size, 1)
  const visibility = env.observers.find((o) => o.kind === "visibility")
  visibility.callback([{ isIntersecting: false }])
  assert.equal(env.frames.size, 0)
  visibility.callback([{ isIntersecting: true }])
  visibility.callback([{ isIntersecting: true }])
  assert.equal(env.frames.size, 1)
  const draws = env.draws
  env.step(100000)
  assert.equal(env.draws, draws + 1)
  env.stop()
})

test("mouse proximity highlights nodes, leaving the pane clears it, and touch is ignored", () => {
  const env = environment(false, { cursorReaction: true })
  const point = env.circles[1]
  const pointer = {
    pointerType: "mouse",
    clientX: env.bounds.left + point.x,
    clientY: env.bounds.top + point.y,
  }
  env.window.emit("pointermove", pointer)
  env.step(50)
  assert(env.circles[1].alpha > 0.9)
  env.window.emit("pointermove", { ...pointer, clientX: 0 })
  env.step(100)
  assert.equal(env.circles[1].alpha, 0.5)
  env.window.emit("pointermove", { ...pointer, pointerType: "touch" })
  env.step(150)
  assert.equal(env.circles[1].alpha, 0.5)
  env.stop()
})

test("cleanup cancels drawing and detaches all observers and listeners", () => {
  const env = environment(false, { cursorReaction: true, addOnClick: true })
  const pending = [...env.frames.values()][0]
  const draws = env.draws
  env.stop()
  assert.equal(env.frames.size, 0)
  assert(env.observers.every((o) => o.disconnected))
  for (const scope of [env.window, env.document]) {
    for (const handlers of scope.listeners.values())
      assert.equal(handlers.size, 0)
  }
  pending(100)
  env.observers.find((o) => o.kind === "resize").callback()
  env.observers
    .find((o) => o.kind === "visibility")
    .callback([{ isIntersecting: true }])
  assert.equal(env.draws, draws)
  assert.equal(env.frames.size, 0)
})

test("cursor and click interactions remain off until explicitly enabled", () => {
  const env = environment()
  const count = env.circles.length
  assert.equal(env.window.listeners.get("pointermove"), undefined)
  assert.equal(env.window.listeners.get("click"), undefined)
  env.click()
  assert.equal(env.circles.length, count)
  env.stop()
})

test("enabled clicks add a point at the clicked location and preserve it on resize", () => {
  const env = environment(false, { addOnClick: true })
  const count = env.circles.length
  env.click()
  assert.equal(env.circles.length, count + 2)
  assert.equal(env.circles.at(-1).x, 100)
  assert.equal(env.circles.at(-1).y, 100)
  env.bounds.width /= 2
  env.observers.find((o) => o.kind === "resize").callback()
  assert.equal(env.circles.at(-1).x, 50)
  assert.equal(env.circles.at(-1).y, 100)
  for (let index = 0; index < 100; index++) env.click()
  assert.equal(env.circles.length / 2, 70)
  env.stop()
})

test("clicks on controls, selected text, outside the pane or with modifiers never add points", () => {
  const env = environment(false, { addOnClick: true })
  const count = env.circles.length
  for (const patch of [
    { target: env.interactiveTarget() },
    { defaultPrevented: true },
    { button: 1 },
    { detail: 2 },
    { clientX: 0 },
    { ctrlKey: true },
    { metaKey: true },
    { shiftKey: true },
    { altKey: true },
  ])
    env.click(patch)
  env.window.getSelection = () => "selected text"
  env.click()
  assert.equal(env.circles.length, count)
  env.stop()
})

test("explicit clicks can add static points with reduced motion without starting a loop", () => {
  const env = environment(true, { addOnClick: true, cursorReaction: true })
  const count = env.circles.length
  env.click()
  assert.equal(env.circles.length, count + 2)
  assert.equal(env.frames.size, 0)
  assert.equal(env.window.listeners.get("pointermove"), undefined)
  env.stop()
})
