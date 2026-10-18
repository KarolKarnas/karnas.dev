import { Metadata } from "next"
import ProjectList from "@/app/_components/project-list/project-list"
import { getAllProjects } from "@/lib/api"

export const metadata: Metadata = {
  title: "Side projects",
  description:
    "Independent projects from concept to deployment: e-commerce, recommendation systems, and a VS Code-inspired portfolio built with React, Next.js, TypeScript, and Django.",
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
