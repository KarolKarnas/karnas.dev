import styles from "./blogCard.module.scss"
import { BlogCard } from "../utils/types"
import Image from "next/image"

type Props = {
  card: BlogCard
}
const BlogCard = ({ card }: Props) => {
  return (
    <div className={styles.card}>
      <h3>{card.title}</h3>
      <Image
              src={card.main_image}
              width={400}
              height={400}
              alt={`${card.sub_title}`}
            />
    </div>
  )
}
export default BlogCard
