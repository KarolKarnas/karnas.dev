import { Roboto_Mono } from "next/font/google"
import type { Metadata } from "next"
import "./scss/_global.scss"
import { Analytics } from "@vercel/analytics/react"
import { SplitViewProvider } from "./_components/split-view/split-view-context"

import { AppearanceProvider } from "./_components/appearance/appearance-context"
import Lightbox from "./_components/lightbox/lightbox"
import { APPEARANCE_SCRIPT } from "./_components/appearance/appearance-config"
import { PROFILE } from "@/utils/profile"

const roboto = Roboto_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${PROFILE.name} | ${PROFILE.role}`,
    default: `${PROFILE.name} | ${PROFILE.role}`,
  },
  description: PROFILE.description,
  metadataBase: new URL("https://www.karnas.dev"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: APPEARANCE_SCRIPT }} />
      </head>
      <body className={roboto.className}>
        <AppearanceProvider>
          <Lightbox>
            <SplitViewProvider>{children}</SplitViewProvider>
          </Lightbox>
        </AppearanceProvider>
        <Analytics />
      </body>
    </html>
  )
}
