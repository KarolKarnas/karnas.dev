import styles from "./page.module.scss"
import {
  PROGRAMMING,
  BACKEND,
  FRONTEND,
  TEST,
  WORKFLOW_TOOLS,
} from "../../utils/constants"
import useIcon from "../../hooks/useIcon"
import { Metadata } from "next"
import StackIcons from "../_components/stack-icons/stack-icons"
import MainHeading from "../_components/main-heading/main-heading"
import MainSubHeading from "../_components/main-sub-heading/main-sub-heading"
import SectionHeading from "../_components/section-heading/section-heading"
import SkillSection from "../_components/skill-section/skill-section"

export const metadata: Metadata = {
  title: "Skills",
  description:
    "All my hard earn knowledge and skills on the one page :). TypeScript, JavaScript, React, Node.js, Next.js, PostgreSQL, Linux, Testing Library, Playwright, Tailwind, SASS",
}

export default async function About() {
  const skills = [
    { title: "Programming languages", icons: useIcon(PROGRAMMING) },
    { title: "Front-end", icons: useIcon(FRONTEND) },
    { title: "Back-end", icons: useIcon(BACKEND) },
    { title: "Test", icons: useIcon(TEST) },
    { title: "Workflow Tools", icons: useIcon(WORKFLOW_TOOLS) },
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
