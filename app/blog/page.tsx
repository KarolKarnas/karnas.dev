import styles from "./page.module.scss"
import { fetchBlogCards } from "../lib/data"
import BlogCard from "../ui/blogCard"
import Link from "next/link"

export default async function Portfolio() {
  const blogCards = await fetchBlogCards()
  return (
    <>
      <div className={styles.container}>
        {blogCards.map((card, index) => (
          // <Link key={index} href={card.path}>
            <BlogCard key={index} card={card} />
          // </Link>
        ))}
      </div>
    </>
  )
}
