import { sql } from "@vercel/postgres"
import { Article, User } from "../utils/types"
import { unstable_noStore as noStore } from "next/cache"

export async function fetchArticles() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore()
  try {
    const data = await sql<Article>`SELECT * FROM articles`
    return data.rows
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch articles data.")
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
