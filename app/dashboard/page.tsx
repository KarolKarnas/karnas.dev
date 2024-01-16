import styles from "./page.module.scss"
import Button from "../ui/button"

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <Button text={"Posts"} color="blue" path="/dashboard/posts"></Button>
        <Button
          text={"Post Create"}
          color="blue"
          path="/dashboard/posts/create"
        ></Button>
      </div>
      <div className={styles.col2}>
        <Button
          text={"Projects"}
          color="orange"
          path="/dashboard/projects"
        ></Button>
        <Button
          text={"Project Create"}
          color="orange"
          path="/dashboard/projects/create"
        ></Button>
      </div>
    </div>
  )
}
