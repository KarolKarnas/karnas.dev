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
  const subMenuPortfolio = menuStore((state) => state.menu.subMenuPortfolio)

  return (
    <div className={`${styles.sidenav} ${isOpen ? styles.open : styles.close}`}>
      <Hamburger />

      <div className={`${isOpen ? styles.show : styles.hide}`}>
        <Logo />
        <h2>SideNav</h2>
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
              <li key={index}>
                <Link onClick={() => updateOpenTabs(link)} href={`/${link}`}>
                  {link}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}
export default SideNav
