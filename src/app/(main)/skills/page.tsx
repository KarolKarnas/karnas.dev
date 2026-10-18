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
    "Backend Engineering, Data Analysis, and Agentic AI — Python, Django, FastAPI, Celery, Pandas, pgvector, AWS and Azure.",
}
const groups = [
  {
    number: "01",
    title: "Backend engineering",
    description: "APIs, async workers and the systems behind the product.",
    icons: BACKEND,
    accent: "green",
  },
  {
    number: "02",
    title: "Data & infrastructure",
    description: "From the database to the cloud. Built to run reliably.",
    icons: CLOUD,
    accent: "blue",
  },
  {
    number: "03",
    title: "Languages",
    description: "Python at the core. TypeScript across the stack.",
    icons: PROGRAMMING,
    accent: "purple",
  },
  {
    number: "04",
    title: "Observability",
    description: "Make production behavior visible and understandable.",
    icons: OBSERVABILITY,
    accent: "orange",
  },
  {
    number: "05",
    title: "Testing & quality",
    description: "Confidence in the API, the worker and the user journey.",
    icons: TEST,
    accent: "blue",
  },
  {
    number: "06",
    title: "Frontend & workflow",
    description: "The interfaces and tools that connect the whole system.",
    icons: [...FRONTEND, ...WORKFLOW_TOOLS],
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
          Backend engineering, data analysis and agentic AI.
          <br />A practical stack for turning complex problems into working
          software.
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
          <h2>AI, wired into the backend.</h2>
          <p>Retrieval, embeddings and agent loops as parts of real systems.</p>
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
