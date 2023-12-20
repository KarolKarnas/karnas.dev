"use client"

import styles from "./header.module.scss"
import { menuStore } from "../store/menu"
import Link from "next/link"

type Props = {}
const Header = (props: Props) => {
  const openTabs = menuStore((state) => state.menu.openTabs)
  const activeTab = menuStore((state) => state.menu.activeTab)
  const updateOpenTabs = menuStore((state) => state.updateOpenTabs)
  const removeTab = menuStore((state) => state.removeTab)

  return (
    <header className={styles.header}>
      <ul className={styles.ul}>
        {openTabs.map((link, index) => (
          <li key={index} className={link === activeTab ? styles.active : ""}>
            <Link
              onClick={() => updateOpenTabs(link)}
              href={`/${link === "home" ? "" : link}`}
            >
              {link}
            </Link>
            <span onClick={() => removeTab(link)} className={styles.span}>
              x
            </span>
          </li>
        ))}
      </ul>
    </header>
  )
}
export default Header
