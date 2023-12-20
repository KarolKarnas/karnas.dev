"use client"

import styles from "./page.module.scss"
import { userStore } from "./store/user"

export default function Home() {
  const user = userStore((state: any) => state.user)
  const updateUser = userStore((state: any) => state.updateUser)
  return (
    <main>
      <h1>Content</h1>
      <p>{user.full_name}</p>
      <input
        type="text"
        name=""
        id=""
        onChange={(e: any) => updateUser({full_name: e.target.value})}
      />
    </main>
  )
}
