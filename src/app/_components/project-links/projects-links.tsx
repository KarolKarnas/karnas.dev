import Link from "next/link"
import styles from "./projects-links.module.scss"
import { SideNavItem } from "@/utils/types"

export type ProjectLinksProps = {
  projectLinks: SideNavItem[]
}

const ProjectsLinks = ({ projectLinks }: ProjectLinksProps) => {
  return (
    <ul className={styles.container}>
      {projectLinks.map((item, index) => (
        <li key={index}>
          <Link href={item.path}>
            {item.icon} {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
export default ProjectsLinks
