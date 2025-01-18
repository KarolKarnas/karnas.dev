"use client"

import styles from "./side-nav.module.scss"
import Hamburger from "../atoms/hamburger"
import { menuStore } from "../../store/menu"
import { navStore } from "../../store/nav"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SideNavItem } from "../../utils/types"
import { useEffect, useState } from "react"
import { chevronDown } from "../../utils/icons"
import Logo from "../logo/logo"

type Props = {
  blogLinks: SideNavItem[]
  projectLinks: SideNavItem[]
}

const navLinks = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "skills.svg",
    path: "/skills",
  },
  {
    title: "about.json",
    path: "/about",
  },
  {
    title: "projects",
    path: "/projects",
    submenu: true,
    subMenuItems: [],
  },
  {
    title: "blog",
    path: "/blog",
    submenu: true,
    subMenuItems: [],
  },
  {
    title: "contact.sass",
    path: "/contact",
  },
  {
    title: "dashboard",
    path: "/dashboard",
  },
]
const SideNav = ({ blogLinks, projectLinks }: Props) => {
  // const isOpen = menuStore((state) => state.menu.isOpen)
  // const width = menuStore((state) => state.menu.width)
  // const setWidth = menuStore((state) => state.setWidth)
  // const openMenu = menuStore((state) => state.openMenu)
  // const closeMenu = menuStore((state) => state.closeMenu)

  // const navLinks = navStore((state) => state.menu.navLinks)
  // const updateNavLinks = navStore((state) => state.updateNavLinks)

  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth)
  //   handleResize()
  //   // window.addEventListener("resize", handleResize)
  //   if (width > 640) {
  //     openMenu()
  //   } else {
  //     closeMenu()
  //   }
  //   // return () => window.removeEventListener("resize", handleResize)
  // }, [closeMenu, openMenu, setWidth, width])
  return (
    // ${isOpen ? styles.open : styles.close}
    <div
      className={`${styles.sidenav}
     `}
    >
      <Hamburger />

      {/* <div className={`${isOpen ? styles.show : styles.hide}`}> */}
      <div className={styles.show}>
        <Logo padding flex />
        <nav>
          <ul>
            {navLinks.map((item, index) => (
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
              updateOpenTabs(item)
              if (width < 640) {
                closeMenu()
              }
              return
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
                      updateOpenTabs(subItem)
                      if (width < 640) {
                        closeMenu()
                      }
                      return
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
            updateOpenTabs(item)
            if (width < 640) {
              closeMenu()
            }
            return
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
