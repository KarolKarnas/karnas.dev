import { sql } from "@vercel/postgres"
import { Post, User, Project } from "../utils/types"
import { unstable_noStore as noStore } from "next/cache"
import { typeScriptAlt, nextJs, react } from "../utils/icons"


// Blog

export async function fetchPosts() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore()
  try {
    const data = await sql<Post>`SELECT * FROM posts`
    return data.rows
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch posts data.")
  }
}

export async function fetchBlogLinks() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore()
  try {
    const data = await sql<Post>`SELECT short_title, slug FROM posts`
    // console.log("data rows!", data.rows)
    const blogLinks = data.rows.map((row) => ({
      title: row.short_title,
      path: `/blog/${row.slug}`,
      icon: typeScriptAlt.icon,
    }))
    // console.log(blogLinks)
    return blogLinks
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch posts data.")
  }
}

export async function fetchBlogCards() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore()
  try {
    const data =
      await sql<Post>`SELECT short_title, slug, content_title, title, date, content, sub_title, main_image FROM posts`
    // console.log("data rows!", data.rows)
    const blogCards = data.rows.map((row) => ({
      ...row,
      path: `/blog/${row.slug}`,
      // icon: typeScriptAlt,
    }))
    // console.log(blogLinks)
    return blogCards
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch posts data.")
  }
}

export async function fetchPostBySlug(slug: string) {
  noStore()
  try {
    const data = await sql<Post>`
      SELECT * FROM posts WHERE posts.slug = ${slug};
    `
    return data.rows[0]
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch blog post by slug.")
  }
}

//User

export async function getUser(email: string) {
  noStore()
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`
    return user.rows[0] as User
  } catch (error) {
    console.error("Failed to fetch user:", error)
    throw new Error("Failed to fetch user.")
  }
}

//Projects

export async function fetchProjectLinks() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore()
  try {
    const data = await sql<Project>`SELECT short_title, slug, main_icon FROM projects`
    // console.log("data rows!", data.rows)
    const projectLinks = data.rows.map((row) => ({
      title: row.short_title,
      path: `/projects/${row.slug}`,
      icon: row.main_icon === 'react' ? react.icon : nextJs.icon,
    }))
    // console.log(blogLinks)
    return projectLinks
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch projects data.")
  }
}


export async function fetchProjectBySlug(slug: string) {
  noStore()
  try {
    const data = await sql<Project>`
      SELECT * FROM projects WHERE projects.slug = ${slug};
    `
    // console.log(data.rows)
    return data.rows[0]
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch project by slug.")
  }
}

export async function fetchProjectCards() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore()
  try {
    const data =
      await sql<Project>`SELECT short_title, slug, content_title, title, date, content, sub_title, main_image, stack, icons_stack, live_demo, repo FROM projects`
    // console.log("data rows!", data.rows)
    const projectCards = data.rows.map((row) => ({
      ...row,
      path: `/projects/${row.slug}`,
      // icon: typeScriptAlt,
    }))
    // console.log(blogLinks)
    return projectCards
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch projects data.")
  }
}

