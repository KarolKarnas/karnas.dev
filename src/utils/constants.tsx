import { SideNavItem, SocialItem } from "./types"
import {
  nodeJs,
  folderOpen,
  karnas,
  twitter,
  gitHub,
  linkedIn,
  svg,
  karnasAlt,
  sass,
} from "@/icons"
import * as allIcons from "@/icons"
import { IconName } from "./icon-utils"
import {
  BLOG_NAV,
  PROFESSIONAL_PROJECTS_NAV,
  SIDE_PROJECTS_NAV,
  NavEntry,
} from "./generated-nav"

const toSubMenu = (entries: NavEntry[], routePrefix: string) =>
  entries.map((entry) => ({
    title: entry.title,
    path: `${routePrefix}/${entry.slug}`,
    icon: allIcons[entry.iconName].icon,
  }))

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
    title: "professional projects",
    path: "/professional-projects",
    icon: folderOpen.icon,
    submenu: true,
    subMenuItems: toSubMenu(
      PROFESSIONAL_PROJECTS_NAV,
      "/professional-projects"
    ),
  },
  {
    title: "side projects",
    path: "/side-projects",
    icon: folderOpen.icon,
    submenu: true,
    subMenuItems: toSubMenu(SIDE_PROJECTS_NAV, "/side-projects"),
  },
  {
    title: "blog",
    path: "/blog",
    icon: folderOpen.icon,
    submenu: true,
    subMenuItems: toSubMenu(BLOG_NAV, "/blog"),
  },
  {
    title: "contact.sass",
    path: "/contact",
    icon: sass.icon,
  },
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
]

export const PROGRAMMING: IconName[] = ["python", "typeScript", "javaScript"]

export const BACKEND: IconName[] = [
  "django",
  "fastapi",
  "celery",
  "pandas",
  "pytest",
  "jupyter",
  "openai",
]

export const CLOUD: IconName[] = [
  "aws",
  "azure",
  "docker",
  "postgres",
  "sql",
  "redis",
  "linux",
]

export const FRONTEND: IconName[] = ["react", "nextJs", "redux"]

export const TEST: IconName[] = ["pytest", "playWright", "postman", "insomnia"]

export const WORKFLOW_TOOLS: IconName[] = [
  "vsc",
  "git",
  "gitHub",
  "jira",
  "confluence",
  "claude",
]

export const AI_LLM_CONCEPTS: string[] = [
  "pgvector",
  "sentence-transformers",
  "RAG",
  "LLM API Integration",
  "Agentic Pipelines",
  "Vision-Language Models",
]

export const OBSERVABILITY: IconName[] = [
  "sentry",
  "datadog",
  "grafana",
  "langfuse",
  "flower",
]

export const MY_SKILLS: IconName[] = [
  "python",
  "django",
  "celery",
  "pandas",
  "pytest",
  "openai",
  "claude",
  "postgres",
  "sql",
  "redis",
  "aws",
  "azure",
  "docker",
  "linux",
  "git",
  "gitHub",
  "vsc",
]

export const CORE_SKILLS: IconName[] = [
  "python",
  "django",
  "celery",
  "postgres",
  "aws",
  "azure",
]

export const QUOTATION =
  '"I love the moment when a well-built backend quietly powers AI that actually works"'
