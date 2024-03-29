import styles from "./page.module.scss"
import Link from "next/link"
import { SIDENAV_ITEMS } from "./utils/constants"
import LinkCard from "./ui/atoms/linkCard"
import { SOCIAL_ITEMS } from "./utils/constants"
import BlogLinks from "./ui/atoms/blogLinks"
import ProjectsLinks from "./ui/atoms/projectsLinks"
import Logo from "./ui/atoms/logo"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <h1>Karol Karnas</h1>
        <h3>Full Stack Developer</h3>
        {/* <h5>Portfolio and Blog</h5> */}
        {/* <div className={styles.description}>
          <Logo />
          <span>is my personal portfolio and place where i share knowledge  </span>
        </div> */}
        <h4>Start</h4>
        <ul className={styles.mainLinks}>
          {SIDENAV_ITEMS.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>
                {item.iconAlt ? item.iconAlt : item.icon} {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <h4>Projects</h4>
        <ProjectsLinks />
      </div>

      <div className={styles.socialLinks}>
        <h4>Social Media</h4>
        <ul>
          {SOCIAL_ITEMS.map((item, index) => (
            <LinkCard key={index} socialItem={item} />
          ))}
        </ul>
        <h4>Blog</h4>
        <BlogLinks />
      </div>
    </div>
  )
}
