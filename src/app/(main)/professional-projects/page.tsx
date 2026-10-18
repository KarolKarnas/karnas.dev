import { Metadata } from "next"
import ProjectList from "@/app/_components/project-list/project-list"
import { getAllProfessional } from "@/lib/api"

export const metadata: Metadata = {
  title: "Professional projects",
  description:
    "Client projects across web interfaces, backend systems, data workflows, and AI integrations. Full-stack delivery with React, Next.js, Python, and Django.",
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
