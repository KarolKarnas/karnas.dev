"use client"

import styles from "./side-nav.module.scss"
import Hamburger from "../hamburger/hamburger"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SideNavItem } from "../../../utils/types"
import { useEffect, useState } from "react"
import { chevronDown } from "../../../utils/icons"
import Logo from "../logo/logo"
import { SIDENAV_ITEMS } from "@/utils/constants"
import { getAllPosts } from "@/lib/api"

export type SideNavProps = {
  initialNavItems: SideNavItem[]
}

const SideNav = ({ initialNavItems }: SideNavProps) => {
  // const allPosts = getAllPosts()

  return (
    <div
      className={`${styles.sidenav}
     `}
    >
      <Hamburger />

      <div className={styles.show}>
        <Logo padding flex />
        <nav>
          <ul>
            {initialNavItems.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
            {/* <li className={styles.title}>TEST</li> */}
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
  // const width = menuStore((state) => state.menu.width)
  // const updateOpenTabs = navStore((state) => state.updateOpenTabs)
  // const closeMenu = menuStore((state) => state.closeMenu)

  const linkClick = () => {}

  return (
    <li className="">
      {item.submenu ? (
        <>
          <Link
            className={styles.subMenuLink}
            onClick={() => {
              console.log("click")
            }}
            href={item.path}
          >
            <div
              onClick={() => toggleSubMenu()}
              className={`${styles.linkNew} ${
                item.path === pathname ? styles.pathLink : ""
              }`}
            >
              <div className={styles.contentBtn}>
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
            <div className={styles.subMenu}>
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    onClick={() => {
                      // updateOpenTabs(subItem)
                      // if (width < 640) {
                      //   closeMenu()
                      // }
                      // return
                    }}
                    key={idx}
                    href={subItem.path}
                    className={`${styles.subMenuItem} ${
                      subItem.path === pathname ? styles.pathSubMenu : ""
                    }`}
                    // className={`${styles.subMenuItem} ${
                    //   subItem.path === pathname ? styles.pathSubMenu : ""
                    // }`}
                  >
                    {" "}
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
          onClick={() => {
            // updateOpenTabs(item)
            // if (width < 640) {
            //   closeMenu()
            // }
            // return
          }}
          href={item.path}
          className={`${styles.linkNew} ${
            item.path === pathname ? styles.pathLink : ""
          }`}
        >
          {item.icon}
          <span className={styles.spanLink}>{item.title}</span>
        </Link>
      )}
    </li>
  )
}
