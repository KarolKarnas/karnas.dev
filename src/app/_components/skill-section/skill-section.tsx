import styles from "./skill-section.module.scss"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}
const SkillSection = ({ children }: Props) => {


  return (
    <div className={styles.SkillSection}>
{children}
  </div>
  )
}
export default SkillSection
