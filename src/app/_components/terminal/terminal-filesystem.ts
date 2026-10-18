import {
  BLOG_NAV,
  PROFESSIONAL_PROJECTS_NAV,
  SIDE_PROJECTS_NAV,
} from "@/utils/generated-nav"
import type { IconName } from "@/utils/icon-utils"
import type { ContentResponse } from "@/app/api/content/route"
import { THEMES } from "../appearance/appearance-config"

export const TERMINAL_HOME = "/home/visitor/karnas.dev"

export type TerminalFile = {
  name: string
  path: string
  href: string
  kind: "directory" | "file"
  title: string
  icon: IconName
  slug?: string
  date?: string
}

export type DirectoryListing = {
  type: "directory"
  path: string
  entries: TerminalFile[]
  detailed: boolean
}

const folders = [
  { name: "blog", title: "Journal", entries: BLOG_NAV },
  {
    name: "professional-projects",
    title: "Client work",
    entries: PROFESSIONAL_PROJECTS_NAV,
  },
  {
    name: "side-projects",
    title: "Independent projects",
    entries: SIDE_PROJECTS_NAV,
  },
]

const rootFiles: TerminalFile[] = [
  {
    name: "home",
    path: "/home",
    href: "/",
    kind: "file",
    title: "Start here",
    icon: "karnas",
  },
  {
    name: "about.json",
    path: "/about.json",
    href: "/about",
    kind: "file",
    title: "The person behind the code",
    icon: "nodeJs",
  },
  {
    name: "skills.svg",
    path: "/skills.svg",
    href: "/skills",
    kind: "file",
    title: "Tools and engineering skills",
    icon: "svg",
  },
  {
    name: "contact.sass",
    path: "/contact.sass",
    href: "/contact",
    kind: "file",
    title: "Let’s build something",
    icon: "sass",
  },
]

const root: TerminalFile = {
  name: "~",
  path: "/",
  href: "/",
  kind: "directory",
  title: "karnas.dev",
  icon: "folderOpen",
}

const entries: TerminalFile[] = [
  ...folders.map((folder): TerminalFile => ({
    name: folder.name,
    path: `/${folder.name}`,
    href: `/${folder.name}`,
    kind: "directory",
    title: folder.title,
    icon: "folderOpen",
  })),
  ...rootFiles,
  ...folders.flatMap((folder) =>
    folder.entries.map((entry): TerminalFile => ({
      name: entry.title,
      path: `/${folder.name}/${entry.title}`,
      href: `/${folder.name}/${entry.slug}`,
      kind: "file",
      title: entry.title,
      icon: entry.iconName,
      slug: entry.slug,
    }))
  ),
]

export function resolvePath(target: string, currentPath: string): string {
  let input = target.split(/[?#]/, 1)[0]
  if (input === TERMINAL_HOME || input.startsWith(`${TERMINAL_HOME}/`)) {
    input = input.slice(TERMINAL_HOME.length) || "/"
  }
  if (input === "~" || input.startsWith("~/")) input = `/${input.slice(2)}`
  const segments = (
    input.startsWith("/") ? input : `${currentPath}/${input}`
  ).split("/")
  const result: string[] = []
  for (const segment of segments) {
    if (!segment || segment === ".") continue
    if (segment === "..") result.pop()
    else result.push(segment)
  }
  return `/${result.join("/")}`
}

export function getDirectoryForRoute(path: string): string {
  return folders.find(
    (folder) =>
      path === `/${folder.name}` || path.startsWith(`/${folder.name}/`)
  )
    ? `/${path.split("/")[1]}`
    : "/"
}

export function formatPromptPath(path: string): string {
  return path === "/" ? "~" : `~${path}`
}

export function getDirectoryEntries(path: string): TerminalFile[] | undefined {
  if (path === "/")
    return entries.filter((entry) => !entry.path.slice(1).includes("/"))
  if (!folders.some((folder) => path === `/${folder.name}`)) return undefined
  return entries.filter((entry) => entry.path.startsWith(`${path}/`))
}

export function resolveFile(
  target: string,
  currentPath: string
): TerminalFile | undefined {
  const path = resolvePath(target, currentPath)
  if (path === "/") return root
  const local = entries.find(
    (entry) => entry.path === path || entry.href === path
  )
  if (local) return local
  // Keep short slugs usable from anywhere, as in the original terminal.
  if (target.includes("/")) return undefined
  const matches = entries.filter(
    (entry) =>
      entry.slug === target ||
      entry.name === target ||
      entry.href === `/${target}`
  )
  return matches.length === 1 ? matches[0] : undefined
}

export function getFileMetadata(file: TerminalFile, content: ContentResponse) {
  const collection = file.path.startsWith("/blog/")
    ? content.posts
    : file.path.startsWith("/side-projects/")
      ? content.projects
      : content.professional
  return file.slug
    ? collection.find((item) => item.slug === file.slug)
    : undefined
}

export function completeCommand(
  input: string,
  currentPath: string,
  commands: string[]
): string[] {
  if (!input.includes(" "))
    return commands
      .filter((command) => command.startsWith(input.toLowerCase()))
      .sort()
  const match = input.match(/^(\S+)\s+(.*)$/)
  if (match?.[1] === "theme")
    return THEMES.filter((theme) => theme.id.startsWith(match[2])).map(
      (theme) => `theme ${theme.id}`
    )
  if (!match || !["cd", "ls", "open", "cat", "head", "tree"].includes(match[1]))
    return []
  const command = match[1]
  const argumentsText = match[2]
  const argumentStart = argumentsText.lastIndexOf(" ") + 1
  const argument = argumentsText.slice(argumentStart)
  if (argument.startsWith("-")) return []
  const slash = argument.lastIndexOf("/")
  const prefix = slash < 0 ? "" : argument.slice(0, slash + 1)
  const fragment = argument.slice(slash + 1)
  const directory = resolvePath(prefix || ".", currentPath)
  const candidates = [...(getDirectoryEntries(directory) ?? [])]
  const results = candidates
    .filter(
      (entry) => !["cd", "tree"].includes(command) || entry.kind === "directory"
    )
    .filter((entry) => entry.name.startsWith(fragment))
    .map(
      (entry) =>
        `${prefix}${entry.name}${entry.kind === "directory" ? "/" : ""}`
    )
  if (!prefix && fragment.startsWith(".")) {
    for (const relative of ["./", "../"])
      if (relative.startsWith(fragment)) results.push(relative)
  }
  const commandPrefix = `${command} ${argumentsText.slice(0, argumentStart)}`
  return [...new Set(results)].sort().map((result) => commandPrefix + result)
}
