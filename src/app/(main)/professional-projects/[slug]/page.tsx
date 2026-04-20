import type { Metadata } from "next"
import ProjectDetail from "@/app/_components/project-detail/project-detail"
import { getAllProfessional, getProfessionalBySlug } from "@/lib/api"

type Params = { params: Promise<{ slug: string }> }

export default async function Page(props: Params) {
  const params = await props.params
  const project = getProfessionalBySlug(params.slug)
  return <ProjectDetail project={project} />
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params
  const project = getProfessionalBySlug(params.slug)

  return {
    title: project.title,
    description: project.content.slice(0, 200),
    openGraph: { images: [project.main_image] },
  }
}

export async function generateStaticParams() {
  return getAllProfessional().map((project) => ({ slug: project.slug }))
}
