import type { Command, CommandContext } from "./index"
import { PROFILE } from "@/utils/profile"
import {
  getDirectoryEntries,
  getFileMetadata,
  resolveFile,
} from "../terminal-filesystem"
import { infoCommands } from "./info"

function readFile(target: string, context: CommandContext): string | undefined {
  const file = resolveFile(target, context.currentPath)
  if (!file) return undefined
  if (file.kind === "directory")
    return `${target}: Is a directory. Use 'ls ${target}'.`
  if (file.href === "/about") {
    return JSON.stringify(
      { ...PROFILE, location: "Poland", web: "https://www.karnas.dev" },
      null,
      2
    )
  }
  if (file.href === "/skills") {
    const output = infoCommands
      .find((command) => command.name === "skills")
      ?.execute([], context)
    return typeof output === "string" ? output : undefined
  }
  if (file.href === "/contact") {
    return "Karol Karnas\nkarol.karnas@gmail.com\n+48 784 034 778\nhttps://www.linkedin.com/in/KarolKarnas/"
  }
  if (file.href === "/")
    return `${PROFILE.name}\n${PROFILE.role}\n${PROFILE.tagline}`
  const content = getFileMetadata(file, context)
  if (!content) return undefined
  return [
    content.title,
    content.date.slice(0, 10),
    "tags" in content ? content.tags.join(" · ") : content.stack?.join(" · "),
    "",
    content.content.trim(),
    "",
    `Read in the editor: open ${file.path}`,
  ]
    .filter((line) => line !== undefined)
    .join("\n")
}

const cat: Command = {
  name: "cat",
  description: "Read a file or article summary",
  usage: "cat <file>",
  execute: (args, context) => {
    if (args.length !== 1) return "Usage: cat <file>"
    return readFile(args[0], context) ?? `cat: ${args[0]}: No such file`
  },
}

const head: Command = {
  name: "head",
  description: "Preview the first lines of a file",
  usage: "head [-n lines] <file>",
  execute: (args, context) => {
    let lines = 5
    let target = args[0]
    if (args[0] === "-n" && args.length === 3) {
      lines = Number(args[1])
      target = args[2]
    } else if (args.length !== 1) return "Usage: head [-n lines] <file>"
    if (!Number.isInteger(lines) || lines < 1 || lines > 100)
      return "head: line count must be between 1 and 100"
    const content = readFile(target, context)
    return (
      content?.split("\n").slice(0, lines).join("\n") ??
      `head: ${target}: No such file`
    )
  },
}

const find: Command = {
  name: "find",
  description: "Search article and project names, tags, and summaries",
  usage: "find <keyword>",
  execute: (args, context) => {
    if (args.length === 0) return "Usage: find <keyword>"
    const keyword = args.join(" ").toLowerCase()
    const results: string[] = []
    for (const directory of [
      "/blog",
      "/side-projects",
      "/professional-projects",
    ]) {
      for (const file of getDirectoryEntries(directory) ?? []) {
        const content = getFileMetadata(file, context)
        if (!content) continue
        const text = [
          file.name,
          content.title,
          content.sub_title,
          content.content,
          "tags" in content ? content.tags.join(" ") : content.stack?.join(" "),
        ]
          .join(" ")
          .toLowerCase()
        if (text.includes(keyword))
          results.push(`  ${file.path}\n    ${content.title}`)
      }
    }
    return results.length
      ? `${results.length} match${results.length === 1 ? "" : "es"}\n\n${results.join("\n\n")}`
      : `No results found for '${args.join(" ")}'`
  },
}

export const contentCommands: Command[] = [cat, head, find]
