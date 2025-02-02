import styles from "./contact-card.module.scss"
import { JSX, ReactNode } from "react"

type Props = {
  children: ReactNode
  href: string
  icon?: JSX.Element
  color?: "light"
}
const ContactCard = ({ icon, color, children, href }: Props) => {
  return (
    <li className={`${styles["list-item"]}`}>
      <a className={`${color === "light" ? styles.light : ""}`} href={href}>
        {icon ? icon : null}
        <span>{children}</span>
      </a>
    </li>
  )
}
export default ContactCard
