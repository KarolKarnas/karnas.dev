"use client"

import styles from "./blogCard.module.scss"
import { BlogCard } from "../../utils/types"
import Button from "../atoms/button"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

type Props = {
  card: BlogCard
}
const BlogCard = ({ card }: Props) => {
  const router = useRouter()

  const changeDirectory = (path: string) => {
    router.push(path)
  }
  return (
    <div
      className={styles.card}
      // style={{ backgroundImage: `url(${card.main_image})` }}
      onClick={() => {
        changeDirectory(card.path)
      }}
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
      <Image
        src={card.main_image}
        width={600}
        height={600}
        alt={card.short_title}
      />

      <div className={styles["content-container"]}>
        <p>{card.content}</p>
        <Button text="Read more" color="blue" path={card.path} />
      </div>
    </div>
  )
}
export default BlogCard
