import styles from "./page.module.scss"
import { SOCIAL_ITEMS } from "../../utils/constants"
import { phone, mail } from "../../utils/icons"
import { Metadata } from "next"
import MainHeading from "../_components/main-heading/main-heading"
import MainSubHeading from "../_components/main-sub-heading/main-sub-heading"
import ContactCard from "../_components/contact-card/contact-card"
import LinkCard from "../_components/link-card/link-card"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Karol Karnas via email at karol.karnas@gmail.com or by phone at +48 784 034 778.",
}

export default async function About() {
  return (
    <div className={styles.container}>
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
        <MainSubHeading color="purple">
          Or stay in touch via social media:
        </MainSubHeading>
        <ul>
          {SOCIAL_ITEMS.map((item, index) => (
            <LinkCard key={index} socialItem={item} />
          ))}
        </ul>
      </div>
    </div>
  )
}
