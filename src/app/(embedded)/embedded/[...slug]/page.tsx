import { notFound } from "next/navigation"
import {
  getAllPosts,
  getAllProjects,
  getAllProfessional,
} from "@/lib/api"

import BlogPage from "@/app/(main)/blog/page"
import BlogPostPage from "@/app/(main)/blog/[slug]/page"
import ProjectsPage from "@/app/(main)/side-projects/page"
import ProjectPostPage from "@/app/(main)/side-projects/[slug]/page"
import ProfessionalPage from "@/app/(main)/professional-projects/page"
import ProfessionalPostPage from "@/app/(main)/professional-projects/[slug]/page"
import AboutPage from "@/app/(main)/about/page"
import SkillsPage from "@/app/(main)/skills/page"
import ContactPage from "@/app/(main)/contact/page"

type Params = {
  params: Promise<{
    slug: string[]
  }>
}

export default async function EmbeddedPage(props: Params) {
  const { slug } = await props.params
  const section = slug[0]
  const itemSlug = slug[1]

  switch (section) {
    case "blog":
      if (itemSlug) {
        return <BlogPostPage params={Promise.resolve({ slug: itemSlug })} />
      }
      return <BlogPage />
    case "side-projects":
      if (itemSlug) {
        return <ProjectPostPage params={Promise.resolve({ slug: itemSlug })} />
      }
      return <ProjectsPage />
    case "professional-projects":
      if (itemSlug) {
        return (
          <ProfessionalPostPage
            params={Promise.resolve({ slug: itemSlug })}
          />
        )
      }
      return <ProfessionalPage />
    case "about":
      return <AboutPage />
    case "skills":
      return <SkillsPage />
    case "contact":
      return <ContactPage />
    default:
      return notFound()
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  const projects = getAllProjects()
  const professional = getAllProfessional()

  const params: { slug: string[] }[] = [
    { slug: ["blog"] },
    { slug: ["side-projects"] },
    { slug: ["professional-projects"] },
    { slug: ["about"] },
    { slug: ["skills"] },
    { slug: ["contact"] },
  ]

  posts.forEach((post) => {
    params.push({ slug: ["blog", post.slug] })
  })

  projects.forEach((project) => {
    params.push({ slug: ["side-projects", project.slug] })
  })

  professional.forEach((project) => {
    params.push({ slug: ["professional-projects", project.slug] })
  })

  return params
}
