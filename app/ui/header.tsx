"use client"

import styles from "./header.module.scss"
import { navStore } from "../store/nav"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"

type Props = {}
const Header = (props: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const openTabs = navStore((state) => state.menu.openTabs)
  const activeTab = navStore((state) => state.menu.activeTab)
  const updateOpenTabs = navStore((state) => state.updateOpenTabs)
  const removeTab = navStore((state) => state.removeTab)

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
        {openTabs.map((item, index) => (
          <li key={index} className={activeTab && item.title === activeTab.title ? styles.active : ""}>
            <Link onClick={() => updateOpenTabs(item)} href={item.path}>
              {item.title}
            </Link>
            <span
              onClick={() => removeTab(item, router)}
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
