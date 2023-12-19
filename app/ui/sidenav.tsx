import styles from './sidenav.module.scss'

type Props = {}
const SideNav = (props: Props) => {
  return (
    <div className={styles.sidenav}>
      <h2>SideNav</h2>
      <ul>
        <li>link1</li>
        <li>link2</li>
        <li>link3</li>
      </ul>
    </div>
  )
}
export default SideNav
