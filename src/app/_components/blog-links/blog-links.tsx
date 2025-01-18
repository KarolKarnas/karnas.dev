"use client"

import Link from "next/link"
import styles from "./blog-links.module.scss"
import { useEffect, useState } from "react"

import {
  cloudinary,
  karnas,
  karnasAlt,
  chevronDown,
  plus,
  xMark,
  newFile,
} from "../../../utils/icons"
import { IconText } from "@/utils/types"

export type BlogLinksProps = {
  postLinks: { slug: string; programmingLink: string; icon: string }[]
}

const BlogLinks = ({ postLinks }: BlogLinksProps) => {
  const ICONS: Record<string, IconText> = {
    cloudinary,
    karnas,
    karnasAlt,
    chevronDown,
    plus,
    xMark,
    newFile,
  }

  return (
    <ul className={styles.container}>
      {postLinks.map((link, index) => (
        <li key={index}>
          <Link href={`/blog/${link.slug}`}>
            {ICONS[link.icon]?.icon} {link.programmingLink}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default BlogLinks
