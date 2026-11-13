import { getAllPosts, getPostBySlug } from "@/lib/api"
import { createSocialImage } from "@/lib/social-image"

export const alt = "From the journal of Karol Karnas"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  return createSocialImage({
    title: post.title,
    description: post.sub_title,
    label: "blog",
    stack: post.tags,
  })
}
