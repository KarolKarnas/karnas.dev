"use client"

import styles from "./side-nav.module.scss"
import Hamburger from "../hamburger/hamburger"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SideNavItem } from "../../../utils/types"
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react"
import { chevronDown, terminal } from "@/icons"
import Logo from "../logo/logo"
import AppearanceSettings from "../appearance/appearance-settings"
import TerminalTrigger from "../terminal/terminal-trigger"
import { SIDENAV_ITEMS } from "@/utils/constants"
import { LG_BREAKPOINT } from "@/utils/breakpoints"
import {
  revealFolderForPathname,
  setFolderExpanded,
  useFolderExpanded,
  useRevealFolderOnNavigation,
} from "./folder-state"
import { PROFILE } from "@/utils/profile"

type SideNavProps = {
  width?: number
}

const SideNav = ({ width }: SideNavProps) => {
  useRevealFolderOnNavigation(usePathname())
  const [showSideNav, setShowSideNav] = useState(true)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const checkWindowWidth = () => {
      if (window.innerWidth < LG_BREAKPOINT) {
        setShowSideNav(false)
        setMobile(true)
      } else {
        setShowSideNav(true)
        setMobile(false)
      }
    }

    checkWindowWidth()

    window.addEventListener("resize", checkWindowWidth)
    return () => {
      window.removeEventListener("resize", checkWindowWidth)
    }
  }, [])

  useEffect(() => {
    if (!mobile || !showSideNav) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowSideNav(false)
    }
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [mobile, showSideNav])

  const showStyle = !mobile && width ? { width: `${width}px` } : undefined

  return (
    <div
      className={`${styles.sidenav}
     `}
    >
      {mobile && showSideNav && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close explorer overlay"
          onClick={() => setShowSideNav(false)}
        />
      )}
      <Hamburger showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
      <div
        id="file-explorer"
        className={showSideNav ? styles.show : styles.hide}
        style={showStyle}
      >
        <Logo padding flex />
        <nav aria-label="File explorer">
          <ul>
            {SIDENAV_ITEMS.map((item) => (
              <MenuItem
                key={item.path}
                item={item}
                mobile={mobile}
                setShowSideNav={setShowSideNav}
              />
            ))}
          </ul>
        </nav>
        <div className={styles.utilities}>
          <TerminalTrigger className={styles.terminalBtn}>
            {terminal.icon}
            <span>Terminal</span>
            <kbd>Ctrl + `</kbd>
          </TerminalTrigger>
          <AppearanceSettings />
          <div className={styles.identity}>
            <span>KK</span>
            <div>
              {PROFILE.name}
              <small>{PROFILE.role}</small>
            </div>
            <i aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default SideNav

type MenuItemProps = {
  item: SideNavItem
  mobile: boolean
  setShowSideNav: Dispatch<SetStateAction<boolean>>
}

export const MenuItem = ({ item, mobile, setShowSideNav }: MenuItemProps) => {
  const pathname = usePathname()
  const subMenuOpen = useFolderExpanded(item.path)
  const toggleSubMenu = () => {
    setFolderExpanded(item.path, !subMenuOpen)
  }

  const handleDragStart = useCallback(
    (e: React.DragEvent, navItem: SideNavItem) => {
      e.dataTransfer.setData("text/x-split-view", "true")
      e.dataTransfer.setData("text/x-split-view-url", navItem.path)
      e.dataTransfer.setData("text/x-split-view-title", navItem.title)
      e.dataTransfer.effectAllowed = "copyMove"
    },
    []
  )

  return (
    <li>
      {item.submenu ? (
        <>
          <div
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            className={`${styles["link-new"]} ${
              item.path === pathname ? styles["path-link"] : ""
            }`}
          >
            <button
              type="button"
              aria-label={`${subMenuOpen ? "Collapse" : "Expand"} ${item.title}`}
              aria-expanded={subMenuOpen}
              onClick={(e) => {
                e.stopPropagation()
                toggleSubMenu()
              }}
              className={styles["chevron-btn"]}
            >
              <div
                className={`${
                  subMenuOpen ? styles.rotate180 : styles.transition
                } ${styles.flex}`}
              >
                <div className={styles.chevron}>{chevronDown.icon}</div>
              </div>
            </button>
            <Link
              className={styles["folder-link"]}
              onNavigate={() => revealFolderForPathname(item.path)}
              onClick={() => {
                if (mobile) {
                  setShowSideNav(false)
                }
              }}
              href={item.path}
              aria-current={item.path === pathname ? "page" : undefined}
              title={item.title}
              draggable={false}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </div>
          {subMenuOpen && (
            <div className={styles["sub-menu"]}>
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <div
                    key={idx}
                    draggable
                    onDragStart={(e) => handleDragStart(e, subItem)}
                  >
                    <Link
                      onNavigate={() => revealFolderForPathname(subItem.path)}
                      onClick={() => {
                        if (mobile) {
                          setShowSideNav(false)
                        }
                      }}
                      href={subItem.path}
                      aria-current={
                        subItem.path === pathname ? "page" : undefined
                      }
                      title={subItem.title}
                      draggable={false}
                      className={`${styles["sub-menu-item"]} ${
                        subItem.path === pathname ? styles["path-sub-menu"] : ""
                      }`}
                    >
                      {subItem.icon}
                      <span>{subItem.title}</span>
                    </Link>
                  </div>
                )
              })}
            </div>
          )}
        </>
      ) : (
        <div draggable onDragStart={(e) => handleDragStart(e, item)}>
          <Link
            href={item.path}
            aria-current={item.path === pathname ? "page" : undefined}
            title={item.title}
            onClick={() => {
              if (mobile) {
                setShowSideNav(false)
              }
            }}
            draggable={false}
            className={`${styles["link-new"]} ${
              item.path === pathname ? styles["path-link"] : ""
            }`}
          >
            {item.icon}
            <span className={styles["span-link"]}>{item.title}</span>
          </Link>
        </div>
      )}
    </li>
  )
}
