import styles from "./page.module.scss"
import Button from "../ui/button"
import { signOut } from "@/auth";

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
      <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
    
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
    </div>
  )
}
