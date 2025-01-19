import Spinner from "../_components/spinner/spinner"
import styles from "./loading.module.scss"

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Spinner />
    </div>
  )
}
export default Loading
