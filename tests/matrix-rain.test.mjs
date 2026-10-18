import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { test } from "node:test"
import vm from "node:vm"
import ts from "typescript"

const compiled = ts.transpileModule(
  readFileSync(
    new URL(
      "../src/app/_components/terminal/matrix-rain-engine.ts",
      import.meta.url
    ),
    "utf8"
  ),
  {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }
).outputText

function environment() {
  const exports = {}
  const frames = new Map()
  const draws = []
  const observers = []
  let nextFrame = 0
  let fills = 0
  const context = {
    setTransform() {},
    fillRect() {
      fills++
    },
    fillText(...args) {
      draws.push(args)
    },
  }
  const bounds = { width: 600, height: 240 }
  const canvas = {
    width: 0,
    height: 0,
    getContext: () => context,
    getBoundingClientRect: () => bounds,
  }
  vm.runInNewContext(compiled, {
    exports,
    window: {
      devicePixelRatio: 3,
      requestAnimationFrame(callback) {
        frames.set(++nextFrame, callback)
        return nextFrame
      },
      cancelAnimationFrame(id) {
        frames.delete(id)
      },
    },
    ResizeObserver: class {
      constructor(callback) {
        this.callback = callback
        observers.push(this)
      }
      observe() {}
      disconnect() {
        this.disconnected = true
      }
    },
  })
  return {
    start: exports.startMatrixRain,
    canvas,
    bounds,
    frames,
    draws,
    observers,
    get fills() {
      return fills
    },
    step(time) {
      const callbacks = [...frames.values()]
      frames.clear()
      callbacks.forEach((callback) => callback(time))
    },
  }
}

test("animated rain draws immediately, advances and limits resolution", () => {
  const env = environment()
  const stop = env.start(env.canvas, false)
  assert(env.draws.length > 0)
  assert.equal(env.canvas.width, 1200)
  assert.equal(env.canvas.height, 480)
  const fills = env.fills
  env.step(100)
  assert(env.fills > fills)
  assert.equal(env.frames.size, 1)
  stop()
})

test("reduced motion draws a still frame without scheduling animation", () => {
  const env = environment()
  const stop = env.start(env.canvas, true)
  assert(env.draws.length > 0)
  assert.equal(env.frames.size, 0)
  env.bounds.width = 300
  env.observers[0].callback()
  assert.equal(env.canvas.width, 600)
  assert.equal(env.frames.size, 0)
  stop()
})

test("cleanup cancels frames, disconnects resizing and prevents late draws", () => {
  const env = environment()
  const stop = env.start(env.canvas, false)
  const pending = [...env.frames.values()][0]
  stop()
  assert.equal(env.frames.size, 0)
  assert.equal(env.observers[0].disconnected, true)
  const fills = env.fills
  pending(100)
  env.observers[0].callback()
  assert.equal(env.fills, fills)
  assert.equal(env.frames.size, 0)
})
