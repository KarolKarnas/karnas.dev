import FormLogin from "../ui/organisms/form/formLogin"
import { auth } from "@/auth"
import styles from './page.module.scss'
import MainHeading from "../ui/atoms/mainHeading"

export default async function LoginPage() {
  const session = await auth()
  return (
      <div className={styles.container}>
        {session?.user ? <MainHeading color="blue">Logged in</MainHeading> : <MainHeading color="orange">Log in</MainHeading>}
        <FormLogin />
      </div>
  
  )
}
