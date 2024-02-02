import styles from "./page.module.scss"
import { fetchProjectCards } from "../lib/data"
import ProjectCard from "../ui/molecules/projectCard"
import MainHeading from "../ui/atoms/mainHeading"

export default async function Portfolio() {
  const projectCards = await fetchProjectCards()
  return (
    <div className={styles.container}>
    <MainHeading color="orange">Projects</MainHeading>

    <div className={styles.gridContainer}>
        {projectCards.map((card, index) => (
          // <Link key={index} href={card.path}>
          <ProjectCard key={index} card={card} />
          // </Link>
        ))}
      </div>
      </div>
  
  )
}
