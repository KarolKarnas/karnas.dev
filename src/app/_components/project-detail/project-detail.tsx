import Image from "next/image"
import Link from "next/link"
import getIcons from "@/utils/icon-utils"
import type { Project } from "@/utils/types"
import AuthorFooter from "../author-footer/author-footer"
import DetailFields from "../detail-fields/detail-fields"
import StackIcons from "../stack-icons/stack-icons"
import ProjectVisual, {
  hasProjectVisual,
} from "../project-visual/project-visual"
import styles from "./project-detail.module.scss"

export default function ProjectDetail({
  project,
  professional = false,
}: {
  project: Project
  professional?: boolean
}) {
  return (
    <article className={styles.container} data-image-gallery>
      <header className={styles.header}>
        <Link
          className={styles.back}
          href={professional ? "/professional-projects" : "/side-projects"}
        >
          ← Back to {professional ? "professional" : "side"} projects
        </Link>
        <div className={styles.meta}>
          <span>
            {professional
              ? "CASE STUDY / PRODUCTION SYSTEM"
              : "SIDE PROJECT / BUILT FROM CURIOSITY"}
          </span>
          <time dateTime={project.date}>
            {new Date(project.date).getUTCFullYear()}
          </time>
        </div>
        <h1>{project.title}</h1>
        <p>{project.sub_title}</p>
        <div className={styles.links}>
          {project.live_demo && (
            <a href={project.live_demo} target="_blank" rel="noreferrer">
              Visit live project <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer">
              View source <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </header>
      <div className={styles.cover}>
        {hasProjectVisual(project.slug) ? (
          <ProjectVisual slug={project.slug} />
        ) : (
          <a
            href={project.main_image}
            target="_blank"
            rel="noreferrer"
            data-lightbox
            aria-label={`Enlarge image for ${project.title}`}
          >
            <Image
              src={project.main_image}
              width={1440}
              height={810}
              alt={`${project.title} — application preview`}
              sizes="(max-width: 768px) 100vw, 1040px"
            />
          </a>
        )}
      </div>
      <div className={styles.content}>
        <h2>{project.content_title}</h2>
        <p className={styles.lead}>{project.content}</p>
        <section className={styles.technologies}>
          <span>THE STACK</span>
          <StackIcons icons={getIcons(project.icons_stack)} texts />
        </section>
        <DetailFields fields={project.fields} fallbackTitle={project.title} />
        <AuthorFooter />
      </div>
    </article>
  )
}
