import type { Metadata } from "next"
import Link from "next/link"
import { SOCIAL_ITEMS } from "@/utils/constants"
import LinkCard from "@/app/_components/link-card/link-card"
import { mail, phone } from "@/icons"
import styles from "./page.module.scss"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Karol Karnas via email at karol.karnas@gmail.com or by phone at +48 784 034 778.",
}
export default function Contact() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>CONTACT / START A CONVERSATION</span>
        <h1>
          Complex problem?
          <br />
          <span>Let’s make it work.</span>
        </h1>
        <p>
          Have a backend challenge, a data workflow to untangle, or an AI
          integration in mind? I’d like to hear what you’re building.
        </p>
      </header>
      <div className={styles.grid}>
        <section className={styles.direct}>
          <span className={styles.eyebrow}>SAY HELLO</span>
          <a className={styles.email} href="mailto:karol.karnas@gmail.com">
            {mail.icon}
            <span>karol.karnas@gmail.com</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a className={styles.phone} href="tel:+48784034778">
            {phone.icon}
            <span>+48 784 034 778</span>
          </a>
          <div className={styles.note}>
            <span>Based in Poland</span>
            <span>Backend · Data · AI</span>
          </div>
        </section>
        <section className={styles.social}>
          <span className={styles.eyebrow}>ELSEWHERE ON THE INTERNET</span>
          <ul>
            {SOCIAL_ITEMS.map((item) => (
              <LinkCard key={item.link} socialItem={item} />
            ))}
          </ul>
        </section>
      </div>
      <footer className={styles.footer}>
        <span>Want a little more context first?</span>
        <Link href="/professional-projects">
          Take a look at my work <span aria-hidden="true">↗</span>
        </Link>
      </footer>
    </div>
  )
}
