"use server"

import { z } from "zod"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { signIn, auth } from "@/auth"
import { AuthError } from "next-auth"
import cloudinary from "../utils/cloudinary"

const cloudinaryUrlExtractor = async (file: any) => {
  const image = file as File
  const arrayBuffer = await image.arrayBuffer()
  const buffer = new Uint8Array(arrayBuffer)
  let url = ""
  await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, function (error, result) {
        if (error) {
          reject(error)
          return
        }
        resolve(result)
        // console.log(result)
        if (result) {
          resolve(result)
          if (result) {
            url = result.secure_url
          }
        }
      })
      .end(buffer)
  })
  return url
}

// const tags = ["JavaScript", "TypeScript", "Figma"]

const FormSchema = z.object({
  title: z.string(),
  shortTitle: z.string(),
  subTitle: z.string(),
  fieldTitles: z.array(z.string()),
  fieldContents: z.array(z.string()),
  fieldImages: z.array(z.any()),
  slug: z.string(),
  contentTitle: z.string(),
  content: z.string(),
  mainImage: z.any(),
  category: z.string(),
  tags: z.string(),
})

const CreatePost = FormSchema

export async function createPost(formData: FormData) {
  console.log(formData)
  const {
    title,
    shortTitle,
    subTitle,
    fieldTitles,
    fieldContents,
    fieldImages,
    slug,
    contentTitle,
    content,
    mainImage,
    category,
    tags,
  } = CreatePost.parse({
    title: formData.get("title"),
    shortTitle: formData.get("shortTitle"),
    subTitle: formData.get("subTitle"),
    fieldTitles: formData.getAll("fieldTitle"),
    fieldContents: formData.getAll("fieldContent"),
    fieldImages: formData.getAll("fieldImage"),
    slug: formData.get("slug"),
    contentTitle: formData.get("contentTitle"),
    content: formData.get("content"),
    mainImage: formData.get("mainImage"),
    category: formData.get("category"),
    tags: formData.get("tags"),
  })

  const tagArr = tags.split(",")
  // console.log(Array.isArray(tagArr))
  // const tagArr = JSON.stringify(tags2)
  // console.log(tagArr.split(","))
  const mainImageUrl = await cloudinaryUrlExtractor(mainImage)

  //Mutate fields data
  const fields = []
  for (let i = 0; i < fieldTitles.length; i++) {
    const image = await cloudinaryUrlExtractor(fieldImages[i])
    const title = fieldTitles[i]
    const content = fieldContents[i]

    fields.push({
      title,
      content,
      image,
    })
  }
  // console.log(fields)
  //fetch logged in user id and name
  const session = await auth()
  const userData = await sql`SELECT id, name FROM users WHERE email = ${
    session && session.user?.email
  };`

  const { id, name } = userData.rows[0]
  const date = new Date().toISOString().split("T")[0]

  // database Insert
  try {
    await sql`INSERT INTO posts (author_id, author_name, title, short_title, sub_title, slug, content_title, content, main_image, fields, category, tags, date)
  VALUES (${id}, ${name},  ${title}, ${shortTitle}, ${subTitle}, ${slug}, ${contentTitle}, ${content}, ${mainImageUrl}, ${JSON.stringify(
    fields
  )}, ${category},  ${JSON.stringify(tagArr)}, ${date})`
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Post.",
    }
  }

  revalidatePath("/blog")
  redirect("/blog")
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials."
        default:
          return "Something went wrong."
      }
    }
    throw error
  }
  // revalidatePath("/dashboard")
  // redirect("/dashboard")
}

// "use server"

// import { z } from "zod"
// import { sql } from "@vercel/postgres"
// import { revalidatePath } from "next/cache"
// import { redirect } from "next/navigation"

// const fields = [
//   {
//     title: "TDDCraftsman",
//     content: "Test-Driven importance of wr.",
//     image: "/tdd_16_9.jpg",
//   },
//   {
//     title: "TDD Path",
//     content: `Both a`,
//   },
// ]

// const tags = ["JavaScript", "TypeScript", "Figma"]

// const FormSchema = z.object({
//   username: z
//     .string({
//       required_error: "required user",
//     })
//     .min(1, { message: "min 1 username" }),
//   password: z
//     .string({
//       required_error: "required password",
//     })
//     .min(1, { message: "min 1 password" }),
// })

// export type State = {
//   errors?: {
//     username?: string[]
//     password?: string[]
//   }
//   message?: string | null
// }

// // const CreatePost = FormSchema

// export async function createPost(prevState: State, formData: FormData) {
//   const validatedFields = FormSchema.safeParse({
//     username: formData.get("username"),
//     password: formData.get("password"),
//   })

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: "Missing Fields. Failed to Create Invoice.",
//     }
//   }

//   const { username, password } = validatedFields.data

//   const date = new Date().toISOString().split("T")[0]
//   // throw new Error('Failed to Delete Invoice');
//   try {
//     await sql`INSERT INTO posts (author_id, title, short_title, sub_title, slug,content_title,  content, main_image, fields, category, tags, date)
//   VALUES (${"422111b1-4001-4271-9855-fec4b6a6442a"}, ${password}, ${username}, ${"post.sub_title"}, ${password}, ${"/tddFigma.jpg"}, ${"post.content"}, ${"/tddFigma.jpg"}, ${JSON.stringify(
//     fields
//   )}, ${"post.category"},  ${JSON.stringify(tags)}, ${date})`
//   } catch (error) {
//     return {
//       message: "Database Error: Failed to Create Post.",
//     }
//   }

//   revalidatePath("/blog")
//   redirect("/blog")
// }

// image url extractor

// type Props = {
//   image: any
// }

// const cloudinaryUrlExtractor = async ({image}: Props) => {
//   const file = image as File
//   const arrayBuffer = await file.arrayBuffer()
//   const buffer = new Uint8Array(arrayBuffer)
//   let url = '';
//    await new Promise((resolve, reject) => {
//     cloudinary.uploader
//       .upload_stream({}, function (error, result) {
//         if (error) {
//           reject(error)
//           return
//         }
//         resolve(result)
//         console.log(result)
//         if (result) {
//           resolve(result)
//           if (result) {
//             url = result.secure_url
//           }
//         }
//       })
//       .end(buffer)
//   })
//   return url
// }
