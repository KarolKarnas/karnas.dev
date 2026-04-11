"use client"

import { usePathname } from "next/navigation"
import { terminal, gitBranch } from "@/icons"
import { SIDENAV_ITEMS } from "@/utils/constants"
import { SideNavItem } from "@/utils/types"
import styles from "./status-bar.module.scss"

type PageMeta = {
  languageMode: string
  showWordCount: boolean
}

function buildMetaMap(items: SideNavItem[]): Map<string, PageMeta> {
  const map = new Map<string, PageMeta>()

  const extToLanguage: Record<string, string> = {
    ".ts": "TypeScript",
    ".tsx": "TypeScript",
    ".js": "JavaScript",
    ".json": "JSON",
    ".sass": "SCSS",
    ".scss": "SCSS",
    ".svg": "SVG",
    ".md": "Markdown",
  }

  for (const item of items) {
    const ext = item.title.includes(".")
      ? item.title.slice(item.title.lastIndexOf("."))
      : ""
    const languageMode = extToLanguage[ext] ?? "TypeScript"
    map.set(item.path, { languageMode, showWordCount: false })

    if (item.subMenuItems) {
      for (const sub of item.subMenuItems) {
        const subExt = sub.title.includes(".")
          ? sub.title.slice(sub.title.lastIndexOf("."))
          : ""
        map.set(sub.path, {
          languageMode: extToLanguage[subExt] ?? "Markdown",
          showWordCount: true,
        })
      }
    }
  }

  return map
}

const metaMap = buildMetaMap(SIDENAV_ITEMS)

function getPageMeta(pathname: string): PageMeta {
  const exact = metaMap.get(pathname)
  if (exact) return exact

  const segments = pathname.split("/").filter(Boolean)
  if (segments.length >= 2) {
    const parentPath = "/" + segments[0]
    const parentMeta = metaMap.get(parentPath)
    if (parentMeta?.languageMode) {
      return { languageMode: "Markdown", showWordCount: true }
    }
  }

  return { languageMode: "TypeScript", showWordCount: false }
}

const StatusBar = () => {
  const pathname = usePathname()
  const { languageMode } = getPageMeta(pathname)

  return (
    <div className={styles.statusBar}>
      <div className={styles.left}>
        <button
          className={styles.item}
          type="button"
          aria-label="Toggle Terminal"
          title="Toggle Terminal"
        >
          <span className={styles.icon}>{terminal.icon}</span>
        </button>
        <span className={styles.item}>
          <span className={styles.icon}>{gitBranch.icon}</span>
          <span>main</span>
        </span>
      </div>
      <div className={styles.right}>
        <span className={styles.item}>Ln 1, Col 1</span>
        <span className={styles.item}>UTF-8</span>
        <span className={styles.item}>{languageMode}</span>
      </div>
    </div>
  )
}

export default StatusBar
