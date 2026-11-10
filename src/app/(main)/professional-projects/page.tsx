import { Metadata } from "next"
import ProjectList from "@/app/_components/project-list/project-list"
import { getAllProfessional } from "@/lib/api"

export const metadata: Metadata = {
  title: "Professional projects",
  description:
    "Client projects in data processing and AI integrations, delivered full-stack with Python, Django, React, and Next.js.",
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
