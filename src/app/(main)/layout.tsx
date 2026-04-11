"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import styles from "../layout.module.scss"
import SideNav from "../_components/side-nav/side-nav"
import Header from "../_components/header/header"
import SplitView from "../_components/split-view/split-view"
import Logo from "../_components/logo/logo"

const SIDEBAR_MIN = 150
const SIDEBAR_MAX = 500
const SIDEBAR_DEFAULT = 250
const SIDEBAR_WIDTH_KEY = "sidebar-width"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarWidth, setSidebarWidth] = useState(SIDEBAR_DEFAULT)
  const [isMobile, setIsMobile] = useState(false)
  const isDragging = useRef(false)
  const layoutRef = useRef<HTMLDivElement>(null)

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(SIDEBAR_WIDTH_KEY)
    if (saved) {
      const parsed = parseInt(saved, 10)
      if (parsed >= SIDEBAR_MIN && parsed <= SIDEBAR_MAX) {
        setSidebarWidth(parsed)
      }
    }
  }, [])

  // Track mobile state
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(SIDEBAR_WIDTH_KEY, String(sidebarWidth))
  }, [sidebarWidth])

  const handleDividerMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    isDragging.current = true
    document.body.style.cursor = "col-resize"
    document.body.style.userSelect = "none"
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !layoutRef.current) return
      const rect = layoutRef.current.getBoundingClientRect()
      const newWidth = e.clientX - rect.left
      setSidebarWidth(Math.min(Math.max(newWidth, SIDEBAR_MIN), SIDEBAR_MAX))
    }

    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false
        document.body.style.cursor = ""
        document.body.style.userSelect = ""
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  const [hasOpenTabs, setHasOpenTabs] = useState(true)

  return (
    <div className={styles.layout} ref={layoutRef}>
      <SideNav width={isMobile ? undefined : sidebarWidth} />
      {!isMobile && (
        <div
          className={styles.sidebarDivider}
          onMouseDown={handleDividerMouseDown}
        />
      )}
      <div className={styles.container}>
        <Header onTabsChange={setHasOpenTabs} />
        {hasOpenTabs ? (
          <SplitView>
            <main className={styles.content}>{children}</main>
          </SplitView>
        ) : (
          <div className={styles.emptyState}>
            <Logo />
            <p>Open a file from the sidebar</p>
          </div>
        )}
      </div>
    </div>
  )
}
