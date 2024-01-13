import { SocialItem } from "../utils/types"
import Link from "next/link"
import styles from "./socialCard.module.scss"
import { link } from "../utils/icons"

type Props = {
  modLink?: 'short'
  socialItem: SocialItem
}
const SocialCard = ({ socialItem, modLink }: Props) => {
  return (
    <li className={modLink === 'short' ? styles.short : styles.listItem}>
      <a target="_blank" href={socialItem.path}>{socialItem.icon? socialItem.icon: link} <span>{socialItem.shortUrl}</span></a>
    </li>
  )
}
export default SocialCard
