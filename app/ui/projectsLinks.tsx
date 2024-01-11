"use client"

import Link from "next/link"
import styles from "./projectsLinks.module.scss"
import { navStore } from "../store/nav"
import { useEffect, useState } from "react"

const ProjectsLinks = () => {
  // prevent react-hydration-error
  const [isClient, setIsClient] = useState(false)

  const navLinks = navStore((state) => state.menu.navLinks)

  const projectsLinks = navLinks.find((item) => item.title === "projects")

  // prevent react-hydration-error
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <ul className={styles.container}>
      {isClient
        ? projectsLinks &&
          projectsLinks.subMenuItems &&
          projectsLinks.subMenuItems.map((item, index) => (
            <li key={index}>
              
              <Link href={item.path}>{item.icon} {item.title}</Link>
            </li>
          ))
        : null}
    </ul>
  )
}
export default ProjectsLinks
