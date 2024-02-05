import styles from "./page.module.scss"
import {
  PROGRAMMING,
  BACKEND,
  FRONTEND,
  TEST,
  DEV_OPS,
} from "../utils/constants"
import useIcon from "../hooks/useIcon"
import StackIcons from "../ui/atoms/stackIcons"
import MainHeading from "../ui/atoms/mainHeading"
import MainSubHeading from "../ui/atoms/mainSubHeading"
import SectionHeading from "../ui/atoms/sectionHeading"
import SkillSection from "../ui/molecules/skillSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skills",
  description:
    "All my hard earn knowledge and skills on the one page :). TypeScript, JavaScript, React, Node.js, Next.js, PostgreSQL, Linux, Testing Library, Playwright, Tailwind, SASS",
}

export default async function About() {
  const skills = [
    { title: "Programming", icons: useIcon(PROGRAMMING) },
    { title: "Front-end", icons: useIcon(FRONTEND) },
    { title: "Back-end", icons: useIcon(BACKEND) },
    { title: "Test", icons: useIcon(TEST) },
    { title: "DevOps", icons: useIcon(DEV_OPS) },
  ]

  return (
    <div className={styles.container}>
      <MainHeading color="blue">Skills</MainHeading>
      <MainSubHeading color="purple">
        All my hard earn knowledge and skills on the one page :)
      </MainSubHeading>

      {skills.map((skill, index) => (
        <SkillSection key={index}>
          <SectionHeading color="purple">{skill.title}</SectionHeading>
          <StackIcons size="large" icons={skill.icons} texts />
        </SkillSection>
      ))}
    </div>
  )
}
