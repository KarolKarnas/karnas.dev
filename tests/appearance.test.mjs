import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { test } from "node:test"
import vm from "node:vm"
import ts from "typescript"

// Exercise the same dependency-free configuration consumed by Next.js.
const source = readFileSync(
  new URL(
    "../src/app/_components/appearance/appearance-config.ts",
    import.meta.url
  ),
  "utf8"
)
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText
const moduleExports = {}
vm.runInNewContext(compiled, { exports: moduleExports })
const { THEMES, DEFAULT_APPEARANCE, parseAppearance, APPEARANCE_SCRIPT } =
  moduleExports
const plain = (value) => JSON.parse(JSON.stringify(value))

function bootstrap(raw, denied = false) {
  const document = { documentElement: { dataset: {} } }
  vm.runInNewContext(APPEARANCE_SCRIPT, {
    document,
    localStorage: {
      getItem() {
        if (denied) throw new Error("Storage blocked")
        return raw
      },
    },
  })
  return document.documentElement.dataset
}

test("every theme and text size round-trips through parsing and first-paint initialization", () => {
  for (const { id: theme } of THEMES) {
    for (const textSize of ["small", "default", "large"]) {
      const preference = { theme, textSize, reducedMotion: true }
      const raw = JSON.stringify(preference)
      assert.deepEqual(plain(parseAppearance(raw)), preference)
      assert.deepEqual(bootstrap(raw), { theme, textSize, motion: "reduced" })
    }
  }
})

test("missing or corrupted preferences fall back without breaking rendering", () => {
  for (const raw of [
    "",
    "not json",
    "null",
    "[]",
    "{}",
    '{"theme":"unknown","textSize":999,"reducedMotion":"yes"}',
  ]) {
    assert.deepEqual(plain(parseAppearance(raw)), plain(DEFAULT_APPEARANCE))
    assert.doesNotThrow(() => bootstrap(raw))
  }
})

test("only known values become document attributes", () => {
  const raw = JSON.stringify({
    theme: "<script>alert(1)</script>",
    textSize: "200px",
    reducedMotion: false,
  })
  assert.deepEqual(bootstrap(raw), {
    theme: "monokai",
    textSize: "default",
    motion: "auto",
  })
})

test("blocked storage still allows the default CSS to render", () => {
  assert.deepEqual(bootstrap(null, true), {})
})
