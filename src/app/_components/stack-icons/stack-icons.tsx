import { IconText } from "@/utils/types"
import styles from "./stack-icons.module.scss"

type Props = { icons: IconText[]; size?: "large"; texts?: boolean }
export default function StackIcons({ icons, size, texts = false }: Props) {
  return (
    <ul
      className={`${styles.container} ${size === "large" ? styles.large : ""} ${texts ? styles.withText : ""}`}
      aria-label="Technologies"
    >
      {icons.map((item) => (
        <li key={item.text} title={item.text}>
          <span className={styles.icon} aria-hidden="true">
            {item.icon}
          </span>
          <span className={texts ? styles.label : styles.srOnly}>
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  )
}
