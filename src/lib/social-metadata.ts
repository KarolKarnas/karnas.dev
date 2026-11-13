import type { Metadata } from "next"
import { PROFILE } from "@/utils/profile"

export const SITE_URL = "https://www.karnas.dev"
export const DEFAULT_SOCIAL_TITLE = `${PROFILE.name} | ${PROFILE.role}`
export const SOCIAL_IMAGE_SIZE = { width: 1200, height: 630 }

export const OPEN_GRAPH_DEFAULTS = {
  siteName: "karnas.dev",
  type: "website",
  locale: "en_US",
  url: "/",
} satisfies Metadata["openGraph"]

export const TWITTER_DEFAULTS = {
  card: "summary_large_image",
} satisfies Metadata["twitter"]

type PageMetadata = {
  title: string
  description: string
  path: string
  image?: "default" | "route"
  publishedTime?: string
}

export function createPageMetadata({
  title,
  description,
  path,
  image = "default",
  publishedTime,
}: PageMetadata): Metadata {
  const socialTitle = path === "/" ? title : `${title} | ${PROFILE.name}`
  const summary = /[.!?]$/.test(description.trim())
    ? description.trim()
    : `${description.trim()}.`
  const images =
    image === "default"
      ? {
          images: [
            {
              url: "/opengraph-image",
              ...SOCIAL_IMAGE_SIZE,
              type: "image/png",
              alt: `${PROFILE.name} - ${PROFILE.role}`,
            },
          ],
        }
      : {}

  // Leave route images unset so the file convention supplies the nearest image.
  // Twitter falls back to that same Open Graph image when images are unset.
  return {
    title,
    description: summary,
    alternates: { canonical: path },
    openGraph: {
      ...OPEN_GRAPH_DEFAULTS,
      title: socialTitle,
      description: summary,
      url: path,
      ...images,
      ...(publishedTime
        ? {
            type: "article" as const,
            publishedTime,
            authors: [PROFILE.name],
          }
        : {}),
    },
    twitter: {
      ...TWITTER_DEFAULTS,
      title: socialTitle,
      description: summary,
      ...images,
    },
  }
}
