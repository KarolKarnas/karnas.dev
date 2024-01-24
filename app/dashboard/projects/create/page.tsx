import MainHeading from "@/app/ui/atoms/mainHeading"
import styles from "./page.module.scss"
// import FormPost from "@/app/ui/organisms/form/formPost"
import FormProject from "@/app/ui/organisms/form/formProject"
export default function About() {
  return (
    <div className={styles.container}>
    <MainHeading color="orange">Create a new Project Sir!</MainHeading>
    <FormProject />
  </div>
  )
}
