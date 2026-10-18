import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { test } from "node:test"
import vm from "node:vm"
import ts from "typescript"

const compiled = ts.transpileModule(
  readFileSync(
    new URL("../src/app/_components/side-nav/folder-state.ts", import.meta.url),
    "utf8"
  ),
  { compilerOptions: { module: ts.ModuleKind.CommonJS } }
).outputText

function loadStore(storage, denied = false) {
  const exports = {}
  const events = []
  vm.runInNewContext(compiled, {
    exports,
    require: () => ({}),
    Event: class {
      constructor(type) {
        this.type = type
      }
    },
    window: {
      localStorage: {
        getItem(key) {
          if (denied) throw Error("Storage unavailable")
          return storage.get(key) ?? null
        },
        setItem(key, value) {
          if (denied) throw Error("Storage unavailable")
          storage.set(key, value)
        },
      },
      dispatchEvent(event) {
        events.push(event.type)
      },
    },
  })
  return { ...exports, events }
}

test("folder choices survive navigation and remounts, including explicit collapse", () => {
  const storage = new Map()
  const store = loadStore(storage)
  assert.equal(store.isFolderExpanded("/blog"), false)
  store.setFolderExpanded("/blog", true)
  store.setFolderExpanded("/professional-projects", true)
  assert.equal(store.isFolderExpanded("/blog"), true)
  assert.equal(store.isFolderExpanded("/side-projects"), false)
  const reloaded = loadStore(storage)
  assert.equal(reloaded.isFolderExpanded("/blog"), true)
  assert.equal(reloaded.isFolderExpanded("/professional-projects"), true)
  reloaded.setFolderExpanded("/blog", false)
  const nextReload = loadStore(storage)
  assert.equal(nextReload.isFolderExpanded("/blog"), false)
  assert.equal(nextReload.isFolderExpanded("/professional-projects"), true)
  assert.equal(store.events.length, 2)
})

test("invalid persisted data falls back to closed folders", () => {
  for (const raw of [
    "null",
    "[]",
    "broken",
    '{"/blog":"true","/side-projects":123}',
  ]) {
    const store = loadStore(new Map([["explorer-folders", raw]]))
    assert.equal(store.isFolderExpanded("/blog"), false)
    store.setFolderExpanded("/blog", true)
    assert.equal(store.isFolderExpanded("/blog"), true)
  }
})

test("blocked storage preserves choices in session memory", () => {
  const store = loadStore(new Map(), true)
  store.setFolderExpanded("/blog", true)
  store.setFolderExpanded("/side-projects", true)
  assert.equal(store.isFolderExpanded("/blog"), true)
  assert.equal(store.isFolderExpanded("/side-projects"), true)
  store.setFolderExpanded("/blog", false)
  assert.equal(store.isFolderExpanded("/blog"), false)
})

test("unknown paths are never persisted", () => {
  const storage = new Map()
  loadStore(storage).setFolderExpanded("/unknown", true)
  assert.equal(storage.size, 0)
})
