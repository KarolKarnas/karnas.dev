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
  function extractDomain(url: string) {
    // if (url === "") {
    //   return
    // }
    const parsedUrl = new URL(url)
    const domain = parsedUrl.hostname.replace("www.", "")
    const domainWithPath = domain + parsedUrl.pathname
    return domainWithPath
  }

  return (
    <li className={`${styles.listItem}`}>
      <a
        className={`${color === "light" ? styles.light : ""}`}
        target="_blank"
        href={socialItem.link}
      >
        <span className={styles.iconContainer}>{socialItem.icon ? socialItem.icon : link.icon}</span>
        <span className={styles.textContainer}>
          {socialItem.short_link
            ? socialItem.short_link
            : extractDomain(socialItem.link)}
        </span>
      </a>
    </li>
  )
}
export default LinkCard
