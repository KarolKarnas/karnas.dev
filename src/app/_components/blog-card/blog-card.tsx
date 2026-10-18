import Image from "next/image"
import Link from "next/link"
import type { BlogCardType } from "@/utils/types"
import styles from "./blog-card.module.scss"

export default function BlogCard({ card }: { card: BlogCardType }) {
  return (
    <Link
      href={card.path}
      className={styles.cardLink}
      aria-label={`Read ${card.title}`}
    >
      <article className={styles.card}>
        <div className={styles.image}>
          <Image
            src={card.main_image}
            width={800}
            height={480}
            alt={card.title}
            sizes="(max-width: 768px) 100vw, 560px"
          />
        </div>
        <div className={styles.body}>
          <time dateTime={card.date}>
            {new Date(card.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>
          <h2>{card.title}</h2>
          <p>{card.content}</p>
          <footer>
            <span>Read the journal</span>
            <span aria-hidden="true">↗</span>
          </footer>
        </div>
      </article>
    </Link>
  )
}
