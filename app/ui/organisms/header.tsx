"use client"

import styles from "./header.module.scss"
import { navStore } from "../../store/nav"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { xMark } from "../../utils/icons"
import { SIDENAV_ITEMS } from "../../utils/constants"

type Props = {}
const Header = (props: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const [showRemove, setShowRemove] = useState<string | null>(null)
  const openTabs = navStore((state) => state.menu.openTabs)
  const activeTab = navStore((state) => state.menu.activeTab)
  const updateOpenTabs = navStore((state) => state.updateOpenTabs)
  const removeTab = navStore((state) => state.removeTab)
  // const removeAllTabs = navStore((state) => state.removeAllTabs)
  const navLinks = navStore((state) => state.menu.navLinks)

  useEffect(() => {
    // if (pathname && pathname === "/") {
    //   removeAllTabs()
    // }
    // if (pathname && pathname !== "/") {
    if (pathname) {
      const link = navLinks.find((item) => item.path === pathname)
      if (link) {
        updateOpenTabs(link)
      } else {
        navLinks.forEach((item) => {
          if (item.subMenuItems) {
            const subLink = item.subMenuItems.find(
              (subItem) => subItem.path === pathname
            )
            if (subLink) {
              updateOpenTabs(subLink)
            }
          }
        })
      }
    }
  }, [navLinks, pathname, updateOpenTabs])

  return (
    <header className={styles.header}>
      <ul>
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

            {/* {openTabs.length === 1 ? null : (activeTab && item.title === activeTab.title) || */}
            {item.path === "/" ? null : (activeTab &&
                item.title === activeTab.title) ||
              showRemove === item.title ? (
              <div
                onClick={() => removeTab(item, router)}
                className={styles.xMark}
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
