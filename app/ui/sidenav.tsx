"use client"

import styles from "./sidenav.module.scss"
import Logo from "./logo"
import Hamburger from "./hamburger"
import { menuStore } from "../store/menu"
import Link from "next/link"

type Props = {}
const SideNav = (props: Props) => {
  const isOpen = menuStore((state) => state.menu.isOpen)
  const links = menuStore((state) => state.menu.links)
  const updateOpenTabs = menuStore((state) => state.updateOpenTabs)

  return (
    <div className={`${styles.sidenav} ${isOpen ? styles.open : styles.close}`}>
      <Hamburger />

      <div className={`${isOpen ? styles.show : styles.hide}`}>
        <Logo />
        <h2>SideNav</h2>
        <ul>
          {/* <li>
            <Link href={`/`}>Home</Link>
          </li> */}
          {links.map((link, index) => (
            <li key={index}>
              <Link
                onClick={() => updateOpenTabs(link)}
                href={`/${link}`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default SideNav
