import Image from "next/image"
import { SideNavItem, SocialItem } from "./types"
import { nodeJs, folderOpen, html, htmlAlt, react, git, vsc, twitter, gitHub, linkedIn, nextJs} from "./icons"

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
        icon: nextJs,
      },
    ],
  },
  {
    title: "blog",
    path: "/blog",
    icon: folderOpen,
    submenu: true,
    subMenuItems: [

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
    description: "Github Page",
    shortUrl: "github.com/KarolKarnas",
    icon: gitHub,
  },
  {
    title: "LinkedIn",
    path: "https://www.linkedin.com/in/KarolKarnas/",
    description: "LinkedIn Profile",
    shortUrl: "linkedin.com/in/KarolKarnas",
    icon: linkedIn,
  },
  {
    title: "Twitter",
    path: "https://twitter.com/Karol_Karnas",
    description: "Twitter programming news",
    shortUrl: "twitter.com/Karol_Karnas",
    icon: twitter,
  },
  // {
  //   title: "Instagram",
  //   path: "https://isntagram.com/karol.karnas",
  //   icon: react,
  // },
  // {
  //   title: "Facebook",
  //   path: "https://facebook.com/lensmanpl",
  //   icon: react,
  // }
]
