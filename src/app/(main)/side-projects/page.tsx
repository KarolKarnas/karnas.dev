import { Metadata } from "next"
import ProjectList from "@/app/_components/project-list/project-list"
import { getAllProjects } from "@/lib/api"

export const metadata: Metadata = {
  title: "Side projects",
  description:
    "Personal side projects - backend systems, semantic search with pgvector, and full-stack experiments in Django, Next.js, TypeScript, and React.",
}

export default async function SideProjects() {
  const projects = getAllProjects()
  return (
    <ProjectList
      heading="Side projects"
      projects={projects}
      pathPrefix="/side-projects"
    />
  )
}
