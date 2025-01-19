import styles from "./page.module.scss"
import { Metadata } from "next"
import BlogCard from "../_components/blog-card/blog-card"
import MainHeading from "../_components/main-heading/main-heading"
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
    content: blog.content.slice(0, 200),
    main_image: blog.main_image,
    path: `/blog/${blog.slug}`,
    date: blog.date,
  }))

  return (
    <div className={styles.container}>
      <MainHeading color="blue">Blog</MainHeading>

      <div className={styles.gridContainer}>
        {blogs.map((card, index) => (
          <BlogCard key={index} card={card} />
        ))}
      </div>
    </div>
  )
}
