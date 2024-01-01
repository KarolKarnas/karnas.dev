import styles from "./page.module.scss"
import Json from "../ui/json"
import { ABOUT } from "../utils/info"

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1>
        <span># </span>Hi! I&#39;am <span>Karol</span>!
      </h1>
      <h3>
        <span>### </span>Full Stack <span>Developer</span> from Poland
      </h3>
      <hr />
<Json code={ABOUT}></Json>
    </div>
  )
}
