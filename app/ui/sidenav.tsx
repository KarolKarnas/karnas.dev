"use client"
import Image from "next/image"
import styles from "./sidenav.module.scss"
import Logo from "./logo"
import Hamburger from "./hamburger"
import { menuStore } from "../store/menu"
import { navStore } from "../store/nav"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Post, SideNavItem } from "../utils/types"
import { useEffect, useState } from "react"
import { chevronDown } from "../utils/icons"

type Props = {
  blogLinks: SideNavItem[]
}
const SideNav = ({ blogLinks }: Props) => {
  const isOpen = menuStore((state) => state.menu.isOpen)
  const navLinks = navStore((state) => state.menu.navLinks)
  const updateNavLinks = navStore((state) => state.updateNavLinks)
  // const updateOpenTabs = navStore((state) => state.updateOpenTabs)
  // const activeTab = navStore((state) => state.menu.activeTab)

  useEffect(() => {
    updateNavLinks(blogLinks)
  }, [blogLinks, updateNavLinks])



  return (
    <div className={`${styles.sidenav} ${isOpen ? styles.open : styles.close}`}>
      <Hamburger />

      <div className={`${isOpen ? styles.show : styles.hide}`}>
        <Logo />

        {/* <h2 className={styles.title}>SideNav</h2> */}
        <nav>
          <ul>
            {navLinks.map((item, index) => (
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
  const updateOpenTabs = navStore((state) => state.updateOpenTabs)

  return (
    <li className="">
      {item.submenu ? (
        <>
          <Link
            className={styles.subMenuLink}
            onClick={() => updateOpenTabs(item)}
            href={item.path}
          >
            <div
              onClick={toggleSubMenu}
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
                  <div className={styles.chevron}>{chevronDown}</div>
                </div>
                {item.icon}
                <span className="">{item.title}</span>
              </div>
            </div>
          </Link>
          {subMenuOpen && (
            <div className={styles.subMenu}>
              {/* 
              {item.title === 'blog' ? posts.map()}
               */}
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    onClick={() => updateOpenTabs(subItem)}
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
          onClick={() => updateOpenTabs(item)}
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
