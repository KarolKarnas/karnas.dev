import { SideNavItem, SocialItem } from "./types"
import {
  nodeJs,
  folderOpen,
  react,
  vsc,
  karnas,
  twitter,
  gitHub,
  linkedIn,
  gear,
  svg,
  karnasAlt,
  sass,
  typeScript,
  typeScriptAlt,
} from "./icons"
import { IconName } from "../hooks/useIcon"

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "home",
    path: "/",
    icon: karnas.icon,
    iconAlt: karnasAlt.icon,
  },
  // {
  //   title: "experience.json",
  //   path: "/experience",
  //   icon: nodeJs,
  // },
  {
    title: "skills.svg",
    path: "/skills",
    icon: svg.icon,
  },
  {
    title: "about.json",
    path: "/about",
    icon: nodeJs.icon,
  },
  {
    title: "projects",
    path: "/projects",
    icon: folderOpen.icon,
    submenu: true,
    subMenuItems: [],
  },
  {
    title: "blog",
    path: "/blog",
    icon: folderOpen.icon,
    submenu: true,
    subMenuItems: [
      {
        title: "odinFoundationCourse.ts",
        path: "/blog/odin-foundation-course",
        icon: typeScriptAlt.icon,
      },
      {
        title: "fullStackOpenCore.ts",
        path: "/blog/full-stack-open-core",
        icon: typeScriptAlt.icon,
      },
      {
        title: "pentesterCourse.ts",
        path: "/blog/pentester-course",
        icon: typeScriptAlt.icon,
      },
    ],
  },
  {
    title: "contact.sass",
    path: "/contact",
    icon: sass.icon,
  },

  // {
  //   title: ".gitignore",
  //   path: "/gitignore",
  //   icon: git,
  // },
  // {
  //   title: "login",
  //   path: "/login",
  //   icon: gear,
  // },
  // {
  //   title: "dashboard",
  //   path: "/dashboard",
  //   icon: gear.icon,
  // },
]

export const SOCIAL_ITEMS: SocialItem[] = [
  {
    link: "https://github.com/KarolKarnas",
    short_link: "github.com/KarolKarnas",
    icon: gitHub.icon,
  },
  {
    link: "https://www.linkedin.com/in/KarolKarnas/",
    short_link: "linkedin.com/in/KarolKarnas",
    icon: linkedIn.icon,
  },
  {
    link: "https://twitter.com/Karol_Karnas",
    short_link: "twitter.com/Karol_Karnas",
    icon: twitter.icon,
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
  "typeScript",
  "javaScript",
  "react",
  "redux",
  "nextJs",
  // "html",
  "nodeJs",
  "express",
  "postgres",
  "sql",
  "mongo",
  "mongoose",
  "sass",
  "cssModules",
  "tailwind",
  "cypress",
  "jest",
  // "playWright",
  "postman",
  "rtl",
  "linux",
  "git",
  "gitHub",
  "jira",
  "confluence",
  "figma",
]

export const PROGRAMMING: IconName[] = ["typeScript", "javaScript"]
export const FRONTEND: IconName[] = [
  "react",
  "redux",
  "nextJs",
  "sass",
  "cssModules",
  "tailwind",
]
export const BACKEND: IconName[] = [
  "nodeJs",
  "express",
  "postgres",
  "sql",
  "mongo",
  "mongoose",
]
export const TEST: IconName[] = ["jest", "cypress", "rtl", "postman"]
export const DEV_OPS: IconName[] = [
  "linux",
  "git",
  "gitHub",
  "jira",
  "confluence",
  "figma",
]
