import Image from "next/image"
import Link from "next/link"
import getIcons from "@/utils/icon-utils"
import type { ProjectCardType } from "@/utils/types"
import StackIcons from "../stack-icons/stack-icons"
import ProjectVisual, {
  hasProjectVisual,
} from "../project-visual/project-visual"
import styles from "./project-card.module.scss"

type Props = { card: ProjectCardType }
export default function ProjectCard({ card }: Props) {
  const professional = card.path.startsWith("/professional-projects/")
  return (
    <Link
      href={card.path}
      className={styles.cardLink}
      aria-label={`Explore ${card.title}`}
    >
      <article className={styles.card}>
        <div className={styles.media}>
          {hasProjectVisual(card.slug) ? (
            <ProjectVisual slug={card.slug} />
          ) : (
            <Image
              src={card.main_image}
              width={960}
              height={540}
              alt={`${card.title} — application preview`}
              sizes="(max-width: 768px) 100vw, 600px"
            />
          )}
        </div>
        <div className={styles.body}>
          <div className={styles.meta}>
            <span>
              {professional ? "PROFESSIONAL PROJECT" : "SIDE PROJECT"}
            </span>
            <span>{new Date(card.date).getUTCFullYear()}</span>
          </div>
          <h2>
            {card.title}
            <span aria-hidden="true">↗</span>
          </h2>
          <p>{card.sub_title}</p>
          <div className={styles.stack}>
            <StackIcons icons={getIcons(card.icons_stack.slice(0, 6))} />
            <span>
              {card.icons_stack.length > 6
                ? `+${card.icons_stack.length - 6}`
                : ""}
            </span>
          </div>
          <div className={styles.footer}>
            <span>
              {professional ? "Explore the case study" : "Explore the project"}
            </span>
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
