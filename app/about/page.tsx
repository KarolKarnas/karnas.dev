import styles from "./page.module.scss"
import Json from "../ui/atoms/json"
import { ABOUT } from "../utils/info"
// import { mongo, rtl, playWright } from "../utils/icons"
import Image from "next/image"
import LinkCard from "../ui/atoms/linkCard"
import { SOCIAL_ITEMS, MY_SKILLS } from "../utils/constants"
import useIcon from "../hooks/useIcon"
import StackIcons from "../ui/atoms/stackIcons"
import MainHeading from "../ui/atoms/mainHeading"
import MainSubHeading from "../ui/atoms/mainSubHeading"
// import { Modal } from "../ui/atoms/modal"
// import { auth } from "@/auth"

export default async function About() {
  const icons = useIcon(MY_SKILLS)
  // const session = await auth()

  return (
    <div className={styles.container}>
      {/* <p>{session && session.user?.email}</p> */}
      <div className={styles.info}>
        <MainHeading color="orange">About</MainHeading>
        <MainSubHeading color="purple">Karol Karnas - Full Stack Developer</MainSubHeading>
        <Json code={ABOUT}></Json>
        {/* <ul>
          {SOCIAL_ITEMS.map((item, index) => (
            <LinkCard key={index} socialItem={item} />
          ))}
        </ul> */}
      </div>

      <div className={styles.image}>
        {/* <Modal src="/karol_karnas_full_stack_developer.jpg" alt="sada" width={683} height={1024} ></Modal> */}
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
