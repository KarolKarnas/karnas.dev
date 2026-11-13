import type { Metadata } from "next"
import ProjectDetail from "@/app/_components/project-detail/project-detail"
import { getAllProjects, getProjectBySlug } from "@/lib/api"
import { createPageMetadata } from "@/lib/social-metadata"

type Params = { params: Promise<{ slug: string }> }

export default async function Page(props: Params) {
  const params = await props.params
  const project = getProjectBySlug(params.slug)
  return <ProjectDetail project={project} />
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params
  const project = getProjectBySlug(params.slug)

  return createPageMetadata({
    title: project.title,
    description: project.sub_title,
    path: `/side-projects/${project.slug}`,
    image: "route",
  })
}

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }))
}
