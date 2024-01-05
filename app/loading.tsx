import styles from "./loading.module.scss"
import Spinner from "./ui/spinner"

type Props = {}
const Loading = (props: Props) => {
  return (
    <div className={styles.loading}>
      <Spinner />
    </div>
  )
}
export default Loading
