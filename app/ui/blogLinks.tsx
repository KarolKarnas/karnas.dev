"use client"

import { SocialItem } from "../utils/types"
import Link from "next/link"
import styles from "./blogLinks.module.scss"
import { navStore } from "../store/nav"

const BlogLinks = () => {
  const navLinks = navStore((state) => state.menu.navLinks)

  const blogLinks = navLinks.find((item) => item.title === "blog")

  console.log("aaa", blogLinks)
  return (
    <ul className={styles.container}>
      {blogLinks &&
        blogLinks.subMenuItems &&
        blogLinks.subMenuItems.map((item, index) => (
          <li key={index}>
            {item.icon}
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
    </ul>
  )
}
export default BlogLinks
