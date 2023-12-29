import styles from "./page.module.scss"
import { userStore } from "./store/user"
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>KARNAS.DEV</h1>
      <h3>Full Stack Developer</h3>
      <ul>
        <li>Creating SPA (Single Page Application)</li>
        <li>JavaScript and TypeScript</li>
        <li>React with Redux, RTK, RTK Query</li>
        <li>Creating SPA (Single Page Application)</li>
        <li>Testing (Jest, Cypress)</li>
      </ul>
      <ul>

        
      </ul>
    </div>
  )
}
