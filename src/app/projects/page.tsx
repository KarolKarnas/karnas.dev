import styles from "./page.module.scss"
import { Metadata } from "next"
import ProjectCard from "../_components/project-card/project-card"
import MainHeading from "../_components/main-heading/main-heading"
import { getAllProjects } from "@/lib/api"
import { ProjectCardType } from "@/utils/types"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore a collection of full-stack projects meticulously crafted using modern tools such as React, TypeScript, Node.js and Next.js.",
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
