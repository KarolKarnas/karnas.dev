import styles from "./page.module.scss"
import Json from "../ui/json"
import { ABOUT } from "../utils/info"
// import { mongo, rtl, playWright } from "../utils/icons"
import Image from "next/image"
import LinkCard from "../ui/linkCard"
import { SOCIAL_ITEMS, MY_SKILLS } from "../utils/constants"
import useIcon from "../hooks/useIcon"
import StackIcons from "../ui/stackIcons"


export default function About() {

  const icons = useIcon(MY_SKILLS)
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>Karol Karnas</h1>
        <h2>Fullstack Developer</h2>
        <Json code={ABOUT}></Json>
        <ul>
  {SOCIAL_ITEMS.map((item, index) => (
    <LinkCard key={index} socialItem={item} />
  ))}
</ul>

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
