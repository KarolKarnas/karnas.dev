import { z } from "zod"

const FieldLinkSchema = z.object({
  link: z.string(),
  short_link: z.string().optional(),
})

const FieldSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  second_content: z.string().optional(),
  list: z.array(z.string()).nullable().optional(),
  image: z.string().optional(),
  links: z.array(FieldLinkSchema).nullable().optional(),
})

const PostFrontmatterSchema = z.object({
  author_name: z.string(),
  title: z.string(),
  sub_title: z.string(),
  content_title: z.string(),
  main_image: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  date: z.string(),
  fields: z.array(FieldSchema),
})

const ProjectFrontmatterSchema = PostFrontmatterSchema.extend({
  main_icon: z.string(),
  stack: z.array(z.string()).optional(),
  icons_stack: z.array(z.string()),
  live_demo: z.string().optional().default(""),
  repo: z.string().optional().default(""),
})

export {
  FieldLinkSchema,
  FieldSchema,
  PostFrontmatterSchema,
  ProjectFrontmatterSchema,
}
