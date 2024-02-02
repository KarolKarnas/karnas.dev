import styles from "./page.module.scss"
import Button from "../../ui/atoms/button"
import { fetchBlogCards, fetchProjectCards } from "@/app/lib/data"
import MainHeading from "@/app/ui/atoms/mainHeading"
import BlogCard from "@/app/ui/molecules/blogCard"
import ProjectCard from "@/app/ui/molecules/projectCard"
import FormDeleteProject from "@/app/ui/molecules/form/formDeleteProject"

export default async function About() {
  const projectCards = await fetchProjectCards()

  return (
    <div className={styles.container}>
      <MainHeading color="blue">Edit Project</MainHeading>
      <div className={styles.gridContainer}>
        {projectCards.map((card, index) => (
          <div key={index} className={styles.cardContainer}>
            <ProjectCard card={card} />
            <div className={styles.buttons}>
              <Button
                color="blue"
                text="Edit"
                path={`/dashboard/projects/${card.slug}/edit`}
              />
              <FormDeleteProject slug={card.slug} />
            </div>
          </div>
        ))}
      </div>

      {/* <Button
        text={"Project Create"}
        color="blue"
        path="/dashboard/projects/create"
      ></Button> */}
    </div>
  )
}
