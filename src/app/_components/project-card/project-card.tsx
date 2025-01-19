"use client"

import styles from "./project-card.module.scss"
import { ProjectCardType } from "../../../utils/types"
import Image from "next/image"
import { useRouter } from "next/navigation"
import useIcon from "@/hooks/useIcon"
import Button from "../button/button"
import StackIcons from "../stack-icons/stack-icons"

type Props = {
  card: ProjectCardType
}
const ProjectCard = ({ card }: Props) => {
  const router = useRouter()

  const changeDirectory = (path: string) => {
    router.push(path)
  }
  const icons = useIcon(card.icons_stack)
  return (
    <div
      className={styles.card}
      onClick={() => {
        changeDirectory(card.path)
      }}
    >
      <div className={styles["text-container"]}>
        <h2>{card.title}</h2>
        <h3>{card.sub_title}</h3>
      </div>
      <Image
        src={card.main_image}
        width={1920}
        height={1080}
        alt={card.title}
      />

      <div className={styles["content-container"]}>
        <StackIcons icons={icons} />
        <h4>{card.content_title}</h4>
        <p>{card.content}</p>
        <Button text="Read more" color="orange" path={card.path} />
      </div>
    </div>
  )
}
export default ProjectCard
