import { JSX } from "react"
import { z } from "zod"

import { IconName } from "../hooks/useIcon"
import {
  FieldSchema,
  PostFrontmatterSchema,
  ProjectFrontmatterSchema,
} from "./schemas"

export type SideNavItem = {
  title: string
  path: string
  icon?: JSX.Element
  iconAlt?: JSX.Element
  submenu?: boolean
  subMenuItems?: SideNavItem[]
  gitignore?: boolean
}
export type SocialItem = {
  link: string
  short_link?: string
  icon?: JSX.Element
}

export type MenuItemWithSubMenuProps = {
  item: SideNavItem
  toggleOpen: () => void
}

export type FakeJson = {
  title: string
  value: string | FakeJson[]
}

export type User = {
  id: string
  name: string
  email: string
  password: string
}

export type Field = z.infer<typeof FieldSchema>

export type Post = z.infer<typeof PostFrontmatterSchema> & {
  slug: string
  content: string
}

export type BlogCardType = {
  title: string
  sub_title: string
  slug: string
  content_title: string
  content: string
  main_image: string
  path: string
  date: string
}

export type Project = Omit<
  z.infer<typeof ProjectFrontmatterSchema>,
  "icons_stack"
> & {
  slug: string
  content: string
  icons_stack: IconName[]
}

export type ProjectCardType = {
  title: string
  sub_title: string
  slug: string
  content_title: string
  content: string
  main_image: string
  stack?: string[]
  icons_stack: IconName[]
  live_demo: string
  repo: string
  path: string
  date: string
}

export type IconText = {
  icon: JSX.Element
  text: string
}
