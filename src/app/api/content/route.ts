import { NextResponse } from "next/server"
import {
  getAllPosts,
  getAllProjects,
  getAllProfessional,
} from "@/lib/api"
import type { Project } from "@/utils/types"

export type PostMeta = {
  title: string
  slug: string
  date: string
  tags: string[]
  sub_title: string
  content: string
}

export type ProjectMeta = {
  title: string
  slug: string
  date: string
  sub_title: string
  stack?: string[]
  live_demo: string
  repo: string
  content: string
  section: "projects" | "professional"
}

export type ContentResponse = {
  posts: PostMeta[]
  projects: ProjectMeta[]
  professional: ProjectMeta[]
}

const toProjectMeta = (
  p: Project,
  section: ProjectMeta["section"]
): ProjectMeta => ({
  title: p.title,
  slug: p.slug,
  date: p.date,
  sub_title: p.sub_title,
  stack: p.stack,
  live_demo: p.live_demo,
  repo: p.repo,
  content: p.content,
  section,
})

export async function GET() {
  const posts = getAllPosts()
  const projects = getAllProjects()
  const professional = getAllProfessional()

  const response: ContentResponse = {
    posts: posts.map((p) => ({
      title: p.title,
      slug: p.slug,
      date: p.date,
      tags: p.tags,
      sub_title: p.sub_title,
      content: p.content,
    })),
    projects: projects.map((p) => toProjectMeta(p, "projects")),
    professional: professional.map((p) => toProjectMeta(p, "professional")),
  }

  return NextResponse.json(response)
}
