export type GalleryImage = { src: string; alt: string }
export type GalleryState = { images: GalleryImage[]; index: number }

export function nextImageIndex(
  index: number,
  direction: number,
  length: number
) {
  return length > 0 ? (((index + direction) % length) + length) % length : 0
}

// Messages may originate in an embedded route. Accept only known image origins.
export function parseGallery(
  value: unknown,
  origin: string
): GalleryState | null {
  if (!value || typeof value !== "object") return null
  const { images, index } = value as Record<string, unknown>
  if (!Array.isArray(images) || !images.length || images.length > 100)
    return null
  if (
    !Number.isInteger(index) ||
    (index as number) < 0 ||
    (index as number) >= images.length
  )
    return null
  const safeImages: GalleryImage[] = []
  for (const image of images) {
    if (
      !image ||
      typeof image !== "object" ||
      typeof image.src !== "string" ||
      typeof image.alt !== "string"
    )
      return null
    try {
      const url = new URL(image.src, origin)
      const local =
        url.origin === origin && ["http:", "https:"].includes(url.protocol)
      const remote =
        url.protocol === "https:" &&
        ["res.cloudinary.com", "raw.githubusercontent.com"].includes(
          url.hostname
        )
      if ((!local && !remote) || url.username || url.password) return null
      safeImages.push({ src: url.href, alt: image.alt.slice(0, 500) })
    } catch {
      return null
    }
  }
  return { images: safeImages, index: index as number }
}
