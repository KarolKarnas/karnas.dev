"use client"
import Image from "next/image"
import styles from "./sidenav.module.scss"
import Logo from "./logo"
import Hamburger from "./hamburger"
import { menuStore } from "../store/menu"
import { navStore } from "../store/nav"
import Link from "next/link"
import { usePathname, useSelectedLayoutSegment } from "next/navigation"
import { SideNavItem } from "../utils/types"
import { useState } from "react"
import { chevronDown } from "../utils/icons"

type Props = {}
const SideNav = (props: Props) => {
  const isOpen = menuStore((state) => state.menu.isOpen)
  // const links = menuStore((state) => state.menu.links)
  const navLinks = navStore((state) => state.menu.navLinks)
  const updateOpenTabs = navStore((state) => state.updateOpenTabs)
  // const subMenuPortfolio = menuStore((state) => state.menu.subMenuPortfolio)

  // const selectedLayout = useSelectedLayoutSegment()

  return (
    <div className={`${styles.sidenav} ${isOpen ? styles.open : styles.close}`}>
      <Hamburger />

      <div className={`${isOpen ? styles.show : styles.hide}`}>
        <Logo />

        <h2>SideNav2</h2>
        <ul>
          {navLinks.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ul>

        <h2>SideNav</h2>
        <ul>
          {navLinks.map((item, index) => (
            <li key={index}>
              <div className={styles.liIcon}>
                {item.icon}
                <Link onClick={() => updateOpenTabs(item)} href={item.path}>
                  {item.title}
                </Link>
              </div>
              {item.submenu && item.subMenuItems ? (
                <ul className={styles.subMenu}>
                  {item.subMenuItems.map((subItem, index) => (
                    <li
                      key={index}
                      // className={selectedLayout ? styles.selected : ""}
                    >
                      <div className={styles.liIcon}>
                        {subItem.icon}
                        <Link
                          onClick={() => updateOpenTabs(subItem)}
                          href={subItem.path}
                        >
                          {subItem.title}
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default SideNav

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname()
  const [subMenuOpen, setSubMenuOpen] = useState(true)
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen)
  }
  const updateOpenTabs = navStore((state) => state.updateOpenTabs)

  return (
    <div className="">
      {item.submenu ? (
        <>
          <Link onClick={() => updateOpenTabs(item)} href={item.path}>
            <button
              onClick={toggleSubMenu}
              className={`${styles.sideBtn} ${
                pathname.includes(item.path) ? styles.pathBtn : ""
              }`}
            >
              <div className={styles.contentBtn}>
                {item.icon}
                <span className={styles.titleBtn}>{item.title}</span>
              </div>

              <div
                className={`${subMenuOpen ? styles.rotate180 : styles.transition} ${
                  styles.flex
                }`}
              >
                {chevronDown}
                {/* <Icon icon="lucide:chevron-down" width="24" height="24" /> */}
              </div>
            </button>
          </Link>
          {subMenuOpen && (
            <div className={styles.subMenu}>
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    onClick={() => updateOpenTabs(subItem)}
                    key={idx}
                    href={subItem.path}
                    className={`${styles.subMenuItem} ${
                      subItem.path === pathname ? styles.pathSubMenu : ""
                    }`}
                  >  {item.icon}
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
    </div>
  )
}
