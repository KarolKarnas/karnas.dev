import { ReactNode } from "react"
import styles from "./main-heading.module.scss"

type Props = {
  children: ReactNode
  color: "blue" | "orange"
}
const MainHeading = ({ color, children }: Props) => {
  return (
    <h1
      className={`${styles.heading} ${color === "orange" && styles.orange} ${
        color === "blue" && styles.blue
      } `}
    >
      {children}
    </h1>
  )
}
export default MainHeading
