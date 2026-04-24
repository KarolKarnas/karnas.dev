import { SideNavItem, SocialItem } from "./types"
import {
  nodeJs,
  folderOpen,
  react,
  karnas,
  twitter,
  gitHub,
  linkedIn,
  svg,
  karnasAlt,
  sass,
  typeScriptAlt,
  nextJs,
  nestJs,
  django,
  python,
  claude,
} from "@/icons"
import { IconName } from "./icon-utils"

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
    subMenuItems: [
      {
        title: "dataBidMachine.py",
        path: "/professional-projects/data-bid-machine",
        icon: python.icon,
      },
      {
        title: "dms.py",
        path: "/professional-projects/dms-housing-authority",
        icon: python.icon,
      },
    ],
  },
  {
    title: "side projects",
    path: "/side-projects",
    icon: folderOpen.icon,
    submenu: true,
    subMenuItems: [
      {
        title: "brain",
        path: "/side-projects/brain-karnas-dev",
        icon: python.icon,
      },
      {
        title: "cardpiper.com",
        path: "/side-projects/card-piper-com",
        icon: nestJs.icon,
      },
      {
        title: "ilustrografia.com",
        path: "/side-projects/ilustrografia-com",
        icon: react.icon,
      },
      {
        title: "karnas.dev",
        path: "/side-projects/karnas-dev",
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
      {
        title: "claudeCodeInAction.ai",
        path: "/blog/claude-code-in-action",
        icon: claude.icon,
      },
      {
        title: "codingWithAiTraversy.ai",
        path: "/blog/coding-with-ai-traversy",
        icon: claude.icon,
      },
      {
        title: "exercism.py",
        path: "/blog/exercism",
        icon: python.icon,
      },
    ],
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
