import styles from "./logo.module.scss"
import Link from "next/link"
// import { karnas } from "@/app/utils/icons"

type Props = { padding?: boolean; flex?: boolean }
const Logo = ({ padding, flex }: Props) => {
  return (
    <Link
      href={"/"}
      className={`${styles.logo} ${padding ? styles.logoPadding : ''} ${
        flex ? styles.logoFlex : ''
      }`}
    >
      karnas.dev
    </Link>
  )
}
export default Logo
