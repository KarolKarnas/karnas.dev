export type SideNavItem = {
  title: string
  path: string
  icon?: JSX.Element
  iconAlt?: JSX.Element
  submenu?: boolean
  subMenuItems?: SideNavItem[]
  gitignore?: boolean
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
