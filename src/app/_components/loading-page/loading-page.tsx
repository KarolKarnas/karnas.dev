import Spinner from "@/app/_components/spinner/spinner"
import styles from "./loading-page.module.scss"

const LoadingPage = () => {
  return (
    <div className={styles.loading}>
      <Spinner />
    </div>
  )
}
export default LoadingPage
