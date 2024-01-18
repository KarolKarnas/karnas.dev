import FormLogin from "../ui/formLogin"
import { auth } from "@/auth"

export default async function LoginPage() {
  const session = await auth()
  return (
    <main>
      <div>
        {session?.user ? <h3>Logged in</h3> : <h3>Log in</h3>}
        <FormLogin />
      </div>
    </main>
  )
}
