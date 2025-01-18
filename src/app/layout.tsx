import { Roboto_Mono } from "next/font/google"
import type { Metadata } from "next"
import styles from "./layout.module.scss"
import "./scss/_global.scss"
import SideNav from "./_components/side-nav/side-nav"
import { Analytics } from "@vercel/analytics/react"

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Karol Karnas | Full Stack Developer | Portfolio",
    default: "Karol Karnas | Full Stack Developer | Portfolio",
  },
  description:
    "Karol Karnas - Explore the diverse projects and insightful development posts. Karol Karnas, a dedicated Full Stack Developer. Dive into a web programming...",
  metadataBase: new URL("https://www.karnas.dev"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${roboto.className} ${styles.layout}`}>
        <SideNav />
        <div className={styles.container}>
          <main className={styles.content}>{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
