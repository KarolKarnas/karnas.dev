"use client"

import styles from "./header.module.scss"
import { menuStore } from "../store/menu"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"

type Props = {}
const Header = (props: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const openTabs = menuStore((state) => state.menu.openTabs)
  const activeTab = menuStore((state) => state.menu.activeTab)
  const updateOpenTabs = menuStore((state) => state.updateOpenTabs)
  const removeTab = menuStore((state) => state.removeTab)

  // useEffect(() => {
  //   if (pathname) {
  //     const tabName = pathname.slice(1)
  //     console.log(tabName)
  //     if (tabName.length > 0 && openTabs.length === 0) {
  //       updateOpenTabs(tabName)
  //     }
  //   }
  // })

  return (
    <header className={styles.header}>
      <ul className={styles.ul}>
        {openTabs.map((link, index) => (
          <li key={index} className={link === activeTab ? styles.active : ""}>
            <Link onClick={() => updateOpenTabs(link)} href={`/${link}`}>
              {link}
            </Link>
            <span
              onClick={() => removeTab(link, router)}
              className={styles.span}
            >
              x
            </span>
          </li>
        ))}
      </ul>
    </header>
  )
}
export default Header
