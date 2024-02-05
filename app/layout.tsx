import type { Metadata } from "next"
import { Roboto_Mono } from "next/font/google"
import styles from "./layout.module.scss"
import SideNav from "./ui/organisms/sidenav"
import Header from "./ui/organisms/header"
import "./scss/_global.scss"
import { fetchBlogLinks, fetchProjectLinks } from "./lib/data"
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: '%s | Karol Karnas | Full Stack Developer | Portfolio',
    default: 'Karol Karnas | Full Stack Developer | Portfolio',
  },
  description: "Karol Karnas - Explore the diverse projects and insightful development posts. Karol Karnas, a dedicated Full Stack Developer. Dive into a web programming...",
  metadataBase: new URL("https://www.karnas.dev"),
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const blogLinks = await fetchBlogLinks()
  const projectLinks = await fetchProjectLinks()
  return (
    <html lang="en">
      <body className={`${roboto.className} ${styles.layout}`}>
        <SideNav blogLinks={blogLinks} projectLinks={projectLinks} />

        <div className={styles.container}>
          <Header />
          <main className={styles.content}>{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
