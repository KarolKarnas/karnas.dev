import styles from "./header.module.scss"
import Logo from "./logo"
import Hamburger from "./hamburger"

type Props = {}
const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <Hamburger />
      <Logo />
    </header>
  )
}
export default Header
