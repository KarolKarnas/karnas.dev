import styles from "./page.module.scss"
import LinkCard from "../ui/atoms/linkCard"
import { SOCIAL_ITEMS } from "../utils/constants"
import MainHeading from "../ui/atoms/mainHeading"
import MainSubHeading from "../ui/atoms/mainSubHeading"
import ContactCard from "../ui/atoms/contactCard"
import { phone, mail } from "../utils/icons"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Karol Karnas via email at karol.karnas@gmail.com or by phone at +48 784 034 778.',
};


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
