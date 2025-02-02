import { getAllPosts, getAllProjects } from "@/lib/api"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getAllPosts()
  const projects = getAllProjects()

  const postEntries: MetadataRoute.Sitemap = posts.map(({ slug }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
    //TODO add updateAt to post type
    // lastModified: new Date(post.updatedAt)
    // changeFrequency,
    // priority:
  }))

  const projectEntries: MetadataRoute.Sitemap = projects.map(({ slug }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${slug}`,
  }))

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/skills`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    },
    ...postEntries,
    ...projectEntries,
  ]
}
