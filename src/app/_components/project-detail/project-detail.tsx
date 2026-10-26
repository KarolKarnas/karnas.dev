import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { karnas } from "@/icons"
import getIcons from "@/utils/icon-utils"
import type { Project } from "@/utils/types"
import AuthorFooter from "../author-footer/author-footer"
import DetailFields from "../detail-fields/detail-fields"
import StackIcons from "../stack-icons/stack-icons"
import ProjectVisual, {
  hasProjectVisual,
} from "../project-visual/project-visual"
import styles from "./project-detail.module.scss"

const PROJECT_IDENTITIES: Record<
  string,
  {
    name: string
    label: string
    detail: string
    logo?: string
    symbol?: ReactNode
    width: number
    height: number
    wordmark?: boolean
  }
> = {
  "dms-housing-authority": {
    name: "HOME",
    label: "CLIENT / VIA KRUKO",
    detail: "El Paso, Texas",
    logo: "/assets/clients/home-logo.svg",
    width: 42,
    height: 41,
  },
  "data-bid-machine": {
    name: "Data Bid Machine",
    label: "CLIENT / VIA KRUKO",
    detail: "Google Ads platform",
    logo: "/assets/clients/dbm-logo.png",
    width: 40,
    height: 41,
  },
  "meggiem-art": {
    name: "Meggie M. Art",
    label: "INDEPENDENT PROJECT",
    detail: "Fantasy illustrator",
    logo: "/assets/projects/meggiem-art/logo.png",
    width: 128,
    height: 40,
    wordmark: true,
  },
  "brain-karolkarnas-com": {
    name: "Brain",
    label: "INDEPENDENT PROJECT",
    detail: "Semantic recommendations",
    symbol: "🧠",
    width: 36,
    height: 36,
  },
  "card-piper-com": {
    name: "Card Piper",
    label: "INDEPENDENT PROJECT",
    detail: "Content discovery",
    logo: "/assets/projects/cardpiper/logo.svg",
    width: 42,
    height: 42,
  },
  "karnas-dev": {
    name: "karnas.dev",
    label: "PERSONAL PROJECT",
    detail: "Portfolio & journal",
    symbol: karnas.icon,
    width: 42,
    height: 42,
  },
  "ilustrografia-com": {
    name: "Ilustrografia",
    label: "INDEPENDENT PROJECT",
    detail: "Artist portfolio & print shop",
    logo: "/assets/projects/ilustrografia/logo.png",
    width: 42,
    height: 29,
  },
}

export default function ProjectDetail({
  project,
  professional = false,
}: {
  project: Project
  professional?: boolean
}) {
  const client = PROJECT_IDENTITIES[project.slug]
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
              : "SIDE PROJECT / INDEPENDENT BUILD"}
          </span>
          <time dateTime={project.date}>
            {new Date(project.date).getUTCFullYear()}
          </time>
        </div>
        {client && (
          <div className={styles.client}>
            <span
              className={`${styles.clientMark} ${client.wordmark ? styles.clientWordmark : ""}`}
            >
              {client.logo ? (
                <Image
                  src={client.logo}
                  width={client.width}
                  height={client.height}
                  alt=""
                />
              ) : (
                <span className={styles.clientSymbol} aria-hidden="true">
                  {client.symbol}
                </span>
              )}
            </span>
            <div>
              <span>{client.label}</span>
              <strong>{client.name}</strong>
              <small>{client.detail}</small>
            </div>
          </div>
        )}
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
