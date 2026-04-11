import styles from "./project-card.module.scss"
import { ProjectCardType } from "../../../utils/types"
import Image from "next/image"
import Link from "next/link"
import getIcons from "@/utils/icon-utils"
import Button from "../button/button"
import StackIcons from "../stack-icons/stack-icons"

type Props = {
  card: ProjectCardType
}
const ProjectCard = ({ card }: Props) => {
  const icons = getIcons(card.icons_stack)
  return (
    <Link href={card.path} className={styles.cardLink}>
      <div className={styles.card}>
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
          <Button text="Read more" color="orange" />
        </div>
      </div>
    </Link>
  )
}
export default ProjectCard
