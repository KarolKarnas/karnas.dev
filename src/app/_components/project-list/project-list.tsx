import styles from "./project-list.module.scss"
import MainHeading from "../main-heading/main-heading"
import ProjectCard from "../project-card/project-card"
import { Project, ProjectCardType } from "@/utils/types"

type Props = {
  heading: string
  projects: Project[]
  pathPrefix: string
}

const ProjectList = ({ heading, projects, pathPrefix }: Props) => {
  const cards: ProjectCardType[] = projects.map((project) => ({
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
    path: `${pathPrefix}/${project.slug}`,
    date: project.date,
  }))

  return (
    <div className={styles.container}>
      <MainHeading color="orange">{heading}</MainHeading>
      <div className={styles["grid-container"]}>
        {cards.map((card, index) => (
          <ProjectCard key={index} card={card} />
        ))}
      </div>
    </div>
  )
}

export default ProjectList
