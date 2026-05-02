import styles from "./page.module.scss"
import Link from "next/link"
import { QUOTATION, SIDENAV_ITEMS, SOCIAL_ITEMS } from "@/utils/constants"
import LinkCard from "@/app/_components/link-card/link-card"
import NavLinks from "@/app/_components/nav-links/nav-links"
import TerminalTrigger from "@/app/_components/terminal/terminal-trigger"
import { terminal } from "@/icons"

export default function Home() {
  const postLinks = SIDENAV_ITEMS.find((item) => item.title === "blog")
  const projectLinks = SIDENAV_ITEMS.find(
    (item) => item.title === "side projects",
  )
  const professionalLinks = SIDENAV_ITEMS.find(
    (item) => item.title === "professional projects",
  )

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>Karol Karnas</h1>
        <h3 className={styles.tagline}>
          Backend&nbsp;Engineer · Data&nbsp;Analysis · Agentic&nbsp;AI
        </h3>
        <span className={styles.quote}>{QUOTATION}</span>
      </header>

      <div className={styles.columns}>
        <div className={styles.col1}>
          <h4>Start</h4>
          <ul className={styles["main-links"]}>
            {SIDENAV_ITEMS.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  {item.iconAlt ? item.iconAlt : item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <h4>Professional projects</h4>
          {professionalLinks?.subMenuItems && (
            <NavLinks items={professionalLinks.subMenuItems} />
          )}
          <h4>Side projects</h4>
          {projectLinks?.subMenuItems && (
            <NavLinks items={projectLinks.subMenuItems} />
          )}
        </div>

        <div className={styles["social-links"]}>
          <h4>Social Media</h4>
          <ul className={styles["social-list"]}>
            {SOCIAL_ITEMS.map((item, index) => (
              <LinkCard key={index} socialItem={item} />
            ))}
          </ul>
          <h4>Blog</h4>
          {postLinks?.subMenuItems && (
            <NavLinks items={postLinks.subMenuItems} />
          )}
          <h4>Terminal</h4>
          <TerminalTrigger className={styles.terminalLink}>
            {terminal.icon}
            <span>Open interactive terminal</span>
          </TerminalTrigger>
        </div>
      </div>
    </div>
  )
}
