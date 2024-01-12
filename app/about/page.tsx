import styles from "./page.module.scss"
import Json from "../ui/json"
import { ABOUT } from "../utils/info"
import { mongo, rtl,playWright } from "../utils/icons"

export default function About() {
  return (
    <div>
      {playWright}
      <Json code={ABOUT}></Json>
    </div>
  )
}
