import { Command } from "./index"

const SECTIONS = [
  "blog",
  "side-projects",
  "professional-projects",
  "about",
  "skills",
  "contact",
]

const SLUG_SECTIONS = ["blog", "side-projects", "professional-projects"]

const ls: Command = {
  name: "ls",
  description: "List available sections or content",
  usage: "ls [section]",
  execute: (args, context) => {
    if (args.length === 0) {
      return SECTIONS.map((s) => `  ${s}/`).join("\n")
    }

    const section = args[0].toLowerCase().replace(/\/$/, "")

    if (section === "blog") {
      if (context.posts.length === 0) return "Loading content..."
      return context.posts
        .map((p) => `  ${p.date}  ${p.slug}`)
        .join("\n")
    }

    if (section === "side-projects") {
      if (context.projects.length === 0) return "Loading content..."
      return context.projects
        .map((p) => `  ${p.slug}  [${p.stack?.join(", ") ?? ""}]`)
        .join("\n")
    }

    if (section === "professional-projects") {
      if (context.professional.length === 0) return "Loading content..."
      return context.professional
        .map((p) => `  ${p.slug}  [${p.stack?.join(", ") ?? ""}]`)
        .join("\n")
    }

    return `ls: cannot access '${args[0]}': No such directory`
  },
}

const cd: Command = {
  name: "cd",
  description: "Navigate to a page",
  usage: "cd <section>",
  execute: (args, context) => {
    if (args.length === 0 || args[0] === "~") {
      context.navigate("/")
      return ""
    }

    const target = args[0].toLowerCase().replace(/\/$/, "")

    if (target === ".." || target === "/") {
      context.navigate("/")
      return ""
    }

    if (SECTIONS.includes(target)) {
      context.navigate(`/${target}`)
      return ""
    }

    // Check if we're already inside a slug-bearing section
    const currentSegments = context.currentPath.split("/").filter(Boolean)
    if (SLUG_SECTIONS.includes(currentSegments[0])) {
      context.navigate(`/${currentSegments[0]}/${target}`)
      return ""
    }

    // Try as a direct slug under blog / side-projects / professional-projects
    const post = context.posts.find((p) => p.slug === target)
    if (post) {
      context.navigate(`/blog/${target}`)
      return ""
    }

    const project = context.projects.find((p) => p.slug === target)
    if (project) {
      context.navigate(`/side-projects/${target}`)
      return ""
    }

    const pro = context.professional.find((p) => p.slug === target)
    if (pro) {
      context.navigate(`/professional-projects/${target}`)
      return ""
    }

    return `cd: no such directory: ${args[0]}`
  },
}

const pwd: Command = {
  name: "pwd",
  description: "Show current page path",
  usage: "pwd",
  execute: (_args, context) => {
    return `/home/visitor/karnas.dev${context.currentPath === "/" ? "" : context.currentPath}`
  },
}

export const navigationCommands: Command[] = [ls, cd, pwd]
