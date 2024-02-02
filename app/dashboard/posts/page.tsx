import styles from "./page.module.scss"
import Button from "../../ui/atoms/button"
import { fetchBlogCards } from "@/app/lib/data"
import MainHeading from "@/app/ui/atoms/mainHeading"
import BlogCard from "@/app/ui/molecules/blogCard"
import FormDeletePost from "@/app/ui/molecules/form/formDeletePost"

export default async function About() {
  const blogCards = await fetchBlogCards()

  return (
    <div className={styles.container}>
      <MainHeading color="blue">Edit Post</MainHeading>

      <div className={styles.gridContainer}>
        {blogCards.map((card, index) => (
          <div key={index} className={styles.cardContainer}>
            <BlogCard card={card} />
            <div className={styles.buttons}>
              <Button
                color="blue"
                text="Edit"
                path={`/dashboard/posts/${card.slug}/edit`}
              />
              <FormDeletePost slug={card.slug} />
            </div>
          </div>
        ))}
      </div>

      {/* <Button
        text={"Post Create"}
        color="blue"
        path="/dashboard/posts/create"
      ></Button> */}
    </div>
  )
}
