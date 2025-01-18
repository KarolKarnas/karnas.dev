import { ReactNode } from "react"
import styles from "./main-sub-heading.module.scss"

type Props = {
  children: ReactNode
  color: "blue" | "orange" | "purple"
}
const MainSubHeading = ({ color, children }: Props) => {
  return (
    <h2
      className={`${styles.heading} ${color === "orange" && styles.orange} ${
        color === "blue" && styles.blue
      } ${color === "purple" && styles.purple} `}
    >
      {children}
    </h2>
  )
}
export default MainSubHeading
