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
  nextJs,
  nestJs,
  django,
} from "./icons"
import { IconName } from "../hooks/useIcon"

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "home",
    path: "/",
    icon: karnas.icon,
    iconAlt: karnasAlt.icon,
  },
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
    subMenuItems: [
      {
        title: "brain",
        path: "/projects/brain-karnas-dev",
        icon: django.icon,
      },
      {
        title: "cardpiper.com",
        path: "/projects/card-piper-com",
        icon: nestJs.icon,
      },
      {
        title: "ilustrografia.com",
        path: "/projects/ilustrografia-com",
        icon: react.icon,
      },
      {
        title: "karnas.dev",
        path: "/projects/karnas-dev",
        icon: nextJs.icon,
      },
    ],
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
      {
        title: "fullStackSupplementary.ts",
        path: "/blog/full-stack-open-supplementary",
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

export const PROGRAMMING: IconName[] = ["python", "typeScript", "javaScript"]

export const FRONTEND: IconName[] = [
  "react",
  "redux",
  "nextJs",
  "sass",
  // "cssModules",
  "tailwind",
]

export const BACKEND: IconName[] = [
  "django",
  "nodeJs",
  "express",
  "nestJs",
  "prisma",
  "postgres",
  "sql",
]

export const TEST: IconName[] = [
  "pytest",
  "jest",
  "cypress",
  "rtl",
  "postman",
  "insomnia",
]

export const WORKFLOW_TOOLS: IconName[] = [
  "linux",
  "vsc",
  "git",
  "gitHub",
  "jira",
  "confluence",
  // "figma",
]

export const MY_SKILLS: IconName[] = [
  ...PROGRAMMING,
  ...FRONTEND,
  ...BACKEND,
  ...TEST,
  ...WORKFLOW_TOOLS,
]

export const CORE_SKILLS: IconName[] = [
  "python",
  "typeScript",
  "react",
  "nextJs",
  "django",
  "nestJs",
]

export const QUOTATION =
  '"I love seeing a well-structured database seamlessly mirrored in a beautiful and functional UI"'
