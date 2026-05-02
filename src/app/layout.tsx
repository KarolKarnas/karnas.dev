import { Roboto_Mono } from "next/font/google"
import type { Metadata } from "next"
import "./scss/_global.scss"
import { Analytics } from "@vercel/analytics/react"
import { SplitViewProvider } from "./_components/split-view/split-view-context"

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Karol Karnas | Backend Engineer · Data Analysis · Agentic AI",
    default: "Karol Karnas | Backend Engineer · Data Analysis · Agentic AI",
  },
  description:
    "Karol Karnas - Backend Engineer focused on data analysis and agentic AI. Python, Django, FastAPI, Celery, Pandas, PostgreSQL/pgvector, Redis, Docker - on AWS and Azure.",
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
