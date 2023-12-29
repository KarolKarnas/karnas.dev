"use client"

import styles from "./header.module.scss"
import { navStore } from "../store/nav"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import { xMark } from "../utils/icons"

type Props = {}
const Header = (props: Props) => {
  const router = useRouter()
  // const pathname = usePathname()

  const [showRemove, setShowRemove] = useState<string | null>(null)
  const openTabs = navStore((state) => state.menu.openTabs)
  const activeTab = navStore((state) => state.menu.activeTab)
  const updateOpenTabs = navStore((state) => state.updateOpenTabs)
  const removeTab = navStore((state) => state.removeTab)

  return (
    <header className={styles.header}>
      <ul className={styles.ul}>
        {openTabs.map((item, index) => (
          <div
            onMouseOver={() => setShowRemove(item.title)}
            onMouseOut={() => setShowRemove(null)}
            key={index}
            className={styles.container}
          >
            <Link
              onClick={() => updateOpenTabs(item)}
              href={item.path}
              className={
                activeTab && item.title === activeTab.title ? styles.active : ""
              }
            >
              <li>
                {item.icon}
                {item.title}
              </li>
            </Link>

            {(activeTab && item.title === activeTab.title) ||
            showRemove === item.title ? (
              <div
                onClick={() => removeTab(item, router)}
                className={styles.span}
              >
                {xMark}
              </div>
            ) : null}
          </div>
        ))}
      </ul>
    </header>
  )
}
export default Header
