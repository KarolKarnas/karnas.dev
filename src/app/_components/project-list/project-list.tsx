import ProjectCard from "../project-card/project-card"
import type { Project, ProjectCardType } from "@/utils/types"
import styles from "./project-list.module.scss"

type Props = { heading: string; projects: Project[]; pathPrefix: string }
export default function ProjectList({ heading, projects, pathPrefix }: Props) {
  const professional = pathPrefix === "/professional-projects"
  const cards: ProjectCardType[] = projects.map((project) => ({
    ...project,
    path: `${pathPrefix}/${project.slug}`,
  }))
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>
          {professional
            ? "SELECTED WORK / PRODUCTION SYSTEMS"
            : "PERSONAL LAB / IDEAS INTO SOFTWARE"}
        </span>
        <h1>
          {heading}
          <span>.</span>
        </h1>
        <p>
          {professional
            ? "Client work across interfaces, backend systems, and AI integrations. Features built around real workflows and production constraints."
            : "A place to explore, experiment and build. From semantic search to full-stack products."}
        </p>
        <div className={styles.meta}>
          <span>{projects.length.toString().padStart(2, "0")} projects</span>
          <span>
            {professional
              ? "Interfaces · Systems · Delivery"
              : "Built out of curiosity"}
          </span>
        </div>
      </header>
      <div className={styles.grid}>
        {cards.map((card) => (
          <ProjectCard key={card.slug} card={card} />
        ))}
      </div>
    </div>
  )
}
