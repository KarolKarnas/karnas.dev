import Image from "next/image"
import { SideNavItem, SocialItem } from "./types"
import {
  nodeJs,
  folderOpen,
  html,
  htmlAlt,
  react,
  git,
  vsc,
  twitter,
  gitHub,
  linkedIn,
  nextJs,
  gear
} from "./icons"
import { IconName } from "../hooks/useIcon"

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: vsc,
  },
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
  {
    title: "projects",
    path: "/projects",
    icon: folderOpen,
    submenu: true,
    subMenuItems: [],
  },
  {
    title: "blog",
    path: "/blog",
    icon: folderOpen,
    submenu: true,
    subMenuItems: [],
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
  {
    title: "dashboard",
    path: "/dashboard",
    icon: gear,
    submenu: false,

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

export const MY_SKILLS: IconName[] = [
  "react",
  "redux",
  "nextJs",
  "typeScript",
  "javaScript",
  // "html",
  "nodeJs",
  "express",
  "mongo",
  "postgres",
  "sass",
  "cssModules",
  "tailwind",
  "cypress",
  "jest",
  "playWright",
  "postman",
  "rtl",
  "linux",
  "git",
  "gitHub",
  "jira",
  "confluence",
  "figma",
]
