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

const particles: Command = {
  name: "particles",
  description: "Control background particles and their mouse interactions",
  usage: "particles [on|off|status] | particles <cursor|click> <on|off>",
  execute: (args, context) => {
    const [action, value] = args.map((arg) => arg.toLowerCase())
    const { appearance, updateAppearance } = context
    const state = (enabled: boolean) => (enabled ? "on" : "off")
    if (!args.length || (args.length === 1 && action === "status")) {
      return [
        `Background particles: ${state(appearance.backgroundEnabled)}`,
        `Cursor reaction:     ${state(appearance.backgroundCursor)}`,
        `Click-to-add points: ${state(appearance.backgroundAddPoints)}`,
        "",
        "particles on | off",
        "particles cursor on | off",
        "particles click on | off",
        "Changes are saved with your appearance settings.",
      ].join("\n")
    }
    if (args.length === 1 && ["on", "off"].includes(action)) {
      updateAppearance({ backgroundEnabled: action === "on" })
      return `Background particles: ${action}.`
    }
    if (
      args.length === 2 &&
      ["cursor", "click"].includes(action) &&
      ["on", "off"].includes(value)
    ) {
      const key =
        action === "cursor" ? "backgroundCursor" : "backgroundAddPoints"
      updateAppearance({ [key]: value === "on" })
      const label =
        action === "cursor" ? "Cursor reaction" : "Click-to-add points"
      return `${label}: ${value}.${appearance.backgroundEnabled ? "" : " Background is off; run 'particles on' to see it."}`
    }
    return `Usage: ${particles.usage}`
  },
}

export const workspaceCommands: Command[] = [tree, theme, particles]
