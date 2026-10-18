import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { test } from "node:test"
import vm from "node:vm"
import ts from "typescript"

const exports = {}
vm.runInNewContext(
  ts.transpileModule(
    readFileSync(
      new URL(
        "../src/app/_components/terminal/terminal-controls.ts",
        import.meta.url
      ),
      "utf8"
    ),
    {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    }
  ).outputText,
  { exports }
)
const {
  isTerminalShortcut,
  listenForTerminalControls,
  forwardTerminalShortcut,
} = exports

const shortcut = (patch = {}) => ({
  key: "`",
  code: "Backquote",
  ctrlKey: true,
  altKey: false,
  metaKey: false,
  repeat: false,
  isComposing: false,
  preventDefault() {
    this.prevented = true
  },
  ...patch,
})

function scope() {
  const listeners = new Map()
  const frames = []
  const target = {
    location: { origin: "https://www.karnas.dev" },
    document: { querySelectorAll: () => frames },
    addEventListener(type, handler, capture) {
      const callbacks = listeners.get(type) ?? []
      callbacks.push({ handler, capture })
      listeners.set(type, callbacks)
    },
    removeEventListener(type, handler, capture) {
      listeners.set(
        type,
        (listeners.get(type) ?? []).filter(
          (item) => item.handler !== handler || item.capture !== capture
        )
      )
    },
    emit(type, event) {
      for (const { handler } of listeners.get(type) ?? []) handler(event)
    },
    listeners,
    frames,
  }
  target.parent = target
  return target
}

test("Ctrl+Backquote works with layout-dependent characters and the legacy key value", () => {
  for (const key of ["`", "~", "Dead", "§"])
    assert.equal(isTerminalShortcut(shortcut({ key })), true)
  assert.equal(isTerminalShortcut(shortcut({ code: "", key: "`" })), true)
  for (const patch of [
    { ctrlKey: false },
    { altKey: true },
    { metaKey: true },
    { repeat: true },
    { isComposing: true },
    { code: "KeyA", key: "a" },
  ]) {
    assert.equal(isTerminalShortcut(shortcut(patch)), false)
  }
})

test("main-window shortcut runs once in capture phase and detaches cleanly", () => {
  const window = scope()
  let toggles = 0
  const stop = listenForTerminalControls(window, {
    toggle: () => toggles++,
    open() {},
  })
  assert.equal(window.listeners.get("keydown")[0].capture, true)
  const event = shortcut({ key: "~" })
  window.emit("keydown", event)
  window.emit("keydown", shortcut({ repeat: true }))
  assert.equal(event.prevented, true)
  assert.equal(toggles, 1)
  stop()
  window.emit("keydown", shortcut())
  assert.equal(toggles, 1)
  assert.equal(window.listeners.get("message").length, 0)
})

test("a focused split pane forwards the shortcut to its actual parent", () => {
  const parent = scope()
  const child = scope()
  child.parent = parent
  parent.frames.push({ contentWindow: child })
  let toggles = 0
  parent.postMessage = (data, targetOrigin) => {
    assert.equal(targetOrigin, parent.location.origin)
    parent.emit("message", {
      data,
      origin: child.location.origin,
      source: child,
    })
  }
  const stopParent = listenForTerminalControls(parent, {
    toggle: () => toggles++,
    open() {},
  })
  const stopChild = forwardTerminalShortcut(child)
  child.emit("keydown", shortcut({ key: "Dead" }))
  child.emit("keydown", shortcut({ repeat: true }))
  assert.equal(toggles, 1)
  stopChild()
  child.emit("keydown", shortcut())
  assert.equal(toggles, 1)
  stopParent()
})

test("only same-origin messages from an existing iframe can open or toggle the terminal", () => {
  const parent = scope()
  const child = {}
  parent.frames.push({ contentWindow: child })
  let opens = 0
  let toggles = 0
  listenForTerminalControls(parent, {
    open: () => opens++,
    toggle: () => toggles++,
  })
  const message = {
    data: { type: "split-view-open-terminal" },
    origin: parent.location.origin,
    source: child,
  }
  parent.emit("message", { ...message, origin: "https://other.example" })
  parent.emit("message", { ...message, source: {} })
  parent.emit("message", { ...message, source: null })
  assert.equal(opens, 0)
  parent.emit("message", message)
  parent.emit("message", {
    ...message,
    data: { type: "split-view-toggle-terminal" },
  })
  assert.equal(opens, 1)
  assert.equal(toggles, 1)
})
