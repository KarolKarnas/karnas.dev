import Link from "next/link"
import { SIDENAV_ITEMS, CORE_SKILLS } from "@/utils/constants"
import { getAllPosts, getAllProfessional } from "@/lib/api"
import getIcons from "@/utils/icon-utils"
import ProjectCard from "@/app/_components/project-card/project-card"
import StackIcons from "@/app/_components/stack-icons/stack-icons"
import TerminalTrigger from "@/app/_components/terminal/terminal-trigger"
import { terminal, gitHub, linkedIn } from "@/icons"
import styles from "./page.module.scss"

export default function Home() {
  const projects = getAllProfessional().slice(0, 2)
  const posts = getAllPosts().slice(0, 3)
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.introduction}>
          <span className={styles.eyebrow}>
            <i /> A DEVELOPER’S WORKSPACE
          </span>
          <h1>
            Karol Karnas<span>.</span>
          </h1>
          <h2>
            Solid backends.
            <br />
            <span>Smarter systems.</span>
          </h2>
          <p>
            Backend engineer at the intersection of data and AI. I build the
            systems that turn complex workflows into software people can rely
            on.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/professional-projects">
              Explore my work <span aria-hidden="true">↗</span>
            </Link>
            <Link className={styles.secondary} href="/contact">
              Let’s talk <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className={styles.social}>
            <a
              href="https://github.com/KarolKarnas"
              target="_blank"
              rel="noreferrer"
            >
              {gitHub.icon}
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/KarolKarnas/"
              target="_blank"
              rel="noreferrer"
            >
              {linkedIn.icon}
              <span>LinkedIn</span>
            </a>
            <span className={styles.location}>Based in Poland</span>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.fileHeader}>
            <span>
              <i /> developer.py
            </span>
            <span>Python</span>
          </div>
          <div
            className={styles.code}
            aria-label="Developer profile: backend engineering, data analysis, agentic AI. Thoughtful systems, from idea to production."
          >
            <div>
              <span>01</span>
              <code>
                <em>class</em> <b>Developer</b>:
              </code>
            </div>
            <div>
              <span>02</span>
              <code>
                {"    name = "}
                <strong>&quot;Karol Karnas&quot;</strong>
              </code>
            </div>
            <div>
              <span>03</span>
              <code>{"    focus = ["}</code>
            </div>
            <div>
              <span>04</span>
              <code>
                {"        "}
                <strong>&quot;Backend engineering&quot;</strong>,
              </code>
            </div>
            <div>
              <span>05</span>
              <code>
                {"        "}
                <strong>&quot;Data analysis&quot;</strong>,
              </code>
            </div>
            <div>
              <span>06</span>
              <code>
                {"        "}
                <strong>&quot;Agentic AI&quot;</strong>,
              </code>
            </div>
            <div>
              <span>07</span>
              <code>{"    ]"}</code>
            </div>
            <div>
              <span>08</span>
              <code> </code>
            </div>
            <div>
              <span>09</span>
              <code>
                {"    "}
                <em>def</em> <b>build</b>(self, idea):
              </code>
            </div>
            <div>
              <span>10</span>
              <code>
                {"        "}
                <em>return</em> idea.to_production()
              </code>
            </div>
          </div>
          <div className={styles.profileFooter}>
            <span>
              <i /> Thoughtful by design.
            </span>
            <span>Built to last.</span>
          </div>
        </div>
      </section>
      <div className={styles.stackRow}>
        <span>MY EVERYDAY STACK</span>
        <StackIcons icons={getIcons(CORE_SKILLS)} texts />
      </div>
      <section className={styles.work}>
        <header className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow}>SELECTED WORK</span>
            <h2>Built for the real world.</h2>
          </div>
          <Link href="/professional-projects">
            All professional projects <span aria-hidden="true">↗</span>
          </Link>
        </header>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              card={{
                ...project,
                path: `/professional-projects/${project.slug}`,
              }}
            />
          ))}
        </div>
      </section>
      <div className={styles.lowerGrid}>
        <section className={styles.explore}>
          <header className={styles.sectionHeader}>
            <h2>Find your way around.</h2>
            <span className={styles.eyebrow}>EXPLORER</span>
          </header>
          <ul>
            {SIDENAV_ITEMS.filter((item) => item.path !== "/").map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <span className={styles.fileIcon}>{item.icon}</span>
                  <span>{item.title}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.journal}>
          <header className={styles.sectionHeader}>
            <h2>Always learning.</h2>
            <Link href="/blog">
              Journal <span aria-hidden="true">↗</span>
            </Link>
          </header>
          <ul>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <span className={styles.postDate}>
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      month: "short",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </span>
                  <span>{post.title}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <footer className={styles.terminalBar}>
        <TerminalTrigger className={styles.terminalLink}>
          {terminal.icon}
          <span>Prefer the terminal?</span>
          <kbd>Ctrl + `</kbd>
        </TerminalTrigger>
      </footer>
    </div>
  )
}
