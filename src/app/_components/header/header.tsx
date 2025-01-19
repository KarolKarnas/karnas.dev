"use client"

import styles from "./header.module.scss"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { xMark } from "../../../utils/icons"
import { SIDENAV_ITEMS } from "../../../utils/constants"
import { SideNavItem } from "@/utils/types"

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()

  const [showRemove, setShowRemove] = useState<string | null>(null)

  const [openTabs, setOpenTabs] = useState<SideNavItem[]>([SIDENAV_ITEMS[0]])

  const getActiveTab = (pathname: string) => {
    return SIDENAV_ITEMS.find(
      (item) =>
        item.path === pathname ||
        (item.subMenuItems &&
          item.subMenuItems.some((subItem) => subItem.path === pathname))
    )
  }

  const updateOpenTabs = (tab: SideNavItem) => {
    setOpenTabs((prevTabs) => {
      if (!prevTabs.some((t) => t.path === tab.path)) {
        return [...prevTabs, tab]
      }
      return prevTabs
    })
  }

const removeTab = (item: SideNavItem) => {
  setOpenTabs((prevTabs) => prevTabs.filter((tab) => tab.path !== item.path))
  // router.push("/")
}

  const activeTab = getActiveTab(pathname)

  useEffect(() => {
    if (pathname) {
      const newTab = getActiveTab(pathname)
      if (newTab) {
        updateOpenTabs(newTab)
      }
    }
  }, [pathname])

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
              // onClick={() => updateOpenTabs(item)}
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

            {item.path === "/" ? null : (activeTab &&
                item.title === activeTab.title) ||
              showRemove === item.title ? (
              <div onClick={() => removeTab(item)} className={styles.xMark}>
                {xMark.icon}
              </div>
            ) : null}
          </div>
        ))}
      </ul>
    </header>
  )
}
export default Header
