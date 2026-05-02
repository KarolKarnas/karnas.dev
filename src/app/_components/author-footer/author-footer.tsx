import Link from "next/link"
import { SOCIAL_ITEMS } from "@/utils/constants"
import LinkCard from "../link-card/link-card"
import styles from "./author-footer.module.scss"

const AuthorFooter = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.authorName} href="/about">
        <span>Karol Karnas</span>
        <span>Backend Engineer</span>
        <span>Data Analysis</span>
        <span>Agentic AI</span>
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
