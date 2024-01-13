import { SocialItem } from "../utils/types"
import Link from "next/link"
import styles from "./socialCard.module.scss"

type Props = {
  socialItem: SocialItem
}
const SocialCard = ({ socialItem }: Props) => {
  return (
    <li className={styles.listItem}>
      <a target="_blank" href={socialItem.path}>{socialItem.icon} {socialItem.shortUrl}</a>
    </li>
  )
}
export default SocialCard
