import styles from "./page.module.scss"
import { userStore } from "./store/user"
import Link from "next/link"
import { SIDENAV_ITEMS } from "./utils/constants"
import { newFile, folderOpen, nodeJs } from "./utils/icons"

export default function Home() {
  const startItems = [SIDENAV_ITEMS[1], SIDENAV_ITEMS[4]]

  return (
    <div className={styles.container}>
      <div>
        <h1>Karol Karnas</h1>
        <h3>Full Stack Developer</h3>
        <h4>Start</h4>
        <ul>
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
        <h4>Recent</h4>
        <ul>
          {SIDENAV_ITEMS[3].subMenuItems &&
            SIDENAV_ITEMS[3].subMenuItems.map((item, index) => (
              <li key={index}>
                {item.iconAlt ? item.iconAlt : item.icon}
                <Link href={item.path}>{item.title} </Link>
              </li>
            ))}
        </ul>
      </div>

      <div className={styles.social}>
      <h4>Social</h4>
        <ul>
          <li>Creating SPA (Single Page Application)</li>
          <li>JavaScript and TypeScript</li>
          <li>React with Redux, RTK, RTK Query</li>
          <li>Creating SPA (Single Page Application)</li>
          <li>Testing (Jest, Cypress)</li>
          <li>React with Redux, RTK, RTK Query</li>
          <li>Creating SPA (Single Page Application)</li>
          <li>Testing (Jest, Cypress)</li>
        </ul>
        <Link href={"/projects/karnas"}>karnas</Link>
      </div>
    </div>
  )
}
