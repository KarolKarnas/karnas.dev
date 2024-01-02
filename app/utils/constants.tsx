import Image from "next/image"
import { SideNavItem } from "./types"
import { nodeJs, folderOpen, html, htmlAlt, react, git } from "./icons"

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "index.html",
    path: "/",
    icon: html,
    iconAlt: htmlAlt,
  },
  {
    title: "home.tsx",
    path: "/home",
    icon: react,
  },
  {
    title: "skills.json",
    path: "/skills",
    icon: nodeJs,
  },
  {
    title: "projects",
    path: "/projects",
    icon: folderOpen,
    submenu: true,
    subMenuItems: [
      // { title: "All", path: "/projects" },
      {
        title: "ilustrografia.com",
        path: "/projects/ilustrografia",
        icon: react,
      },
      {
        title: "karnas.dev",
        path: "/projects/karnas",
        icon: react,
      },
    ],
  },
  {
    title: "contact.tsx",
    path: "/contact",
    icon: react,
  },

  {
    title: "about.json",
    path: "/about",
    icon: nodeJs,
  },
  {
    title: ".gitignore",
    path: "/gitignore",
    icon: git,
  },
]
