import { JSX } from "react"
import { IconName } from "../hooks/useIcon"

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

export type Field = {
  title?: string
  content?: string
  list?: string[]
  second_content?: string
  image?: string
  links?: SocialItem[]
}

export type Post = {
  author_name: string
  title: string
  sub_title: string
  slug: string
  content_title: string
  content: string
  main_image: string
  fields: Field[]
  category: string
  tags: string[]
  date: string
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

export type Project = {
  author_name: string
  title: string
  sub_title: string
  slug: string
  content_title: string
  content: string
  main_image: string
  main_icon: string
  //
  stack: string[]
  icons_stack: IconName[]
  // json_stack: FakeJson[]
  live_demo: string
  repo: string
  //
  fields: Field[]
  category: string
  tags: string[]
  date: string
}

export type ProjectCardType = {
  title: string
  sub_title: string
  slug: string
  content_title: string
  content: string
  main_image: string
  stack: string[]
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
