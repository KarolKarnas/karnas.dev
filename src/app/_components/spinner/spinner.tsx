import styles from "./spinner.module.scss"
import Image from "next/image"

const Spinner = () => {
  return (
      <Image className={styles.spinner} src="/spinner.png" alt="spinner" width={100} height={100}></Image>
  )
}
export default Spinner
