import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import { Roboto_Mono } from "next/font/google"
import type { Metadata } from "next";
import styles from "./layout.module.scss"
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";

import "./scss/_global.scss"

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] })

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Next.js Blog Example with ${CMS_NAME}`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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