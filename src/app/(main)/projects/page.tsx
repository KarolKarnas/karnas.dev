import styles from "./page.module.scss"
import { Metadata } from "next"
import ProjectCard from "@/app/_components/project-card/project-card"
import MainHeading from "@/app/_components/main-heading/main-heading"
import { getAllProjects } from "@/lib/api"
import { ProjectCardType } from "@/utils/types"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Personal side projects - backend systems, semantic search with pgvector, and full-stack experiments in Django, Next.js, TypeScript, and React.",
}

export default async function Portfolio() {
  const allProjects = getAllProjects()
  const projects: ProjectCardType[] = allProjects.map((project) => ({
    title: project.title,
    sub_title: project.sub_title,
    slug: project.slug,
    content_title: project.content_title,
    content: project.content.slice(0, 200),
    main_image: project.main_image,
    stack: project.stack,
    icons_stack: project.icons_stack,
    live_demo: project.live_demo,
    repo: project.repo,
    path: `/projects/${project.slug}`,
    date: project.date,
  }))
  return (
    <div className={styles.container}>
      <MainHeading color="orange">Projects</MainHeading>

      <div className={styles["grid-container"]}>
        {projects.map((card, index) => (
          <ProjectCard key={index} card={card} />
        ))}
      </div>
    </div>
  )
}
