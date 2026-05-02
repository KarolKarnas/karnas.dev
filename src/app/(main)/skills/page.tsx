import styles from "./page.module.scss"
import {
  PROGRAMMING,
  BACKEND,
  CLOUD,
  FRONTEND,
  TEST,
  WORKFLOW_TOOLS,
  // AI_LLM_CONCEPTS,
  OBSERVABILITY,
} from "@/utils/constants"
import getIcons from "@/utils/icon-utils"
import { Metadata } from "next"
import StackIcons from "@/app/_components/stack-icons/stack-icons"
import MainHeading from "@/app/_components/main-heading/main-heading"
import MainSubHeading from "@/app/_components/main-sub-heading/main-sub-heading"
import SectionHeading from "@/app/_components/section-heading/section-heading"
import SkillSection from "@/app/_components/skill-section/skill-section"
// import { ConceptChipList } from "@/app/_components/concept-chip/concept-chip"

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Backend Engineering, Data Analysis, and Agentic AI - Python, Django, FastAPI, Celery, Pandas, pgvector, sentence-transformers, AWS, Azure, Docker, Postgres, Redis.",
}

export default async function Skills() {
  return (
    <div className={styles.container}>
      <MainHeading color="blue">Skills</MainHeading>
      <MainSubHeading color="purple">
        Backend Engineering · Data Analysis · Agentic AI
      </MainSubHeading>

      <SkillSection>
        <SectionHeading color="purple">Programming languages</SectionHeading>
        <StackIcons size="large" icons={getIcons(PROGRAMMING)} texts />
      </SkillSection>

      <SkillSection>
        <SectionHeading color="purple">Backend</SectionHeading>
        <StackIcons size="large" icons={getIcons(BACKEND)} texts />
      </SkillSection>

      <SkillSection>
        <SectionHeading color="purple">Cloud &amp; Infrastructure</SectionHeading>
        <StackIcons size="large" icons={getIcons(CLOUD)} texts />
      </SkillSection>

      {/* <SkillSection>
        <SectionHeading color="purple">AI / LLM</SectionHeading>
        <ConceptChipList labels={AI_LLM_CONCEPTS} color="purple" />
      </SkillSection> */}

      <SkillSection>
        <SectionHeading color="purple">Observability</SectionHeading>
        <StackIcons size="large" icons={getIcons(OBSERVABILITY)} texts />
      </SkillSection>

      <SkillSection>
        <SectionHeading color="purple">Test</SectionHeading>
        <StackIcons size="large" icons={getIcons(TEST)} texts />
      </SkillSection>

      <SkillSection>
        <SectionHeading color="purple">Workflow Tools</SectionHeading>
        <StackIcons size="large" icons={getIcons(WORKFLOW_TOOLS)} texts />
      </SkillSection>

      <SkillSection>
        <SectionHeading color="purple">
          Frontend
        </SectionHeading>
        <StackIcons icons={getIcons(FRONTEND)} texts />
      </SkillSection>
    </div>
  )
}
