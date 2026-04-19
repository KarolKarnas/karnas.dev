import {
  PostFrontmatterSchema,
  ProjectFrontmatterSchema,
} from "@/utils/schemas"
import { Post, Project } from "@/utils/types"
import fs from "fs"
import matter from "gray-matter"
import { join } from "path"

const postsDirectory = join(process.cwd(), "_posts")
const projectsDirectory = join(process.cwd(), "_projects")
const professionalDirectory = join(process.cwd(), "_professional")

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  const frontmatter = PostFrontmatterSchema.parse(data)

  return { ...frontmatter, slug: realSlug, content }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory)
}

export function getProjectBySlug(slug: string): Project {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(projectsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  const frontmatter = ProjectFrontmatterSchema.parse(data)

  return { ...frontmatter, slug: realSlug, content } as Project
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs()
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1))
  return projects
}

export function getProfessionalSlugs() {
  return fs.readdirSync(professionalDirectory)
}

export function getProfessionalBySlug(slug: string): Project {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(professionalDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  const frontmatter = ProjectFrontmatterSchema.parse(data)

  return { ...frontmatter, slug: realSlug, content } as Project
}

export function getAllProfessional(): Project[] {
  const slugs = getProfessionalSlugs()
  const projects = slugs
    .map((slug) => getProfessionalBySlug(slug))
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1))
  return projects
}
