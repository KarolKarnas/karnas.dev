import styles from "./stackIcons.module.scss"
import Image from "next/image"

type Props = { icons: JSX.Element[] }
const StackIcons = ({ icons }: Props) => {
  return (
    <ul className={styles.container}>
      {icons.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
export default StackIcons