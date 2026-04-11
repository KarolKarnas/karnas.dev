"use client"

import { useEffect } from "react"
import styles from "./layout.module.scss"

export default function EmbeddedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Capture phase to intercept before Next.js Link handler
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a")
      if (!anchor) return
      const href = anchor.getAttribute("href")
      if (!href || href.startsWith("http") || href.startsWith("#")) return

      e.preventDefault()
      e.stopPropagation()
      e.stopImmediatePropagation()
      window.parent.postMessage(
        { type: "split-view-navigate", url: href },
        window.location.origin,
      )
    }
    document.addEventListener("click", handleClick, true)
    return () => document.removeEventListener("click", handleClick, true)
  }, [])

  return <main className={styles.content}>{children}</main>
}
