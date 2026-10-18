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
        "../src/app/_components/lightbox/lightbox-utils.ts",
        import.meta.url
      ),
      "utf8"
    ),
    { compilerOptions: { module: ts.ModuleKind.CommonJS } }
  ).outputText,
  { exports, URL }
)
const { parseGallery, nextImageIndex } = exports
const origin = "http://localhost:3000"

test("gallery arrows wrap in both directions and single-image galleries stay put", () => {
  assert.equal(nextImageIndex(2, 1, 3), 0)
  assert.equal(nextImageIndex(0, -1, 3), 2)
  assert.equal(nextImageIndex(1, -1, 3), 0)
  assert.equal(nextImageIndex(0, 1, 1), 0)
  assert.equal(nextImageIndex(0, -1, 1), 0)
  assert.equal(nextImageIndex(0, 1, 0), 0)
})
test("local assets and known remote images preserve gallery order and starting image", () => {
  const gallery = parseGallery(
    {
      images: [
        { src: "/assets/cover.jpg", alt: "Cover" },
        {
          src: "https://res.cloudinary.com/demo/image/upload/photo.jpg",
          alt: "Details",
        },
      ],
      index: 1,
    },
    origin
  )
  assert.equal(gallery.index, 1)
  assert.equal(gallery.images[0].src, origin + "/assets/cover.jpg")
  assert.equal(gallery.images[1].alt, "Details")
})
test("invalid gallery messages and untrusted URLs are rejected", () => {
  for (const value of [
    null,
    {},
    { images: [], index: 0 },
    { images: [{ src: "/image.jpg", alt: "Image" }], index: 3 },
    { images: [{ src: "/image.jpg", alt: "Image" }], index: 0.5 },
  ])
    assert.equal(parseGallery(value, origin), null)
  for (const src of [
    "javascript:alert(1)",
    "data:image/svg+xml,test",
    "https://example.com/tracker",
    "https://res.cloudinary.com.evil.com/a.jpg",
    "https://user:pass@res.cloudinary.com/a.jpg",
    "file:///tmp/a.jpg",
  ])
    assert.equal(
      parseGallery({ images: [{ src, alt: "image" }], index: 0 }, origin),
      null
    )
})
