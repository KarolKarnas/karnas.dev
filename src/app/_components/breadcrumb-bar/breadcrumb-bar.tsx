"use client"

import styles from "./breadcrumb-bar.module.scss"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SIDENAV_ITEMS } from "@/utils/constants"
import { SideNavItem } from "@/utils/types"

function buildTitleMap(items: SideNavItem[]): Map<string, string> {
  const map = new Map<string, string>()
  for (const item of items) {
    map.set(item.path, item.title)
    if (item.subMenuItems) {
      for (const sub of item.subMenuItems) {
        map.set(sub.path, sub.title)
      }
    }
  }
  return map
}

const titleMap = buildTitleMap(SIDENAV_ITEMS)

type BreadcrumbBarProps = {
  path?: string
}

const BreadcrumbBar = ({ path }: BreadcrumbBarProps) => {
  const currentPathname = usePathname()
  const pathname = path ?? currentPathname

  const segments = pathname === "/" ? [] : pathname.split("/").filter(Boolean)

  return (
    <nav className={styles.breadcrumbBar} aria-label="Breadcrumb">
      <Link href="/" className={styles.segment}>
        karnas.dev
      </Link>
      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/")
        const isLast = index === segments.length - 1
        const label = titleMap.get(href) ?? segment

        return (
          <span key={href} className={styles.crumb}>
            <span className={styles.separator}>{">"}</span>
            {isLast ? (
              <span className={styles.current}>{label}</span>
            ) : (
              <Link href={href} className={styles.segment}>
                {label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export default BreadcrumbBar
