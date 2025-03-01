import { IconText } from "@/utils/types"
import styles from "./stack-icons.module.scss"

type Props = { icons: IconText[]; size?: "large"; texts?: boolean }
const StackIcons = ({ icons, size, texts = false }: Props) => {
  return (
    <ul
      className={`${styles.container} ${
        size === "large" ? styles.large : null
      }`}
    >
      {icons.map((item, index) => (
        <li key={index} className={`${texts ? styles["li-container"] : null}`}>
          {item.icon}
          {texts ? <span>{item.text}</span> : null}
        </li>
      ))}
    </ul>
  )
}
export default StackIcons
