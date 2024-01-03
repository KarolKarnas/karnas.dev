import Image from "next/image"
import { SideNavItem, SocialItem } from "./types"
import { nodeJs, folderOpen, html, htmlAlt, react, git,vsc } from "./icons"

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Welcome",
    path: "/",
    icon: vsc,
    // iconAlt: htmlAlt,
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

export const SOCIAL_ITEMS: SocialItem[] = [
  {
    title: "Github",
    path: "https://github.com/KarolKarnas",
    icon: vsc,
  },
  {
    title: "LinkedIn",
    path: "https://www.linkedin.com/in/karolkarnas/",
    icon: react,
  },
  {
    title: "Twitter",
    path: "https://twitter.com/Karol_Karnas",
    icon: react,
  },
  {
    title: "Instagram",
    path: "https://isntagram.com/karol.karnas",
    icon: react,
  },
  {
    title: "Facebook",
    path: "https://facebook.com/lensmanpl",
    icon: react,
  }
]
