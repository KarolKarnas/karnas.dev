import type { Metadata } from "next"
import ProjectDetail from "@/app/_components/project-detail/project-detail"
import { getAllProfessional, getProfessionalBySlug } from "@/lib/api"
import { createPageMetadata } from "@/lib/social-metadata"

type Params = { params: Promise<{ slug: string }> }

export default async function Page(props: Params) {
  const params = await props.params
  const project = getProfessionalBySlug(params.slug)
  return <ProjectDetail project={project} professional />
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params
  const project = getProfessionalBySlug(params.slug)

  return createPageMetadata({
    title: project.title,
    description: project.sub_title,
    path: `/professional-projects/${project.slug}`,
    image: "route",
  })
}

export async function generateStaticParams() {
  return getAllProfessional().map((project) => ({ slug: project.slug }))
}
