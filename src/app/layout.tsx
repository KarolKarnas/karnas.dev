import { Roboto_Mono } from "next/font/google"
import type { Metadata } from "next"
import "./scss/_global.scss"
import { Analytics } from "@vercel/analytics/react"
import { SplitViewProvider } from "./_components/split-view/split-view-context"

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Karol Karnas | Full-stack Developer | Portfolio",
    default: "Karol Karnas | Full-stack Developer | Portfolio",
  },
  description:
    "Karol Karnas - Explore the diverse projects and insightful development posts. Karol Karnas, a dedicated Full-stack Developer. Dive into a web programming...",
  metadataBase: new URL("https://www.karnas.dev"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SplitViewProvider>{children}</SplitViewProvider>
        <Analytics />
      </body>
    </html>
  )
}
