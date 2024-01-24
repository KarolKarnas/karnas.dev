"use server"

import { z } from "zod"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { signIn, auth } from "@/auth"
import { AuthError } from "next-auth"
import cloudinary from "../utils/cloudinary"
import { Field } from "../utils/types"

function extractDomain(url: string) {
  // if (url === "") {
  //   return
  // }
  const parsedUrl = new URL(url)
  const domain = parsedUrl.hostname.replace("www.", "")
  const domainWithPath = domain + parsedUrl.pathname
  return domainWithPath
}

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
  fieldLists: z.array(z.string()),
  fieldSecondContents: z.array(z.string()),
  fieldImages: z.array(z.any()),
  fieldLinks: z.array(z.string()),
  slug: z.string(),
  contentTitle: z.string(),
  content: z.string(),
  mainImage: z.any(),
  category: z.string(),
  tags: z.string(),
})

const CreatePost = FormSchema

export async function createPost(formData: FormData) {
  // console.log(formData)
  const {
    title,
    shortTitle,
    subTitle,
    fieldTitles,
    fieldContents,
    fieldLists,
    fieldSecondContents,
    fieldImages,
    fieldLinks,
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
    fieldLists: formData.getAll("fieldList"),
    fieldSecondContents: formData.getAll("fieldSecondContent"),
    fieldImages: formData.getAll("fieldImage"),
    fieldLinks: formData.getAll("fieldLink"),
    slug: formData.get("slug"),
    contentTitle: formData.get("contentTitle"),
    content: formData.get("content"),
    mainImage: formData.get("mainImage"),
    category: formData.get("category"),
    tags: formData.get("tags"),
  })

  const tagArr = tags.split(",")
  // console.log('1', fieldLists)
  // console.log(Array.isArray(tagArr))
  // const tagArr = JSON.stringify(tags2)

  const mainImageUrl = await cloudinaryUrlExtractor(mainImage)
  //Mutate fields data
  const fields: Field[] = []
  for (let i = 0; i < fieldTitles.length; i++) {
    const title = fieldTitles[i]
    const content = fieldContents[i]
    const second_content = fieldSecondContents[i]

    const fieldEntry: Field = {
      title,
      content,
      second_content,
    }
    if (fieldImages[i].size > 0) {
      const image = await cloudinaryUrlExtractor(fieldImages[i])
      fieldEntry.image = image
    }

    if (fieldLinks[i]) {
      const links = fieldLinks[i]
        .split(",")
        .map((link) => ({ link: link, short_link: extractDomain(link) }))
      fieldEntry.links = links
    }

    if (fieldLists[i]) {
      const list = fieldLists[i].split(",")
      fieldEntry.list = list
    }
    fields.push(fieldEntry)
  }

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
    console.log(error)
    return {
      message: "Database Error: Failed to Create Post.",
    }
  }

  revalidatePath("/blog")
  redirect("/blog")
}

const EditPostFormSchema = z.object({
  title: z.string(),
  shortTitle: z.string(),
  subTitle: z.string(),
  fieldTitles: z.array(z.string()),
  fieldContents: z.array(z.string()),
  fieldLists: z.array(z.string()),
  fieldSecondContents: z.array(z.string()),
  fieldImages: z.array(z.any()),
  fieldImagesPaths: z.array(z.string()),
  fieldLinks: z.array(z.string()),
  slug: z.string(),
  contentTitle: z.string(),
  content: z.string(),
  mainImage: z.any(),
  mainImagePath: z.string(),
  category: z.string(),
  tags: z.string(),
})

export async function editPost(formData: FormData) {
  // console.log(formData)
  const {
    title,
    shortTitle,
    subTitle,
    fieldTitles,
    fieldContents,
    fieldLists,
    fieldSecondContents,
    fieldImages,
    fieldImagesPaths,
    fieldLinks,
    slug,
    contentTitle,
    content,
    mainImage,
    mainImagePath,
    category,
    tags,
  } = EditPostFormSchema.parse({
    title: formData.get("title"),
    shortTitle: formData.get("shortTitle"),
    subTitle: formData.get("subTitle"),
    fieldTitles: formData.getAll("fieldTitle"),
    fieldContents: formData.getAll("fieldContent"),
    fieldLists: formData.getAll("fieldList"),
    fieldSecondContents: formData.getAll("fieldSecondContent"),
    fieldImages: formData.getAll("fieldImage"),
    fieldImagesPaths: formData.getAll("fieldImagePath"),
    fieldLinks: formData.getAll("fieldLink"),
    slug: formData.get("slug"),
    contentTitle: formData.get("contentTitle"),
    content: formData.get("content"),
    mainImage: formData.get("mainImage"),
    mainImagePath: formData.get("mainImagePath"),
    category: formData.get("category"),
    tags: formData.get("tags"),
  })

  const tagArr = tags.split(",")
  // // console.log(Array.isArray(tagArr))
  // // const tagArr = JSON.stringify(tags2)
  // // console.log(tagArr.split(","))
  let mainImageUrl = ""
  if (mainImage.size > 0) {
    mainImageUrl = await cloudinaryUrlExtractor(mainImage)
  } else {
    mainImageUrl = mainImagePath
  }

  //Mutate fields data
  const fields: Field[] = []
  for (let i = 0; i < fieldTitles.length; i++) {
    const title = fieldTitles[i]
    const content = fieldContents[i]
    const second_content = fieldSecondContents[i]

    const fieldEntry: Field = {
      title,
      content,
      second_content,
    }
    if (fieldImagesPaths[i]) {
      fieldEntry.image = fieldImagesPaths[i]
    }
    if (fieldImages[i].size > 0) {
      fieldEntry.image = await cloudinaryUrlExtractor(fieldImages[i])
    }
    if (fieldLinks[i]) {
      const links = fieldLinks[i]
        .split(",")
        .map((link) => ({ link: link, short_link: extractDomain(link) }))
      fieldEntry.links = links
    }
    if (fieldLists[i]) {
      const list = fieldLists[i].split(",")
      fieldEntry.list = list
    }

    fields.push(fieldEntry)
  }

  // //fetch logged in user id and name
  // const session = await auth()
  // const userData = await sql`SELECT id, name FROM users WHERE email = ${
  //   session && session.user?.email
  // };`

  // const { id, name } = userData.rows[0]
  // const date = new Date().toISOString().split("T")[0]

  // database Update
  try {
    await sql`UPDATE posts
    SET title = ${title}, short_title = ${shortTitle}, sub_title = ${subTitle}, slug = ${slug}, content_title = ${contentTitle}, content = ${content}, main_image = ${mainImageUrl}, fields = ${JSON.stringify(
      fields
    )}, category = ${category}, tags = ${JSON.stringify(tagArr)}
    WHERE slug = ${slug}`
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Post.",
    }
  }
  // blog path try
  revalidatePath(`/blog/${slug}`)
  redirect(`/blog/${slug}`)
}

export async function deletePost(slug: string) {
  try {
    await sql`DELETE FROM posts WHERE slug = ${slug}`
  } catch (error) {
    return { message: "Database Error: Failed to Delete Post" }
  }
  revalidatePath("/dashboard/posts")
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

// CREATE PROJECT

const CreateProjectSchema = z.object({
  title: z.string(),
  shortTitle: z.string(),
  subTitle: z.string(),
  fieldTitles: z.array(z.string()),
  fieldContents: z.array(z.string()),
  fieldLists: z.array(z.string()),
  fieldSecondContents: z.array(z.string()),
  fieldImages: z.array(z.any()),
  fieldLinks: z.array(z.string()),
  slug: z.string(),
  contentTitle: z.string(),
  content: z.string(),
  mainImage: z.any(),
  mainIcon: z.string(),
  stack: z.string(),
  iconsStack: z.string(),
  liveDemo: z.string(),
  repo: z.string(),
  category: z.string(),
  tags: z.string(),
})

// const CreatePost = FormSchema

export async function createProject(formData: FormData) {
  // console.log(formData)
  const {
    title,
    shortTitle,
    subTitle,
    fieldTitles,
    fieldContents,
    fieldLists,
    fieldSecondContents,
    fieldImages,
    fieldLinks,
    slug,
    contentTitle,
    content,
    mainImage,
    mainIcon,
    stack,
    iconsStack,
    liveDemo,
    repo,
    category,
    tags,
  } = CreateProjectSchema.parse({
    title: formData.get("title"),
    shortTitle: formData.get("shortTitle"),
    subTitle: formData.get("subTitle"),
    fieldTitles: formData.getAll("fieldTitle"),
    fieldContents: formData.getAll("fieldContent"),
    fieldLists: formData.getAll("fieldList"),
    fieldSecondContents: formData.getAll("fieldSecondContent"),
    fieldImages: formData.getAll("fieldImage"),
    fieldLinks: formData.getAll("fieldLink"),
    slug: formData.get("slug"),
    contentTitle: formData.get("contentTitle"),
    content: formData.get("content"),
    mainImage: formData.get("mainImage"),
    mainIcon: formData.get("mainIcon"),
    stack: formData.get("stack"),
    iconsStack: formData.get("iconsStack"),
    liveDemo: formData.get("liveDemo"),
    repo: formData.get("repo"),
    category: formData.get("category"),
    tags: formData.get("tags"),
  })

  const tagArr = tags.split(",")
  // console.log('1', fieldLists)
  // console.log(Array.isArray(tagArr))
  // const tagArr = JSON.stringify(tags2)

  const mainImageUrl = await cloudinaryUrlExtractor(mainImage)
  // console.log(mainImageUrl)
  //Mutate fields data
  const fields: Field[] = []
  for (let i = 0; i < fieldTitles.length; i++) {
    const title = fieldTitles[i]
    const content = fieldContents[i]
    const second_content = fieldSecondContents[i]

    const fieldEntry: Field = {
      title,
      content,
      second_content,
    }
    if (fieldImages[i].size > 0) {
      const image = await cloudinaryUrlExtractor(fieldImages[i])
      fieldEntry.image = image
    }

    if (fieldLinks[i]) {
      const links = fieldLinks[i]
        .split(",")
        .map((link) => ({ link: link, short_link: extractDomain(link) }))
      fieldEntry.links = links
    }

    if (fieldLists[i]) {
      const list = fieldLists[i].split(",")
      fieldEntry.list = list
    }
    fields.push(fieldEntry)
    // console.log(fieldEntry)
  }

  //fetch logged in user id and name
  const session = await auth()
  const userData = await sql`SELECT id, name FROM users WHERE email = ${
    session && session.user?.email
  };`

  const { id, name } = userData.rows[0]
  const date = new Date().toISOString().split("T")[0]

  // database Insert

  const stackArr = stack.split(",")
  const iconsStackArr = iconsStack.split(",")

  // console.log(iconsStackArr)

  try {
    await sql`INSERT INTO projects (author_id, author_name, title, short_title, sub_title, slug, content_title, content, main_image, main_icon, stack, icons_stack, live_demo, repo, fields, category, tags, date)
    VALUES (${id}, ${name},  ${title}, ${shortTitle}, ${subTitle}, ${slug}, ${contentTitle}, ${content}, ${mainImageUrl}, ${mainIcon}, ${JSON.stringify(
      stackArr
    )}, ${JSON.stringify(
      iconsStackArr
    )}, ${liveDemo}, ${repo}, ${JSON.stringify(
      fields
    )}, ${category}, ${JSON.stringify(tagArr)}, ${date})`
  } catch (error) {
    console.log(error)
    return {
      message: "Database Error: Failed to Create Project.",
    }
  }
  revalidatePath("/projects")
  redirect("/projects")
}

export async function deleteProject(slug: string) {
  try {
    await sql`DELETE FROM projects WHERE slug = ${slug}`
  } catch (error) {
    console.log(error)
    return { message: "Database Error: Failed to Delete Project" }
  }
  revalidatePath("/dashboard/posts")
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
