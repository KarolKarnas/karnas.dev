import { getAllProjects, getProjectBySlug } from "@/lib/api"
import { createSocialImage } from "@/lib/social-image"

export const alt = "Side project by Karol Karnas"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return getAllProjects().map(({ slug }) => ({ slug }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  return createSocialImage({
    title: project.title,
    description: project.sub_title,
    label: "side_projects",
    stack: project.stack ?? project.tags,
  })
}
