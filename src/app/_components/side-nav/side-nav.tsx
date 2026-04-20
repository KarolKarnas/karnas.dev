"use client"

import styles from "./side-nav.module.scss"
import Hamburger from "../hamburger/hamburger"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SideNavItem } from "../../../utils/types"
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react"
import { chevronDown, terminal } from "@/icons"
import Logo from "../logo/logo"
import TerminalTrigger from "../terminal/terminal-trigger"
import { SIDENAV_ITEMS } from "@/utils/constants"
import { LG_BREAKPOINT } from "@/utils/breakpoints"

type SideNavProps = {
  width?: number
}

const SideNav = ({ width }: SideNavProps) => {
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

  const showStyle =
    !mobile && width ? { width: `${width}px` } : undefined

  return (
    <div
      className={`${styles.sidenav}
     `}
    >
      <Hamburger showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
      <div
        className={showSideNav ? styles.show : styles.hide}
        style={showStyle}
      >
        <Logo padding flex />
        <nav>
          <ul>
            {SIDENAV_ITEMS.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                mobile={mobile}
                setShowSideNav={setShowSideNav}
              />
            ))}
          </ul>
        </nav>
        <TerminalTrigger className={styles.terminalBtn}>
          {terminal.icon}
          <span>terminal</span>
        </TerminalTrigger>
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
  const [subMenuOpen, setSubMenuOpen] = useState(true)
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen)
  }

  const handleDragStart = useCallback(
    (e: React.DragEvent, navItem: SideNavItem) => {
      e.dataTransfer.setData("text/x-split-view", "true")
      e.dataTransfer.setData("text/x-split-view-url", navItem.path)
      e.dataTransfer.setData("text/x-split-view-title", navItem.title)
      e.dataTransfer.effectAllowed = "copyMove"
    },
    [],
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
              aria-label={subMenuOpen ? "Collapse" : "Expand"}
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
              onClick={() => {
                if (mobile) {
                  setShowSideNav(false)
                }
              }}
              href={item.path}
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
                      onClick={() => {
                        if (mobile) {
                          setShowSideNav(false)
                        }
                      }}
                      href={subItem.path}
                      draggable={false}
                      className={`${styles["sub-menu-item"]} ${
                        subItem.path === pathname
                          ? styles["path-sub-menu"]
                          : ""
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
