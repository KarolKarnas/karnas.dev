import styles from "./page.module.scss"
import Link from "next/link"
import { SIDENAV_ITEMS } from "./utils/constants"
import SocialCard from "./ui/socialCard"
import { SOCIAL_ITEMS } from "./utils/constants"

export default function Home() {
  const startItems = [SIDENAV_ITEMS[1], SIDENAV_ITEMS[4]]

  return (
    <div className={styles.container}>
      <div>
        <h1>Karol Karnas</h1>
        <h3>Full Stack Developer</h3>
        <h4>Start</h4>
        <ul className={styles.mainLinks}>
          {SIDENAV_ITEMS.map((item, index) => (
            <li key={index}>
              {item.iconAlt ? item.iconAlt : item.icon}
              <Link href={item.path}>{item.title} </Link>
            </li>
          ))}
          {/* <li >
              {newFile}
              <Link href={'/skills'}>Skills... </Link>
            </li>
            <li >
              {folderOpen}
              <Link href={'/projects'}>Projects... </Link>
            </li>
            <li >
              {nodeJs}
              <Link href={'/skills'}>Skills... </Link>
            </li> */}
        </ul>
        <h4>Recent Projects</h4>
        <ul className={styles.mainLinks}>
          {SIDENAV_ITEMS[3].subMenuItems &&
            SIDENAV_ITEMS[3].subMenuItems.map((item, index) => (
              <li key={index}>
                {item.iconAlt ? item.iconAlt : item.icon}
                <Link href={item.path}>{item.title} </Link>
              </li>
            ))}
        </ul>
      </div>

      <div className={styles.socialLinks}>
        <h4>Social Media</h4>
        <ul>
          {SOCIAL_ITEMS.map((item, index) => (
            <SocialCard key={index} socialItem={item} />
          ))}
        </ul>
      </div>
    </div>
  )
}
