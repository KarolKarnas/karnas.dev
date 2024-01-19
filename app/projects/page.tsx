import styles from "./page.module.scss"
import { fetchProjectCards } from "../lib/data"
import ProjectCard from "../ui/molecules/projectCard"

export default async function Portfolio() {
  const projectCards = await fetchProjectCards()
  return (
    <>
      <div className={styles.container}>
        {projectCards.map((card, index) => (
          // <Link key={index} href={card.path}>
          <ProjectCard key={index} card={card} />
          // </Link>
        ))}
      </div>
    </>
  )
}
