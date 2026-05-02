import { Metadata } from "next"
import ProjectList from "@/app/_components/project-list/project-list"
import { getAllProfessional } from "@/lib/api"

export const metadata: Metadata = {
  title: "Professional projects",
  description:
    "Professional client work - backend systems, data analysis, and agentic AI in Python, Django, Celery, Pandas, and beyond.",
}

export default async function ProfessionalProjects() {
  const projects = getAllProfessional()
  return (
    <ProjectList
      heading="Professional projects"
      projects={projects}
      pathPrefix="/professional-projects"
    />
  )
}
