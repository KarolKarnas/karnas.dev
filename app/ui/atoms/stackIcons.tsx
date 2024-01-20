import styles from "./stackIcons.module.scss"

type Props = { icons: JSX.Element[]; size?: "large" }
const StackIcons = ({ icons, size }: Props) => {
  return (
    <ul
      className={`${styles.container} ${
        size === "large" ? styles.large : null
      }`}
    >
      {icons.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
export default StackIcons
