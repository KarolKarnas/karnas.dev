import { getAllPosts, getAllProjects, getAllProfessional } from "@/lib/api"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getAllPosts()
  const projects = getAllProjects()
  const professional = getAllProfessional()

  const postEntries: MetadataRoute.Sitemap = posts.map(({ slug }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
    //TODO add updateAt to post type
    // lastModified: new Date(post.updatedAt)
    // changeFrequency,
    // priority:
  }))

  const projectEntries: MetadataRoute.Sitemap = projects.map(({ slug }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/side-projects/${slug}`,
  }))

  const professionalEntries: MetadataRoute.Sitemap = professional.map(
    ({ slug }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/professional-projects/${slug}`,
    })
  )

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/side-projects`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/professional-projects`,
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
    ...professionalEntries,
  ]
}
