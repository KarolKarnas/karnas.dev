import styles from "./page.module.scss"
import Json from "../ui/atoms/json"
import { ABOUT } from "../utils/info"
import Image from "next/image"
import {  MY_SKILLS } from "../utils/constants"
import useIcon from "../hooks/useIcon"
import StackIcons from "../ui/atoms/stackIcons"
import MainHeading from "../ui/atoms/mainHeading"
import MainSubHeading from "../ui/atoms/mainSubHeading"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About',
  description: 'Karol Karnas is specializing in creating pixel perfect Interfaces. Currently his favorite stack to do that is React + Typescript + TailwindCSS'
};


export default async function About() {
  const icons = useIcon(MY_SKILLS)
  // const session = await auth()

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <MainHeading color="orange">About</MainHeading>
        <MainSubHeading color="purple">Karol Karnas - Full Stack Developer</MainSubHeading>
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
