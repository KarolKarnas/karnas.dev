import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getAllPosts, getPostBySlug } from "@/lib/api"
import BlogDetail from "@/app/_components/blog-detail/blog-detail"

export default async function Page(props: Params) {
  const params = await props.params
  const post = getPostBySlug(params.slug)
  if (!post) {
    notFound()
  }

  return <BlogDetail post={post} />
}

type Params = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  return {
    title: post.title,
    description: post.content.slice(0, 200),
    openGraph: {
      images: [post.main_image],
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
