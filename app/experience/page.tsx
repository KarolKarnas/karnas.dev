import styles from "./page.module.scss"

import Json from "../ui/atoms/json"
import { ABOUT } from "../utils/info"

export default function About() {
  return (
    <div>
      <Json code={ABOUT}></Json>
    </div>
  )
}
