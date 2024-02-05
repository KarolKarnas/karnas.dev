import FormLogin from "../ui/organisms/form/formLogin"
import { auth } from "@/auth"
import styles from "./page.module.scss"
import MainHeading from "../ui/atoms/mainHeading"
import Dashboard from "../ui/organisms/dashboard"

export default async function LoginPage() {
  const session = await auth()
  return (
    <div className={styles.container}>
      {session?.user ? (
        <MainHeading color="blue">Hello {session.user.name}</MainHeading>
      ) : (
        <MainHeading color="orange">Log in</MainHeading>
      )}
      {!session?.user ? <FormLogin /> : null}
      {session?.user ? (<Dashboard />) : null}
    </div>
  )
}
