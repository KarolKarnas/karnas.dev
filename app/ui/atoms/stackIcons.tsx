import styles from "./stackIcons.module.scss"
import { IconText } from "@/app/utils/types"

type Props = { icons: IconText[]; size?: "large"; texts?: boolean }
const StackIcons = ({ icons, size, texts = false }: Props) => {
  return (
    <ul
      className={`${styles.container} ${
        size === "large" ? styles.large : null
      }`}
    >
      {icons.map((item, index) => (
        <li key={index} className={`${texts ? styles.liContainer : null}`}>
          {item.icon}
          {texts ? <span>{item.text}</span> : null}
        </li>
      ))}
    </ul>
  )
}
export default StackIcons
