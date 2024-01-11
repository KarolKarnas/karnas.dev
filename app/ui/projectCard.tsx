import styles from "./projectCard.module.scss"
import { ProjectCard } from "../utils/types"
import Button from "./button"
import Image from "next/image"

type Props = {
  card: ProjectCard
}
const ProjectCard = ({ card }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles["text-container"]}>
        <div className={styles["date-container"]}>
          <span>Karol Karnas</span>
          <span>{new Date(card.date).toLocaleDateString("en-GB")}</span>
        </div>
        <h2>{card.title}</h2>
        <h3>{card.sub_title}</h3>
        {/* <p>{card.content}</p> */}
      </div>
      <Image
        src={card.main_image}
        width={520}
        height={650}
        alt={card.short_title}
      />
      <div className={styles["info-container"]}>
        <div className={styles["content-container"]}>
          <p>{card.content}</p>
          <Button text="Read more" color="orange" path={card.path} />
        </div>
      </div>
    </div>
  )
}
export default ProjectCard
