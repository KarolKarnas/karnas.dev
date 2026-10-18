import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ABOUT } from "@/utils/info"
import { MY_SKILLS, QUOTATION } from "@/utils/constants"
import getIcons from "@/utils/icon-utils"
import Json from "@/app/_components/json/json"
import StackIcons from "@/app/_components/stack-icons/stack-icons"
import styles from "./page.module.scss"

export const metadata: Metadata = {
  title: "About",
  description:
    "Karol Karnas — Backend Engineer building data pipelines, agentic AI workflows, and analytics in Python, Django, FastAPI, and Celery.",
}
export default function About() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>ABOUT / THE PERSON BEHIND THE CODE</span>
        <h1>
          Engineer by trade.
          <br />
          <em>Builder by nature.</em>
        </h1>
        <p>Backend engineering · Data analysis · Agentic AI</p>
      </header>
      <div className={styles.columns}>
        <div className={styles.info}>
          <div className={styles.fileHeader}>
            <span>about.json</span>
            <span>Karol Karnas</span>
          </div>
          <Json code={ABOUT} />
        </div>
        <aside className={styles.image}>
          <Image
            src="/karol_karnas_full_stack_developer.jpg"
            width={683}
            height={1024}
            alt="Karol Karnas"
            sizes="(max-width: 768px) 300px, 280px"
          />
          <blockquote>{QUOTATION}</blockquote>
          <Link href="/contact">
            Let’s build something <span aria-hidden="true">↗</span>
          </Link>
        </aside>
      </div>
      <section className={styles.stack}>
        <span>TOOLS I WORK WITH</span>
        <StackIcons icons={getIcons(MY_SKILLS)} texts />
      </section>
    </div>
  )
}
