import styles from "./blogCard.module.scss"
import { BlogCard } from "../utils/types"
import Image from "next/image"
import Link from "next/link"

type Props = {
  card: BlogCard
}
const BlogCard = ({ card }: Props) => {
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
        <h3>{card.title}</h3>
        <h4>{card.sub_title}</h4>
        {/* <p>{card.content}</p> */}
      </div>

      <div className={styles["content-container"]}>
        <p>{card.content}</p>
      </div>
    </div>
  )
}
export default BlogCard
