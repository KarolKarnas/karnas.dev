"use server"

import { z } from "zod"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const fields = [
  {
    title: "TDDCraftsman",
    content: "Test-Driven importance of wr.",
    image: "/tdd_16_9.jpg",
  },
  {
    title: "TDD Path",
    content: `Both a`,
  },
]

const tags = ["JavaScript", "TypeScript", "Figma"]

const FormSchema = z.object({
  username: z.string(),
  password: z.string(),
})

const CreatePost = FormSchema

export async function createPost(formData: FormData) {
  const { username, password } = CreatePost.parse({
    username: formData.get("username"),
    password: formData.get("password"),
  })

  const date = new Date().toISOString().split("T")[0]
  throw new Error('Failed to Delete Invoice');
try {
  await sql`INSERT INTO posts (author_id, title, short_title, sub_title, slug,content_title,  content, main_image, fields, category, tags, date)
  VALUES (${"422111b1-4001-4271-9855-fec4b6a6442a"}, ${password}, ${username}, ${"post.sub_title"}, ${password}, ${"/tddFigma.jpg"}, ${"post.content"}, ${"/tddFigma.jpg"}, ${JSON.stringify(
      fields
    )}, ${"post.category"},  ${JSON.stringify(tags)}, ${date})`
} catch (error) {
  return {
    message: 'Database Error: Failed to Create Post.',
  };
}

 

  revalidatePath("/blog")
  redirect("/blog")
}
