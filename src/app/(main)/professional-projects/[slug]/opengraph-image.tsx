import { getAllProfessional, getProfessionalBySlug } from "@/lib/api"
import { createSocialImage } from "@/lib/social-image"

export const alt = "Professional project by Karol Karnas"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return getAllProfessional().map(({ slug }) => ({ slug }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProfessionalBySlug(slug)
  return createSocialImage({
    title: project.title,
    description: project.sub_title,
    label: "professional_projects",
    stack: project.stack ?? project.tags,
    logo:
      slug === "dms-housing-authority"
        ? "home"
        : slug === "data-bid-machine"
          ? "dbm"
          : undefined,
  })
}
