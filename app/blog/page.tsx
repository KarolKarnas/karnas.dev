import styles from "./page.module.scss"
import { fetchBlogCards } from "../lib/data"
import BlogCard from "../ui/molecules/blogCard"
import Link from "next/link"
import MainHeading from "../ui/atoms/mainHeading"

export default async function Portfolio() {
  const blogCards = await fetchBlogCards()
  return (
    <div className={styles.container}>
      <MainHeading color="blue">Blog</MainHeading>

      <div className={styles.gridContainer}>
        {blogCards.map((card, index) => (
          <BlogCard key={index} card={card} />
        ))}
      </div>
    </div>
  )
}
