import styles from "./page.module.scss"
import { PROGRAMMING, BACKEND, FRONTEND, TEST,DEV_OPS } from "../utils/constants"
import useIcon from "../hooks/useIcon"
import StackIcons from "../ui/atoms/stackIcons"
import MainHeading from "../ui/atoms/mainHeading"
import MainSubHeading from "../ui/atoms/mainSubHeading"
import SectionHeading from "../ui/atoms/sectionHeading"

export default async function About() {
  const frontendIcons = useIcon(FRONTEND)
  const backendIcons = useIcon(BACKEND)
  const programmingIcons = useIcon(PROGRAMMING)
  const testIcons = useIcon(TEST)
  const devOpsIcons = useIcon(DEV_OPS)
  // const session = await auth()

  return (
    <div className={styles.container}>
      <MainHeading color="blue">Skills</MainHeading>
      <MainSubHeading color="purple">
        All my hard earn knowledge and skills on the one page :)
      </MainSubHeading>

      <div className={styles.SkillSection}>
        <SectionHeading color="purple">Programming</SectionHeading>
        <StackIcons size="large" icons={programmingIcons} />
      </div>
      <div className={styles.SkillSection}>
        <SectionHeading color="purple">Frontend</SectionHeading>
        <StackIcons size="large" icons={frontendIcons} />
      </div>
      <div className={styles.SkillSection}>
        <SectionHeading color="purple">Backend</SectionHeading>
        <StackIcons size="large" icons={backendIcons} />
      </div>
      <div className={styles.SkillSection}>
        <SectionHeading color="purple">Test</SectionHeading>
        <StackIcons size="large" icons={testIcons} />
      </div>
      <div className={styles.SkillSection}>
        <SectionHeading color="purple">DevOps</SectionHeading>
        <StackIcons size="large" icons={devOpsIcons} />
      </div>
    </div>
  )
}
