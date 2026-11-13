import { createSocialImage } from "@/lib/social-image"
import { PROFILE } from "@/utils/profile"

export const alt = `${PROFILE.name} - ${PROFILE.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return createSocialImage({
    title: PROFILE.name,
    description: `${PROFILE.role}. ${PROFILE.tagline}`,
    label: "home",
    stack: ["Python", "React", "Next.js", "AI integrations"],
  })
}
