import styles from "./page.module.scss"
import { ABOUT } from "@/utils/info"
import Image from "next/image"
import { MY_SKILLS, QUOTATION } from "@/utils/constants"
import { Metadata } from "next"
import getIcons from "@/utils/icon-utils"
import MainHeading from "@/app/_components/main-heading/main-heading"
import MainSubHeading from "@/app/_components/main-sub-heading/main-sub-heading"
import Json from "@/app/_components/json/json"
import StackIcons from "@/app/_components/stack-icons/stack-icons"

export const metadata: Metadata = {
  title: "About",
  description:
    "Karol Karnas - Backend Engineer building data pipelines, agentic AI workflows, and pandas-driven analytics in Python, Django, FastAPI, and Celery.",
}

export default async function About() {
  const icons = getIcons(MY_SKILLS)

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <MainHeading color="orange">About</MainHeading>
        <MainSubHeading color="purple">
          Karol Karnas - Backend Engineer · Data Analysis · Agentic AI
        </MainSubHeading>
        <Json code={ABOUT}></Json>
      </div>

      <div className={styles.image}>
        <Image
          src={"/karol_karnas_full_stack_developer.jpg"}
          width={683}
          height={1024}
          alt={"Karol Karnas - Backend Engineer · Data Analysis · Agentic AI"}
        ></Image>
        <span className={styles.quote}>{QUOTATION}</span>
        <StackIcons icons={icons} />
      </div>
    </div>
  )
}
