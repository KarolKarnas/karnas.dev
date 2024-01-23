'use client'

import styles from "./contactCard.module.scss"
import { ReactNode, MouseEvent } from "react"

type Props = {
  children: ReactNode
  href: string
icon?: JSX.Element
  color?: "light"
}
const ContactCard = ({ icon, color, children, href }: Props) => {


  const handleClick = (e: React.SyntheticEvent) => {
      e.preventDefault();

    window.open(href, "_blank");
  };
  return (
    <li className={`${styles.listItem}`}>
      <a
        className={`${color === "light" ? styles.light : ""}`}
        href={href}
        onClick={handleClick}
        rel="noopener noreferrer"
      >
        {icon ? icon : null}
        <span>{children}</span>
      </a>
    </li>
  )
}
export default ContactCard
