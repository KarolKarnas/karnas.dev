"use client"

import { SocialItem } from "../utils/types"
import Link from "next/link"
import styles from "./blogLinks.module.scss"
import { navStore } from "../store/nav"
import { useEffect, useState } from "react"

const BlogLinks = () => {
  // prevent react-hydration-error
  const [isClient, setIsClient] = useState(false)

  const navLinks = navStore((state) => state.menu.navLinks)

  const blogLinks = navLinks.find((item) => item.title === "blog")

  // prevent react-hydration-error
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <ul className={styles.container}>
      {isClient
        ? blogLinks &&
          blogLinks.subMenuItems &&
          blogLinks.subMenuItems.map((item, index) => (
            <li key={index}>
              {item.icon}
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))
        : null}
    </ul>
  )
}
export default BlogLinks
