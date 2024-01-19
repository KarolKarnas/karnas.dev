import styles from "./page.module.scss"
import Button from "../../ui/atoms/button"
import { fetchBlogCards } from "@/app/lib/data"
import MainHeading from "@/app/ui/atoms/mainHeading"
import BlogCard from "@/app/ui/molecules/blogCard"

export default async function About() {
  const blogCards = await fetchBlogCards()

  return (
    <div className={styles.container}>
      <MainHeading color="blue">Edit some post Sir!</MainHeading>

      <div className={styles.gridContainer}>
        {blogCards.map((card, index) => (
          <div key={index} className={styles.cardContainer}>
            <BlogCard card={card} />
            <div className={styles.buttons}>
              <Button color="blue" text="Edit" path={`/dashboard/posts/${card.slug}/edit`} />
              <Button color="pink" text="Delete" path="/" />
            </div>
          </div>
        ))}
      </div>

      <Button
        text={"Post Create"}
        color="blue"
        path="/dashboard/posts/create"
      ></Button>
    </div>
  )
}
