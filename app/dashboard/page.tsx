import styles from "./page.module.scss"
import Button from "../ui/atoms/button"
import { signOut } from "@/auth"
import { Metadata } from "next"
import MainHeading from "../ui/atoms/mainHeading"
import Dashboard from "../ui/organisms/dashboard"

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Manage and edit posts and projects with admin privileges on the Dashboard",
}

export default function About() {
  return (
    <div className={styles.container}>
      <MainHeading color="blue">Dashboard</MainHeading>
      <Dashboard />
    </div>
  )
}
