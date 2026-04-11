"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { LG_BREAKPOINT } from "@/utils/breakpoints"
import styles from "../layout.module.scss"
import SideNav from "../_components/side-nav/side-nav"
import Header from "../_components/header/header"
import SplitView from "../_components/split-view/split-view"
import StatusBar from "../_components/status-bar/status-bar"
import Terminal from "../_components/terminal/terminal"
import TerminalTrigger from "../_components/terminal/terminal-trigger"
import { TerminalProvider } from "../_components/terminal/terminal-context"
import { terminal } from "@/icons"
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
    const check = () => setIsMobile(window.innerWidth < LG_BREAKPOINT)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

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
        // Save to localStorage only on drag end
        localStorage.setItem(SIDEBAR_WIDTH_KEY, String(sidebarWidth))
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [sidebarWidth])

  const [hasOpenTabs, setHasOpenTabs] = useState(true)

  return (
    <TerminalProvider>
      <div className={styles.layoutWrapper}>
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
                <TerminalTrigger className={styles.terminalLaunch}>
                  <span className={styles.terminalIcon}>{terminal.icon}</span>
                  <span>Open Terminal</span>
                  <kbd>Ctrl+`</kbd>
                </TerminalTrigger>
              </div>
            )}
            <Terminal />
          </div>
        </div>
        <StatusBar />
      </div>
    </TerminalProvider>
  )
}
