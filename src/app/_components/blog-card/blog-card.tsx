import styles from "./blog-card.module.scss"
import { BlogCardType } from "../../../utils/types"
import Image from "next/image"
import Link from "next/link"
import getIcons from "@/utils/icon-utils"
import Button from "../button/button"
import StackIcons from "../stack-icons/stack-icons"

// Note: Button is used without `path` prop to avoid nested <a> tags,
// since the entire card is already wrapped in a Link

type Props = {
  card: BlogCardType
}
const BlogCard = ({ card }: Props) => {
  const icons = card.icons_stack ? getIcons(card.icons_stack) : []
  return (
    <Link href={card.path} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles["text-container"]}>
          <div className={styles["date-container"]}>
            <span>Karol Karnas</span>
            <span>{new Date(card.date).toLocaleDateString("en-GB")}</span>
          </div>
          <h2>{card.title}</h2>
          <h3>{card.sub_title}</h3>
        </div>
        <Image
          src={card.main_image}
          width={600}
          height={600}
          alt={card.title}
        />

        <div className={styles["content-container"]}>
          {icons.length > 0 && <StackIcons icons={icons} />}
          <p>{card.content}</p>
          <Button text="Read more" color="blue" />
        </div>
      </div>
    </Link>
  )
}
export default BlogCard
