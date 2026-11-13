import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { PROFILE } from "@/utils/profile"
import { SOCIAL_IMAGE_SIZE } from "./social-metadata"

type SocialImage = {
  title: string
  description: string
  label: string
  stack: string[]
  logo?: "home" | "dbm"
}

export async function createSocialImage({
  title,
  description,
  label,
  stack,
  logo,
}: SocialImage) {
  const [regular, bold, logoData] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/og/RobotoMono-Regular.ttf")),
    readFile(join(process.cwd(), "src/assets/og/RobotoMono-Bold.ttf")),
    logo === "home"
      ? readFile(join(process.cwd(), "public/assets/clients/home-logo.svg"))
      : logo === "dbm"
        ? readFile(join(process.cwd(), "public/assets/clients/dbm-logo.png"))
        : undefined,
  ])
  const logoSrc =
    logo && logoData
      ? `data:${logo === "home" ? "image/svg+xml" : "image/png"};base64,${logoData.toString("base64")}`
      : undefined
  const titleSize = title.length > 72 ? 42 : title.length > 45 ? 48 : 60

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#272822",
        color: "#f2f3e9",
        fontFamily: "Roboto Mono",
        fontWeight: 400,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: 72,
          background: "#20211c",
          borderBottom: "2px solid #3a3c32",
          padding: "0 44px",
        }}
      >
        <span style={{ color: "#c4ed85", fontSize: 24, fontWeight: 700 }}>
          karnas.dev
        </span>
        <span style={{ marginLeft: 32, color: "#a3a697", fontSize: 20 }}>
          / {label}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "40px 48px 28px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#c4ed85",
                fontSize: 20,
                marginBottom: 18,
              }}
            >
              {PROFILE.name} / {PROFILE.role}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: titleSize,
                fontWeight: 700,
                lineHeight: 1.16,
                letterSpacing: -1.5,
              }}
            >
              {title}
            </div>
          </div>
          {logoSrc ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 156,
                height: 156,
                padding: 18,
                borderRadius: 16,
                background: "#ffffff",
              }}
            >
              {/* ImageResponse embeds local logo data into the PNG. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoSrc}
                alt=""
                width={120}
                height={120}
                style={{ objectFit: "contain" }}
              />
            </div>
          ) : null}
        </div>
        <div
          style={{
            display: "flex",
            color: "#d6d8ca",
            fontSize: description.length > 180 ? 25 : 28,
            lineHeight: 1.45,
            marginTop: 26,
          }}
        >
          {description}
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: "auto",
            paddingTop: 24,
          }}
        >
          {stack.slice(0, 4).map((name) => (
            <div
              key={name}
              style={{
                display: "flex",
                padding: "10px 16px",
                border: "1px solid #505344",
                borderRadius: 8,
                background: "#32332c",
                color: "#82d9e3",
                fontSize: 20,
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 48,
          padding: "0 44px",
          borderTop: "1px solid #3a3c32",
          background: "#20211c",
          color: "#a3a697",
          fontSize: 18,
        }}
      >
        <span>{PROFILE.tagline}</span>
        <span style={{ color: "#c4ed85" }}>www.karnas.dev</span>
      </div>
    </div>,
    {
      ...SOCIAL_IMAGE_SIZE,
      fonts: [
        { name: "Roboto Mono", data: regular, weight: 400, style: "normal" },
        { name: "Roboto Mono", data: bold, weight: 700, style: "normal" },
      ],
    }
  )
}
