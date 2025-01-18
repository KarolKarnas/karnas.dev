import Link from "next/link"
import styles from "./blog-links.module.scss"
import {  SideNavItem } from "@/utils/types"

export type BlogLinksProps = {
  postLinks: SideNavItem[]
}

const BlogLinks = ({ postLinks }: BlogLinksProps) => {

  return (
    <ul className={styles.container}>
      {postLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.path}>
            {link.icon} {link.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default BlogLinks
