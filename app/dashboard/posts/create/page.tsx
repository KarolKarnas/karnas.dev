import MainHeading from "@/app/ui/atoms/mainHeading"
import styles from "./page.module.scss"
import FormPost from "@/app/ui/organisms/form/formPost"
// import { auth } from "@/auth"

export default async function About() {
  // const session = await auth()

  return (
    <div className={styles.container}>
      <MainHeading color="blue">Create a new post Sir!</MainHeading>
      <FormPost />
    </div>
  )
}
