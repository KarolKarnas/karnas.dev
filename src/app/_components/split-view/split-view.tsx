"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./split-view.module.scss"
import { useSplitView } from "./split-view-context"
import Divider from "./divider/divider"
import { xMark } from "@/icons"
import BreadcrumbBar from "../breadcrumb-bar/breadcrumb-bar"
import { SIDENAV_ITEMS } from "@/utils/constants"
import { SideNavItem } from "@/utils/types"

function buildIconMap(items: SideNavItem[]): Map<string, React.ReactNode> {
  const map = new Map<string, React.ReactNode>()
  for (const item of items) {
    if (item.icon) map.set(item.path, item.icon)
    if (item.subMenuItems) {
      for (const sub of item.subMenuItems) {
        if (sub.icon) map.set(sub.path, sub.icon)
      }
    }
  }
  return map
}

type SplitViewProps = {
  children: React.ReactNode
}

export default function SplitView({ children }: SplitViewProps) {
  const router = useRouter()
  const {
    isActive,
    splitRatio,
    paneTabs,
    activeTabIndex,
    openSplitPane,
    closePaneTab,
    setActivePaneTab,
    setSplitRatio,
    toggleSplitView,
    reorderPaneTabs,
  } = useSplitView()

  const containerRef = useRef<HTMLDivElement>(null)
  const rightPaneRef = useRef<HTMLDivElement>(null)
  const [isLeftOver, setIsLeftOver] = useState(false)
  const [isRightOver, setIsRightOver] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [isDividerDragging, setIsDividerDragging] = useState(false)
  const [paneDropIndex, setPaneDropIndex] = useState<number | null>(null)
  const [paneHeaderStyle, setPaneHeaderStyle] = useState<React.CSSProperties>(
    {}
  )

  const iconMap = useMemo(() => buildIconMap(SIDENAV_ITEMS), [])
  const activeTab = paneTabs[activeTabIndex] ?? null
  const embeddedUrl = activeTab ? `/embedded${activeTab.url}` : null

  // Measure right pane position for fixed pane header alignment
  useEffect(() => {
    const rightPane = rightPaneRef.current
    if (!isActive || !rightPane) {
      setPaneHeaderStyle({})
      return
    }

    const updatePosition = () => {
      const rect = rightPane.getBoundingClientRect()
      setPaneHeaderStyle({
        left: `${rect.left}px`,
        width: `${rect.width}px`,
      })
    }

    updatePosition()

    const observer = new ResizeObserver(updatePosition)
    observer.observe(rightPane)

    window.addEventListener("resize", updatePosition)
    return () => {
      observer.disconnect()
      window.removeEventListener("resize", updatePosition)
    }
  }, [isActive, splitRatio])

  // Global drag detection - any drag with our custom type shows drop zones
  useEffect(() => {
    const handleDragOver = (e: DragEvent) => {
      if (e.dataTransfer?.types.includes("text/x-split-view")) {
        setIsDragging(true)
      }
    }

    const resetAll = () => {
      setIsDragging(false)
      setIsLeftOver(false)
      setIsRightOver(false)
    }

    document.addEventListener("dragover", handleDragOver)
    document.addEventListener("dragend", resetAll)
    document.addEventListener("drop", resetAll)

    return () => {
      document.removeEventListener("dragover", handleDragOver)
      document.removeEventListener("dragend", resetAll)
      document.removeEventListener("drop", resetAll)
    }
  }, [])

  // Listen for navigation messages from embedded iframes
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return
      if (e.data?.type !== "split-view-navigate") return
      const url = e.data.url as string
      // Look up title from nav items
      let title = url
      for (const item of SIDENAV_ITEMS) {
        if (item.path === url) {
          title = item.title
          break
        }
        if (item.subMenuItems) {
          const sub = item.subMenuItems.find((s) => s.path === url)
          if (sub) {
            title = sub.title
            break
          }
        }
      }
      openSplitPane(url, title)
    }
    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [openSplitPane])

  // Keyboard shortcut: Ctrl+\
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "\\") {
        e.preventDefault()
        toggleSplitView()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [toggleSplitView])

  // Drop on LEFT pane - navigate main view to this page
  const handleLeftDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      const url = e.dataTransfer.getData("text/x-split-view-url")
      const paneIndex = e.dataTransfer.getData("text/x-pane-tab-index")

      if (url) {
        router.push(url)
        // If it came from a pane tab, close that tab
        if (paneIndex !== "") {
          closePaneTab(parseInt(paneIndex, 10))
        }
      }
    },
    [router, closePaneTab]
  )

  // Drop on RIGHT pane - open/add tab in split pane
  const handleRightDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      const url = e.dataTransfer.getData("text/x-split-view-url")
      const title = e.dataTransfer.getData("text/x-split-view-title")
      const fromHeader = e.dataTransfer.getData("text/x-from-header")

      if (url && title) {
        openSplitPane(url, title)
        // If dragged from header, close that header tab
        if (fromHeader) {
          document.dispatchEvent(
            new CustomEvent("close-header-tab", { detail: { path: url } })
          )
        }
      }
    },
    [openSplitPane]
  )

  // Pane tab drag start
  const handlePaneTabDragStart = useCallback(
    (e: React.DragEvent, index: number) => {
      const tab = paneTabs[index]
      e.dataTransfer.setData("text/x-split-view", "true")
      e.dataTransfer.setData("text/x-split-view-url", tab.url)
      e.dataTransfer.setData("text/x-split-view-title", tab.title)
      e.dataTransfer.setData("text/x-pane-tab-index", String(index))
      e.dataTransfer.setData("text/x-pane-reorder", String(index))
      e.dataTransfer.effectAllowed = "copyMove"
    },
    [paneTabs]
  )

  const handlePaneTabDragOver = useCallback(
    (e: React.DragEvent, index: number) => {
      if (!e.dataTransfer.types.includes("text/x-pane-reorder")) return
      e.preventDefault()
      setPaneDropIndex(index)
    },
    []
  )

  const handlePaneTabDrop = useCallback(
    (e: React.DragEvent, targetIndex: number) => {
      const sourceStr = e.dataTransfer.getData("text/x-pane-reorder")
      if (sourceStr === "") return
      e.preventDefault()
      e.stopPropagation()
      const sourceIndex = parseInt(sourceStr, 10)
      if (sourceIndex !== targetIndex) {
        reorderPaneTabs(sourceIndex, targetIndex)
      }
      setPaneDropIndex(null)
    },
    [reorderPaneTabs]
  )

  const handlePaneTabDragEnd = useCallback(() => {
    setPaneDropIndex(null)
  }, [])

  // When split is NOT active: show only right drop zone (to create split)
  // When split IS active: show both left and right drop zones
  const showDropZones = isDragging

  return (
    <div
      className={`${styles.wrapper} ${isActive ? styles.wrapperSplit : ""}`}
      ref={containerRef}
    >
      {/* Left pane */}
      <div
        className={styles.leftPane}
        style={isActive ? { width: `${splitRatio * 100}%` } : undefined}
      >
        <BreadcrumbBar />
        {children}

        {/* Left drop zone - only when split is active */}
        {showDropZones && isActive && (
          <div
            className={`${styles.leftDropZone} ${isLeftOver ? styles.leftDropZoneActive : ""}`}
            onDragOver={(e) => {
              e.preventDefault()
              e.dataTransfer.dropEffect = "move"
              setIsLeftOver(true)
            }}
            onDragLeave={() => setIsLeftOver(false)}
            onDrop={handleLeftDrop}
          >
            <div className={styles.dropZoneLabel}>Open here</div>
          </div>
        )}
      </div>

      {/* Right drop zone */}
      {showDropZones && (
        <div
          className={`${styles.dropZone} ${isRightOver ? styles.dropZoneActive : ""}`}
          style={
            isActive
              ? { width: `${(1 - splitRatio) * 100}%` }
              : { width: "50%" }
          }
          onDragOver={(e) => {
            e.preventDefault()
            e.dataTransfer.dropEffect = "copy"
            setIsRightOver(true)
          }}
          onDragLeave={() => setIsRightOver(false)}
          onDrop={handleRightDrop}
        >
          <div className={styles.dropZoneLabel}>
            {isActive ? "Open in split" : "Split view"}
          </div>
        </div>
      )}

      {/* Split pane: divider + right pane with tabs and iframe */}
      {isActive && embeddedUrl && (
        <>
          <Divider
            onResize={setSplitRatio}
            onDragStateChange={setIsDividerDragging}
            containerRef={containerRef}
          />
          <div
            className={styles.rightPane}
            style={{ width: `${(1 - splitRatio) * 100}%` }}
            ref={rightPaneRef}
          >
            <div className={styles.paneHeader} style={paneHeaderStyle}>
              {paneTabs.map((tab, index) => (
                <div
                  key={tab.url}
                  className={`${styles.paneTab} ${index === activeTabIndex ? styles.paneTabActive : ""} ${paneDropIndex === index ? styles.paneTabDropIndicator : ""}`}
                  onClick={() => setActivePaneTab(index)}
                  draggable
                  onDragStart={(e) => handlePaneTabDragStart(e, index)}
                  onDragOver={(e) => handlePaneTabDragOver(e, index)}
                  onDrop={(e) => handlePaneTabDrop(e, index)}
                  onDragEnd={handlePaneTabDragEnd}
                >
                  {iconMap.get(tab.url)}
                  <span className={styles.paneTabTitle}>{tab.title}</span>
                  <button
                    className={styles.paneTabClose}
                    onClick={(e) => {
                      e.stopPropagation()
                      closePaneTab(index)
                    }}
                    aria-label={`Close ${tab.title}`}
                  >
                    {xMark.icon}
                  </button>
                </div>
              ))}
            </div>
            <div className={styles.iframeContainer}>
              <BreadcrumbBar path={activeTab.url} />
              <iframe
                className={styles.iframe}
                src={embeddedUrl}
                title={activeTab.title}
              />
              {isDividerDragging && <div className={styles.iframeOverlay} />}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
