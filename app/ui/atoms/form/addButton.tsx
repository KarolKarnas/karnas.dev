import styles from "./addButton.module.scss"
import { plus } from "@/app/utils/icons"

type Props = {
  color: "blue" | "orange"
}
const AddButton = ({ color }: Props) => {
  return (
    <button
      className={`${styles.button} ${color === "orange" && styles.orange} ${
        color === "blue" && styles.blue
      } `}
    >
{plus.icon}
    </button>
  )
}
export default AddButton
