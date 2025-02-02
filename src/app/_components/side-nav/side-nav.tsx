"use client"

import styles from "./side-nav.module.scss"
import Hamburger from "../hamburger/hamburger"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SideNavItem } from "../../../utils/types"
import { useState } from "react"
import { chevronDown } from "../../../utils/icons"
import Logo from "../logo/logo"
import { SIDENAV_ITEMS } from "@/utils/constants"

const SideNav = () => {
  const [showSideNav, setShowSideNav] = useState(true)
  return (
    <div
      className={`${styles.sidenav}
     `}
    >
      <Hamburger showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
      <div className={showSideNav ? styles.show : styles.hide}>
        <Logo padding flex />
        <nav>
          <ul>
            {SIDENAV_ITEMS.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default SideNav

export const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname()
  const [subMenuOpen, setSubMenuOpen] = useState(true)
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen)
  }

  return (
    <li>
      {item.submenu ? (
        <>
          <Link
            className={styles["sub-menu-link"]}
            onClick={() => {
              console.log("click")
            }}
            href={item.path}
          >
            <div
              onClick={() => toggleSubMenu()}
              className={`${styles["link-new"]} ${
                item.path === pathname ? styles["path-link"] : ""
              }`}
            >
              <div className={styles["content-btn"]}>
                <div
                  className={`${
                    subMenuOpen ? styles.rotate180 : styles.transition
                  } ${styles.flex}`}
                >
                  <div className={styles.chevron}>{chevronDown.icon}</div>
                </div>
                {item.icon}
                <span className="">{item.title}</span>
              </div>
            </div>
          </Link>
          {subMenuOpen && (
            <div className={styles["sub-menu"]}>
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${styles["sub-menu-item"]} ${
                      subItem.path === pathname ? styles["path-sub-menu"] : ""
                    }`}
                  >
                    {subItem.icon}
                    <span>{subItem.title}</span>
                  </Link>
                )
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`${styles["link-new"]} ${
            item.path === pathname ? styles["path-link"] : ""
          }`}
        >
          {item.icon}
          <span className={styles["span-link"]}>{item.title}</span>
        </Link>
      )}
    </li>
  )
}
