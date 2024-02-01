import styles from "./page.module.scss"
import Json from "../ui/atoms/json"
import { CONTACT } from "../utils/info"
// import { mongo, rtl, playWright } from "../utils/icons"
import Image from "next/image"
import LinkCard from "../ui/atoms/linkCard"
import { SOCIAL_ITEMS, MY_SKILLS } from "../utils/constants"
import useIcon from "../hooks/useIcon"
import StackIcons from "../ui/atoms/stackIcons"
import MainHeading from "../ui/atoms/mainHeading"
import MainSubHeading from "../ui/atoms/mainSubHeading"
import ContactCard from "../ui/atoms/contactCard"
import { phone, mail } from "../utils/icons"
// import { auth } from "@/auth"

export default async function About() {
  const icons = useIcon(MY_SKILLS)
  // const session = await auth()

  return (
    <div className={styles.container}>
      {/* <p>{session && session.user?.email}</p> */}
      <div className={styles.info}>
        <MainHeading color="blue">Contact</MainHeading>
        <MainSubHeading color="purple">
          Feel free to contact with me:
        </MainSubHeading>

        <ul>
          <ContactCard icon={mail.icon} href="mailto: karol.karnas@gmail.com">
            karol.karnas@gmail.com
          </ContactCard>
          <ContactCard icon={phone.icon} href="tel: +48784034778">
            +48 784 034 778
          </ContactCard>
        </ul>
        {/* <Json code={CONTACT}></Json> */}
        <MainSubHeading color="purple">
          Or stay in touch via social media:
        </MainSubHeading>
        <ul>
          {SOCIAL_ITEMS.map((item, index) => (
            <LinkCard key={index} socialItem={item} />
          ))}
        </ul>
        {/* <StackIcons icons={icons} /> */}
      </div>


    </div>
  )
}
