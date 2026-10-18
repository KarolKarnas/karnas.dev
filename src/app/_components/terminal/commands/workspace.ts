import type { Command } from "./index"
import { THEMES } from "../../appearance/appearance-config"
import {
  formatPromptPath,
  getDirectoryEntries,
  resolveFile,
} from "../terminal-filesystem"

const tree: Command = {
  name: "tree",
  description: "Show the portfolio directory tree",
  usage: "tree [directory]",
  execute: (args, context) => {
    if (args.length > 1) return "Usage: tree [directory]"
    const target = args[0] ?? "."
    const directory = resolveFile(target, context.currentPath)
    if (!directory) return `tree: no such directory: ${target}`
    if (directory.kind !== "directory")
      return `tree: ${target}: Not a directory`
    const lines = [formatPromptPath(directory.path)]
    let folders = 0
    let files = 0
    const walk = (path: string, prefix: string) => {
      const entries = getDirectoryEntries(path) ?? []
      entries.forEach((entry, index) => {
        const last = index === entries.length - 1
        const branch = last ? "└── " : "├── "
        lines.push(
          `${prefix}${branch}${entry.name}${entry.kind === "directory" ? "/" : ""}`
        )
        if (entry.kind === "directory") {
          folders++
          walk(entry.path, prefix + (last ? "    " : "│   "))
        } else files++
      })
    }
    walk(directory.path, "")
    return [...lines, "", `${folders} directories, ${files} files`].join("\n")
  },
}

const theme: Command = {
  name: "theme",
  description: "List or switch the workspace color theme",
  usage: "theme [monokai | dark-modern | light]",
  execute: (args, context) => {
    if (!args.length)
      return THEMES.map(
        (theme) =>
          `${theme.id === context.theme ? "→" : " "} ${theme.id.padEnd(13)} ${theme.description}`
      ).join("\n")
    const selected = THEMES.find(
      (theme) => theme.id === args.join("-").toLowerCase()
    )
    if (!selected)
      return "Unknown theme. Try: theme monokai, theme dark-modern, or theme light."
    context.setTheme(selected.id)
    return `${selected.name} applied to the workspace.`
  },
}

export const workspaceCommands: Command[] = [tree, theme]
