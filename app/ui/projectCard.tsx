"use client"

import styles from "./projectCard.module.scss"
import { ProjectCard } from "../utils/types"
import Button from "./button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import useIcon from "../hooks/useIcon"

type Props = {
  card: ProjectCard
}
const ProjectCard = ({ card }: Props) => {
  const router = useRouter()

  const changeDirectory = (path: string) => {
    router.push(path)
  }

  const icons = useIcon(card.icons_stack)
  // console.log(card.stack)
  // console.log(icons)
  return (
    <div
      className={styles.card}
      onClick={() => {
        changeDirectory(card.path)
      }}
    >
      <div className={styles["text-container"]}>
        {/* <div className={styles["date-container"]}>
          <span>Karol Karnas</span>
          <span>{new Date(card.date).toLocaleDateString("en-GB")}</span>
        </div> */}
        <h2>{card.title}</h2>
        <h3>{card.sub_title}</h3>
        {/* <p>{card.content}</p> */}
      </div>
      <Image
        src={card.main_image}
        width={960}
        height={540}
        alt={card.short_title}
      />
      <div className={styles["info-container"]}>
        <div className={styles["content-container"]}>
          <ul>
            {icons.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{card.content}</p>
          <Button text="Read more" color="orange" path={card.path} />
        </div>
      </div>
    </div>
  )
}
export default ProjectCard
