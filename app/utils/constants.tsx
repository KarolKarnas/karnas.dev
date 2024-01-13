import Image from "next/image"
import { SideNavItem, SocialItem } from "./types"
import { nodeJs, folderOpen, html, htmlAlt, react, git, vsc, twitter, gitHub, linkedIn, nextJs} from "./icons"

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: vsc,
    // iconAlt: htmlAlt,
  },
  // {
  //   title: "home.tsx",
  //   path: "/home",
  //   icon: react,
  // },
  {
    title: "experience.json",
    path: "/experience",
    icon: nodeJs,
  },
  {
    title: "skills.json",
    path: "/skills",
    icon: nodeJs,
  },
  // {
  //   title: "projects",
  //   path: "/projects",
  //   icon: folderOpen,
  //   submenu: true,
  //   subMenuItems: [
  //     // { title: "All", path: "/projects" },
  //     {
  //       title: "ilustrografia.com",
  //       path: "/projects/ilustrografia",
  //       icon: react,
  //     },
  //     {
  //       title: "karnas.dev",
  //       path: "/projects/karnas",
  //       icon: nextJs,
  //     },
  //   ],
  // },
  {
    title: "projects",
    path: "/projects",
    icon: folderOpen,
    submenu: true,
    subMenuItems: [

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
    link: "https://github.com/KarolKarnas",
    short_link: "github.com/KarolKarnas",
    icon: gitHub,
  },
  {
    link: "https://www.linkedin.com/in/KarolKarnas/",
    short_link: "linkedin.com/in/KarolKarnas",
    icon: linkedIn,
  },
  {
    link: "https://twitter.com/Karol_Karnas",
    short_link: "twitter.com/Karol_Karnas",
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
