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

export type Article = {
  id: string
  author_id: string
  title: string
  content: string
  date: string
}
