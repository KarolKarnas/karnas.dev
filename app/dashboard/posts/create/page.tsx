import styles from "./page.module.scss"
import BasicForm from "@/app/ui/basicForm"
import FormPost from "@/app/ui/formPost"
export default function About() {
  return (
    <div className={styles.container}>
{/* <FormPost /> */}
      <BasicForm />
    </div>
  )
}
