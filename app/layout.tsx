import type { Metadata } from "next"
import { Roboto_Mono } from "next/font/google"
import styles from "./layout.module.scss"
import SideNav from "./ui/sidenav"
import Header from "./ui/header"
import "./scss/_global.scss"
import { fetchBlogLinks } from "./lib/data"



const roboto = Roboto_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Karol Karnas",
  description: "Fullstack Developer",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const blogLinks = await fetchBlogLinks()
  return (
    <html lang="en">
      <body className={`${roboto.className} ${styles.layout}`}>
   
          <SideNav blogLinks={blogLinks} />
     
        <div className={styles.container}>
          <Header />
          <main className={styles.content}>{children}</main>
        </div>
      </body>
    </html>
  )
}
