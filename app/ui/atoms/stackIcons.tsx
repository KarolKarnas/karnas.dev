import styles from "./stackIcons.module.scss"
import { IconText } from "@/app/utils/types"

type Props = { icons: IconText[]; size?: "large" }
const StackIcons = ({ icons, size }: Props) => {
  return (
    <ul
      className={`${styles.container} ${
        size === "large" ? styles.large : null
      }`}
    >
      {icons.map((item, index) => (
        <li key={index}>{item.icon}</li>
      ))}
    </ul>
  )
}
export default StackIcons
