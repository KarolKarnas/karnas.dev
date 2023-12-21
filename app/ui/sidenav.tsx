"use client"
import Image from "next/image"
import styles from "./sidenav.module.scss"
import Logo from "./logo"
import Hamburger from "./hamburger"
import { menuStore } from "../store/menu"
import { navStore } from "../store/nav"
import Link from "next/link"

type Props = {}
const SideNav = (props: Props) => {
  const isOpen = menuStore((state) => state.menu.isOpen)
  // const links = menuStore((state) => state.menu.links)
  const navLinks = navStore((state) => state.menu.navLinks)
  const updateOpenTabs = navStore((state) => state.updateOpenTabs)
  // const subMenuPortfolio = menuStore((state) => state.menu.subMenuPortfolio)

  return (
    <div className={`${styles.sidenav} ${isOpen ? styles.open : styles.close}`}>
      <Hamburger />

      <div className={`${isOpen ? styles.show : styles.hide}`}>
        <Logo />

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
                    <li key={index} >
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
        {/* <h2>SideNav</h2>
        <ul>
          {links.map((link, index) =>
            link === "portfolio" ? (
              <div key={index}>
                <li>
                  <Link onClick={() => updateOpenTabs(link)} href={`/${link}`}>
                    {link}
                  </Link>
                </li>
                <ul>
                  {subMenuPortfolio.map((subLink, subIndex) => (
                    <li key={subLink}>
                      <Link
                        onClick={() => updateOpenTabs(`portfolio/${subLink}`)}
                        href={`/portfolio/${subLink}`}
                      >
                        {subLink}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <li className={styles.liIcon} key={index}>
                <Image
                  src="/react.svg"
                  alt="JS logo"
                  // className={styles.vercelLogo}
                  width={24}
                  height={24}
                  priority
                />
                <Link onClick={() => updateOpenTabs(link)} href={`/${link}`}>
                  {link}
                </Link>
              </li>
            )
          )}
        </ul> */}
      </div>
    </div>
  )
}
export default SideNav
