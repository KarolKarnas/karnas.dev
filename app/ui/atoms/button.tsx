import Link from "next/link"
import styles from "./button.module.scss"

type Props = {
  text: string
  color: "blue" | "orange" | "pink"
  path: string
}
const Button = ({ text, color, path }: Props) => {
  return (
    <button
      className={`${styles.button} ${color === "orange" && styles.orange} ${
        color === "blue" && styles.blue
      } ${
        color === "pink" && styles.pink
      } `}
    >
      <Link href={path}>{text}</Link>
    </button>
  )
}
export default Button
