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
  title: string
  path: string
  description: string
  shortUrl: string
  icon?: JSX.Element
}

export type MenuItemWithSubMenuProps = {
  item: SideNavItem
  toggleOpen: () => void
}

// export type Info = {
//   [key: string]: string | object
// }

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
  image?: string
  link?: string
}

export type Post = {
  id: string
  author_id: string
  title: string
  short_title: string
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

export type BlogCard = {
  title: string
  short_title: string
  sub_title: string
  slug: string
  content_title: string
  content: string
  main_image: string
  path: string
  date: string
  // icon: JSX.Element
}


export type Project = {
  id: string
  author_id: string
  title: string
  short_title: string
  sub_title: string
  slug: string
  content_title: string
  content: string
  main_image: string
  main_icon: string
  //
  stack: string[]
  live_demo: string
  repo: string
  //
  fields: Field[]
  category: string
  tags: string[]
  date: string
}


export type ProjectCard = {
  title: string
  short_title: string
  sub_title: string
  slug: string
  content_title: string
  content: string
  main_image: string
  stack: string[]


  path: string
  date: string
  // icon: JSX.Element
}
