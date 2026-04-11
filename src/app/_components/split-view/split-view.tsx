"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./split-view.module.scss"
import { useSplitView } from "./split-view-context"
import Divider from "./divider/divider"
import { xMark } from "@/icons"

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
  } = useSplitView()

  const containerRef = useRef<HTMLDivElement>(null)
  const rightPaneRef = useRef<HTMLDivElement>(null)
  const [isLeftOver, setIsLeftOver] = useState(false)
  const [isRightOver, setIsRightOver] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [isDividerDragging, setIsDividerDragging] = useState(false)
  const [paneHeaderStyle, setPaneHeaderStyle] = useState<React.CSSProperties>(
    {},
  )

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

  // Global drag detection — any drag with our custom type shows drop zones
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

  // Drop on LEFT pane — navigate main view to this page
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
    [router, closePaneTab],
  )

  // Drop on RIGHT pane — open/add tab in split pane
  const handleRightDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      const url = e.dataTransfer.getData("text/x-split-view-url")
      const title = e.dataTransfer.getData("text/x-split-view-title")
      const fromHeader = e.dataTransfer.getData("text/x-from-header")

      if (url && title) {
        openSplitPane(url, title)
        // If dragged from header, move it — navigate main view to home
        if (fromHeader) {
          router.push("/")
        }
      }
    },
    [openSplitPane, router],
  )

  // Pane tab drag start
  const handlePaneTabDragStart = useCallback(
    (e: React.DragEvent, index: number) => {
      const tab = paneTabs[index]
      e.dataTransfer.setData("text/x-split-view", "true")
      e.dataTransfer.setData("text/x-split-view-url", tab.url)
      e.dataTransfer.setData("text/x-split-view-title", tab.title)
      e.dataTransfer.setData("text/x-pane-tab-index", String(index))
      e.dataTransfer.effectAllowed = "move"
    },
    [paneTabs],
  )

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
        {children}

        {/* Left drop zone — only when split is active */}
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
                  className={`${styles.paneTab} ${index === activeTabIndex ? styles.paneTabActive : ""}`}
                  onClick={() => setActivePaneTab(index)}
                  draggable
                  onDragStart={(e) => handlePaneTabDragStart(e, index)}
                >
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
