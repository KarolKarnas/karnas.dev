import { sql } from "@vercel/postgres"
import { Post, User } from "../utils/types"
import { unstable_noStore as noStore } from "next/cache"
import { typeScriptAlt } from "../utils/icons"

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
      icon: typeScriptAlt,
    }))
    // console.log(blogLinks)
    return blogLinks
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch posts data.")
  }
}

export async function fetchBlogBySlug(slug: string) {
  noStore()
  try {
    const data = await sql<Post>`
      SELECT * FROM posts WHERE posts.slug = ${slug};
    `
    // console.log(data.rows)
    return data.rows[0]
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch blog post by slug.")
  }
}

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
