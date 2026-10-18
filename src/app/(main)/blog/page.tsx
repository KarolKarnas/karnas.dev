import styles from "./page.module.scss"
import { Metadata } from "next"
import BlogCard from "@/app/_components/blog-card/blog-card"
import { getAllPosts } from "@/lib/api"
import { BlogCardType } from "@/utils/types"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Posts about programming courses, front-end, back-end, best practices, TypeScript, React, Next.js, SASS, TailwindCSS",
}

export default async function Portfolio() {
  const allPosts = getAllPosts()
  const blogs: BlogCardType[] = allPosts.map((blog) => ({
    title: blog.title,
    sub_title: blog.sub_title,
    slug: blog.slug,
    content_title: blog.content_title,
    content: blog.content,
    main_image: blog.main_image,
    icons_stack: blog.icons_stack,
    path: `/blog/${blog.slug}`,
    date: blog.date,
  }))

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>FIELD NOTES / ALWAYS LEARNING</span>
        <h1>
          Journal<span>.</span>
        </h1>
        <p>
          Books, courses and ideas that shape the way I build software. Notes
          from an ongoing learning process.
        </p>
        <div className={styles.meta}>
          <span>{blogs.length.toString().padStart(2, "0")} entries</span>
          <span>Engineering · Data · AI</span>
        </div>
      </header>

      <div className={styles["grid-container"]}>
        {blogs.map((card) => (
          <BlogCard key={card.slug} card={card} />
        ))}
      </div>
    </div>
  )
}
