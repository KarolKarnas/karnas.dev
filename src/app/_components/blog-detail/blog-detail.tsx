import Link from "next/link"
import Image from "next/image"
import getIcons from "@/utils/icon-utils"
import type { Post } from "@/utils/types"
import AuthorFooter from "../author-footer/author-footer"
import DetailFields from "../detail-fields/detail-fields"
import StackIcons from "../stack-icons/stack-icons"
import styles from "./blog-detail.module.scss"

export default function BlogDetail({ post }: { post: Post }) {
  return (
    <article className={styles.container} data-image-gallery>
      <header className={styles.header}>
        <Link href="/blog" className={styles.back}>
          ← Back to journal
        </Link>
        <div className={styles.meta}>
          <span>FIELD NOTES</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>
        </div>
        <h1>{post.title}</h1>
        <p className={styles.subtitle}>{post.sub_title}</p>
        <span className={styles.byline}>By {post.author_name}</span>
        {post.icons_stack && <StackIcons icons={getIcons(post.icons_stack)} />}
      </header>
      <a
        className={styles.cover}
        data-fit={post.main_image_fit ?? "contain"}
        href={post.main_image}
        target="_blank"
        rel="noreferrer"
        data-lightbox
        aria-label={`Enlarge image for ${post.title}`}
      >
        <Image
          src={post.main_image}
          width={1200}
          height={675}
          alt={post.title}
          sizes="(max-width: 768px) 100vw, 900px"
        />
        <span className={styles.imageAction} aria-hidden="true">
          Enlarge image ⤢
        </span>
      </a>
      <div className={styles.content}>
        <h2>{post.content_title}</h2>
        <p className={styles.lead}>{post.content}</p>
        <DetailFields fields={post.fields} fallbackTitle={post.title} />
        <AuthorFooter />
      </div>
    </article>
  )
}
