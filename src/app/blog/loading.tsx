import Spinner from "../_components/spinner/spinner"
import styles from "./loading.module.scss"


type Props = {}
const Loading = (props: Props) => {
  return (
    <div className={styles.loading}>
      <Spinner />
    </div>
  )
}
export default Loading
