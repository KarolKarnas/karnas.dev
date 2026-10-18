import type { Metadata } from "next"
import Link from "next/link"
import {
  PROGRAMMING,
  BACKEND,
  CLOUD,
  FRONTEND,
  TEST,
  WORKFLOW_TOOLS,
  OBSERVABILITY,
  AI_LLM_CONCEPTS,
} from "@/utils/constants"
import getIcons from "@/utils/icon-utils"
import StackIcons from "@/app/_components/stack-icons/stack-icons"
import styles from "./page.module.scss"

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Full-stack engineering with TypeScript, React, Next.js, Python, and Django. Interfaces, APIs, AI integrations, testing, and cloud deployment.",
}
const groups = [
  {
    number: "01",
    title: "Frontend engineering",
    description: "Interfaces, application state and complete user journeys.",
    icons: FRONTEND,
    accent: "purple",
  },
  {
    number: "02",
    title: "Backend engineering",
    description: "APIs, business rules, async workers and data workflows.",
    icons: BACKEND,
    accent: "green",
  },
  {
    number: "03",
    title: "Data & infrastructure",
    description:
      "Databases, containers and the cloud services behind a release.",
    icons: CLOUD,
    accent: "blue",
  },
  {
    number: "04",
    title: "Testing & quality",
    description: "Check the API, the worker and the user journey together.",
    icons: TEST,
    accent: "blue",
  },
  {
    number: "05",
    title: "Observability",
    description: "Trace failures across the interface, worker and integration.",
    icons: OBSERVABILITY,
    accent: "orange",
  },
  {
    number: "06",
    title: "Languages & workflow",
    description:
      "Python, TypeScript and the tools for planning and shipping work.",
    icons: [...PROGRAMMING, ...WORKFLOW_TOOLS],
    accent: "purple",
  },
]
export default function Skills() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>TOOLBOX / HOW I BUILD</span>
        <h1>
          Good systems.
          <br />
          <span>The right tools.</span>
        </h1>
        <p>
          Full-stack engineering, from interface to infrastructure.
          <br />A practical stack for building, testing and delivering the whole
          feature.
        </p>
        <Link href="/professional-projects">
          See these tools at work <span aria-hidden="true">↗</span>
        </Link>
      </header>
      <div className={styles.grid}>
        {groups.map((group) => (
          <section
            key={group.number}
            className={styles.group}
            data-accent={group.accent}
          >
            <header>
              <span className={styles.number}>{group.number}</span>
              <h2>{group.title}</h2>
              <span className={styles.count}>
                {group.icons.length.toString().padStart(2, "0")}
              </span>
            </header>
            <p>{group.description}</p>
            <StackIcons icons={getIcons(group.icons)} size="large" texts />
          </section>
        ))}
      </div>
      <section className={styles.ai}>
        <div>
          <span className={styles.eyebrow}>CONNECTING THE DOTS</span>
          <h2>AI, connected to the product.</h2>
          <p>
            Retrieval, embeddings and model APIs built into usable workflows.
          </p>
        </div>
        <ul>
          {AI_LLM_CONCEPTS.map((concept) => (
            <li key={concept}>{concept}</li>
          ))}
        </ul>
      </section>
      <footer className={styles.footer}>
        <span>A stack is a starting point. The problem comes first.</span>
        <Link href="/contact">
          Let’s talk about yours <span aria-hidden="true">↗</span>
        </Link>
      </footer>
    </div>
  )
}
