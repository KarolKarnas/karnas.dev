import styles from "./page.module.scss"
import Link from "next/link"
import { SIDENAV_ITEMS } from "./utils/constants"
import LinkCard from "./ui/atoms/linkCard"
import { SOCIAL_ITEMS } from "./utils/constants"
import BlogLinks from "./ui/atoms/blogLinks"
import ProjectsLinks from "./ui/atoms/projectsLinks"
// import * as icons from './utils/icons';


export default function Home() {

  //  console.log(icons)

  return (
    <div className={styles.container}>
      <div>
        <h1>Karol Karnas</h1>
        <h3>Full Stack Developer</h3>
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
