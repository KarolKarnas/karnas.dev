import styles from "./page.module.scss"
import { fetchBlogCards } from "../lib/data"
import BlogCard from "../ui/blogCard"

export default async function Portfolio() {
  const blogCards = await fetchBlogCards()
  return (
    <>
      <h1>BLOG</h1>
      <div className={styles.container}>
        {blogCards.map((card, index) => (
          <BlogCard key={index} card={card} />
        ))}
      </div>
    </>
  )
}
