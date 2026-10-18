import Link from "next/link"
import { SOCIAL_ITEMS } from "@/utils/constants"
import LinkCard from "../link-card/link-card"
import styles from "./author-footer.module.scss"
import { PROFILE } from "@/utils/profile"

const AuthorFooter = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.authorName} href="/about">
        <span>{PROFILE.name}</span>
        <span>{PROFILE.role}</span>
        <span>{PROFILE.tagline}</span>
      </Link>
      <ul className={styles.links}>
        {SOCIAL_ITEMS.map((item, index) => (
          <LinkCard key={index} socialItem={item} color="light" />
        ))}
      </ul>
    </div>
  )
}
export default AuthorFooter
