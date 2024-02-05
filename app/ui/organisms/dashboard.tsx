import Button from "../atoms/button"
import { signOut } from "@/auth"
import styles from "./dashboard.module.scss"

type Props = {}
const Dashboard = (props: Props) => {
  return (
    <div className={styles.dashboard}>
      {" "}
      <div className={styles.PostButtons}>
        <Button
          text={"Edit Posts"}
          color="blue"
          path="/dashboard/posts"
        ></Button>
        <Button
          text={"Post Create"}
          color="blue"
          path="/dashboard/posts/create"
        ></Button>
      </div>
      <div className={styles.ProjectButtons}>
        <Button
          text={"Edit Projects"}
          color="orange"
          path="/dashboard/projects"
        ></Button>
        <Button
          text={"Project Create"}
          color="orange"
          path="/dashboard/projects/create"
        ></Button>
      </div>
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <Button
          text={"Sign Out"}
          color="pink"
          // path="/"
        ></Button>
      </form>
    </div>
  )
}
export default Dashboard
