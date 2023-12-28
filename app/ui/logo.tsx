import styles from "./logo.module.scss"
import { chevronDown } from "../utils/icons"

type Props = {}
const Logo = (props: Props) => {
  return <div className={styles.logo}>karnas.dev</div>
}
export default Logo
