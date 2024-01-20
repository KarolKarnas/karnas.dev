import styles from "./logo.module.scss"
import Link from "next/link"

type Props = {}
const Logo = (props: Props) => {
  return <Link href={'/'} className={styles.logo}>karnas.dev</Link>
}
export default Logo
