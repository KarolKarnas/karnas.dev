import styles from "./page.module.scss"
import Link from "next/link"
import { SIDENAV_ITEMS } from "../utils/constants"
import { SOCIAL_ITEMS } from "../utils/constants"
import LinkCard from "./_components/link-card/link-card"
import BlogLinks from "./_components/blog-links/blog-links"
import ProjectsLinks from "./_components/project-links/projects-links"

export default function Home() {
  const postLinks = SIDENAV_ITEMS.find((item) => item.title === "blog")
  const projectLinks = SIDENAV_ITEMS.find((item) => item.title === "projects")

  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <h1>Karol Karnas</h1>
        <h3>Full-stack developer</h3>
        <h4>Start</h4>
        <ul className={styles['main-links']}>
          {SIDENAV_ITEMS.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>
                {item.iconAlt ? item.iconAlt : item.icon} {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <h4>Projects</h4>
        {projectLinks?.subMenuItems && (
          <ProjectsLinks projectLinks={projectLinks.subMenuItems} />
        )}
      </div>

      <div className={styles['social-links']}>
        <h4>Social Media</h4>
        <ul>
          {SOCIAL_ITEMS.map((item, index) => (
            <LinkCard key={index} socialItem={item} />
          ))}
        </ul>
        <h4>Blog</h4>
        {postLinks?.subMenuItems && (
          <BlogLinks postLinks={postLinks.subMenuItems} />
        )}
      </div>
    </div>
  )
}
