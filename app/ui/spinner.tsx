import styles from "./spinner.module.scss"
import Image from "next/image"

type Props = {}
const Spinner = (props: Props) => {
  return (
      <Image className={styles.spinner} src="/spinner.png" alt="spinner" width={400} height={400}></Image>
  )
}
export default Spinner
