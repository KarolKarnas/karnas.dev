import styles from "./blogCard.module.scss"
import { ProjectCard } from "../utils/types"
import Button from "./button"


type Props = {
  card: ProjectCard
}
const ProjectCard = ({ card }: Props) => {
  return (

    <div
      className={styles.card}
      style={{ backgroundImage: `url(${card.main_image})` }}
    >
      <div className={styles["text-container"]}>
        <div className={styles["date-container"]}>
          <span>Karol Karnas</span>
          <span>{new Date(card.date).toLocaleDateString("en-GB")}</span>
        </div>
        <h2>{card.title}</h2>
        <h3>{card.sub_title}</h3>
        {/* <p>{card.content}</p> */}
      </div>

      <div className={styles["content-container"]}>
        <p>{card.content}</p>
      <Button text="Read more" color="orange" path={card.path} />
      </div>
    </div>

  )
}
export default ProjectCard
