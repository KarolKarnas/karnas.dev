import styles from "./page.module.scss"
import { fetchBlogCards } from "../lib/data"
import BlogCard from "../ui/molecules/blogCard"
import MainHeading from "../ui/atoms/mainHeading"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog',
};

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
