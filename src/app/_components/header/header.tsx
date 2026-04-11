"use client"

import styles from "./header.module.scss"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { xMark } from "@/icons"
import { SIDENAV_ITEMS } from "../../../utils/constants"
import { SideNavItem } from "@/utils/types"

const homeSideNavItem = SIDENAV_ITEMS[0]

function getActiveTab(pathname: string): SideNavItem {
  let currentActiveTab = homeSideNavItem

  for (let i = 0; i < SIDENAV_ITEMS.length; i++) {
    const item = SIDENAV_ITEMS[i]
    if (item.path === pathname) {
      currentActiveTab = item
    }
    if (item.subMenuItems) {
      for (let j = 0; j < item.subMenuItems.length; j++) {
        if (item.subMenuItems[j].path === pathname) {
          currentActiveTab = item.subMenuItems[j]
        }
      }
    }
  }

  return currentActiveTab
}

type HeaderProps = {
  onTabsChange?: (hasOpenTabs: boolean) => void
}

const Header = ({ onTabsChange }: HeaderProps) => {

  const router = useRouter()
  const pathname = usePathname()

  const [showRemove, setShowRemove] = useState<string | null>(null)
  const [openTabs, setOpenTabs] = useState<SideNavItem[]>([homeSideNavItem])
  const [activeTab, setActiveTab] = useState<SideNavItem | null>(getActiveTab(pathname))
  const [nextTab, setNextTab] = useState<SideNavItem | null>(null)
  const [tabsCleared, setTabsCleared] = useState(false)

  const updateOpenTabs = (tab: SideNavItem) => {
    setOpenTabs((prevTabs) => {
      if (!prevTabs.some((t) => t.path === tab.path)) {
        return [...prevTabs, tab]
      }
      return prevTabs
    })
  }

  const removeTab = (item: SideNavItem) => {
    const filteredTabs = openTabs.filter((tab) => tab.path !== item.path)
    setOpenTabs(filteredTabs)

    if (filteredTabs.length === 0) {
      setActiveTab(null)
      setNextTab(null)
      setTabsCleared(true)
      router.push("/")
      return
    }

    if (activeTab?.path === item.path) {
      const currentTabIndex = openTabs.indexOf(item)
      const lastFilteredIndex = filteredTabs.length - 1
      const newItem = currentTabIndex <= lastFilteredIndex
        ? filteredTabs[currentTabIndex]
        : filteredTabs[currentTabIndex - 1]
      setActiveTab(newItem)
      setNextTab(newItem)
    }
  }

  useEffect(() => {
    onTabsChange?.(openTabs.length > 0)
  }, [openTabs, onTabsChange])

  // Listen for close-header-tab events from split view (drag header tab to right pane)
  useEffect(() => {
    const handler = (e: Event) => {
      const path = (e as CustomEvent).detail?.path
      if (!path) return
      const item = openTabs.find((t) => t.path === path)
      if (item) removeTab(item)
    }
    document.addEventListener("close-header-tab", handler)
    return () => document.removeEventListener("close-header-tab", handler)
  }, [openTabs, activeTab])

  useEffect(() => {
    if (nextTab) {
      router.push(nextTab.path)
      setNextTab(null)
    }
  }, [nextTab, router])

  useEffect(() => {
    if (pathname && !tabsCleared) {
      const newTab = getActiveTab(pathname)
      if (newTab) {
        setActiveTab(newTab)
        updateOpenTabs(newTab)
      }
    }
    // Reset cleared flag on any new navigation (e.g. sidebar click)
    if (tabsCleared && pathname !== "/") {
      setTabsCleared(false)
    }
  }, [pathname, tabsCleared])

  const [dropIndex, setDropIndex] = useState<number | null>(null)

  const handleDragStart = useCallback(
    (e: React.DragEvent, item: SideNavItem, index: number) => {
      e.dataTransfer.setData("text/x-split-view", "true")
      e.dataTransfer.setData("text/x-split-view-url", item.path)
      e.dataTransfer.setData("text/x-split-view-title", item.title)
      // Mark as from header so split view can move (not copy) the tab
      e.dataTransfer.setData("text/x-from-header", "true")
      e.dataTransfer.setData("text/x-header-reorder", String(index))
      e.dataTransfer.effectAllowed = "copyMove"
    },
    [],
  )

  const handleTabDragOver = useCallback(
    (e: React.DragEvent, index: number) => {
      if (!e.dataTransfer.types.includes("text/x-header-reorder")) return
      e.preventDefault()
      setDropIndex(index)
    },
    [],
  )

  const handleTabDrop = useCallback(
    (e: React.DragEvent, targetIndex: number) => {
      e.preventDefault()
      e.stopPropagation()
      const sourceStr = e.dataTransfer.getData("text/x-header-reorder")
      if (sourceStr === "") return

      const sourceIndex = parseInt(sourceStr, 10)
      if (sourceIndex === targetIndex) {
        setDropIndex(null)
        return
      }

      setOpenTabs((prev) => {
        const next = [...prev]
        const [moved] = next.splice(sourceIndex, 1)
        next.splice(targetIndex, 0, moved)
        return next
      })
      setDropIndex(null)
    },
    [],
  )

  const handleDragEnd = useCallback(() => {
    setDropIndex(null)
  }, [])

  return (
    <header className={styles.header}>
      <ul>
        {openTabs.map((item, index) => (
          <div
            onMouseOver={() => setShowRemove(item.title)}
            onMouseOut={() => setShowRemove(null)}
            key={item.path}
            className={`${styles.container} ${dropIndex === index ? styles.dropIndicator : ""}`}
            draggable
            onDragStart={(e) => handleDragStart(e, item, index)}
            onDragOver={(e) => handleTabDragOver(e, index)}
            onDrop={(e) => handleTabDrop(e, index)}
            onDragEnd={handleDragEnd}
          >
            <Link
              href={item.path}
              draggable={false}
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
