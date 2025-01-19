import styles from "./page.module.scss"
import { ABOUT } from "../../utils/info"
import Image from "next/image"
import { MY_SKILLS } from "../../utils/constants"
import { Metadata } from "next"
import useIcon from "@/hooks/useIcon"
import MainHeading from "../_components/main-heading/main-heading"
import MainSubHeading from "../_components/main-sub-heading/main-sub-heading"
import Json from "../_components/json/json"
import StackIcons from "../_components/stack-icons/stack-icons"

export const metadata: Metadata = {
  title: "About",
  description:
    "Karol Karnas is specializing in creating pixel perfect Interfaces. Currently his favorite stack to do that is React + Typescript + TailwindCSS",
}

export default async function About() {
  const icons = useIcon(MY_SKILLS)

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <MainHeading color="orange">About</MainHeading>
        <MainSubHeading color="purple">
          Karol Karnas - Full Stack Developer
        </MainSubHeading>
        <Json code={ABOUT}></Json>
      </div>

      <div className={styles.image}>
        <Image
          src={"/karol_karnas_full_stack_developer.jpg"}
          width={683}
          height={1024}
          alt={"Karol Karnas full stack developer"}
        ></Image>
        <StackIcons icons={icons} />
      </div>
    </div>
  )
}
