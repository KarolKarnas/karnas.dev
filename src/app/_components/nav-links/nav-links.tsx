import Link from "next/link"
import styles from "./nav-links.module.scss"
import { SideNavItem } from "@/utils/types"

type NavLinksProps = {
  items: SideNavItem[]
}

const NavLinks = ({ items }: NavLinksProps) => {
  return (
    <ul className={styles.container}>
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.path}>
            {item.icon}
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
