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

function loadStore(storage, denied = false, react = {}) {
  const exports = {}
  const events = []
  vm.runInNewContext(compiled, {
    exports,
    require: () => react,
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

test("section and article navigation reveals only the corresponding folder", () => {
  const store = loadStore(new Map())
  store.revealFolderForPathname("/professional-projects")
  assert.equal(store.isFolderExpanded("/professional-projects"), true)
  assert.equal(store.isFolderExpanded("/blog"), false)
  assert.equal(store.isFolderExpanded("/side-projects"), false)

  store.revealFolderForPathname("/blog/soft-skills-sonmez")
  store.revealFolderForPathname("/side-projects/brain?view=detail#about")
  assert.equal(store.isFolderExpanded("/professional-projects"), true)
  assert.equal(store.isFolderExpanded("/blog"), true)
  assert.equal(store.isFolderExpanded("/side-projects"), true)
  assert.equal(store.events.length, 3)

  store.revealFolderForPathname("/blog/another-post")
  store.revealFolderForPathname("/about")
  assert.equal(store.events.length, 3)
})

test("navigation can reveal a manually collapsed folder without losing saved choices", () => {
  const storage = new Map()
  const store = loadStore(storage)
  store.setFolderExpanded("/blog", false)
  store.setFolderExpanded("/side-projects", true)
  store.revealFolderForPathname("/blog?sort=recent")
  const reloaded = loadStore(storage)
  assert.equal(reloaded.isFolderExpanded("/blog"), true)
  assert.equal(reloaded.isFolderExpanded("/side-projects"), true)
  assert.equal(reloaded.isFolderExpanded("/professional-projects"), false)
})

test("unrelated paths and similarly named routes never expand a folder", () => {
  const storage = new Map()
  const store = loadStore(storage)
  for (const path of [
    "/",
    "/contact",
    "/blogger",
    "/side-projects-old",
    "https://example.com/blog",
  ]) {
    store.revealFolderForPathname(path)
  }
  assert.equal(storage.size, 0)
  assert.equal(store.events.length, 0)
})

test("automatic reveal works when persistent storage is blocked", () => {
  const store = loadStore(new Map(), true)
  store.revealFolderForPathname("/blog/a-post")
  assert.equal(store.isFolderExpanded("/blog"), true)
  store.setFolderExpanded("/blog", false)
  store.revealFolderForPathname("/professional-projects")
  assert.equal(store.isFolderExpanded("/blog"), false)
  assert.equal(store.isFolderExpanded("/professional-projects"), true)
})

test("route observer preserves collapse on refresh and rerender, then reveals on navigation", () => {
  let ref
  let previousDependency
  let effect
  const react = {
    useRef(initial) {
      return (ref ??= { current: initial })
    },
    useEffect(callback, dependencies) {
      if (previousDependency !== dependencies[0]) {
        effect = callback
        previousDependency = dependencies[0]
      }
    },
  }
  const storage = new Map([["explorer-folders", '{"/blog":false}']])
  const store = loadStore(storage, false, react)
  const navigate = (path) => {
    store.useRevealFolderOnNavigation(path)
    effect?.()
    effect = undefined
  }

  navigate("/blog/a-post")
  assert.equal(store.isFolderExpanded("/blog"), false)
  navigate("/blog/another-post")
  assert.equal(store.isFolderExpanded("/blog"), true)
  store.setFolderExpanded("/blog", false)
  navigate("/blog/another-post")
  assert.equal(store.isFolderExpanded("/blog"), false)
  navigate("/contact")
  assert.equal(store.isFolderExpanded("/blog"), false)
  navigate("/blog")
  assert.equal(store.isFolderExpanded("/blog"), true)
})
