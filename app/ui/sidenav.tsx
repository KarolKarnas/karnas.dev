"use client"

import styles from "./sidenav.module.scss"
import Logo from "./logo"
import Hamburger from "./hamburger"
import { menuStore } from "../store/menu"

type Props = {}
const SideNav = (props: Props) => {
  const isOpen = menuStore((state) => state.menu.isOpen)

  return (
    <div className={styles.sidenav}>
      <Hamburger/>
      <Logo />
      <h2>SideNav</h2>
      <h2>{isOpen.toString()}</h2>
      <ul>
        <li>link1</li>
        <li>link2</li>
        <li>link3</li>
      </ul>
    </div>
  )
}
export default SideNav
