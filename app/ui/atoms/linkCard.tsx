import { SocialItem } from "../../utils/types"
import Link from "next/link"
import styles from "./linkCard.module.scss"
import { link } from "../../utils/icons"

type Props = {
  // modLink?: 'short'
  socialItem: SocialItem
  color?: "light"
}
const LinkCard = ({ socialItem, color }: Props) => {
  return (
    <li className={`${styles.listItem}`}>
      <a
        className={`${color === "light" ? styles.light : ""}`}
        target="_blank"
        href={socialItem.link}
      >
        {socialItem.icon ? socialItem.icon : link}{" "}
        <span>{socialItem.short_link}</span>
      </a>
    </li>
  )
}
export default LinkCard
