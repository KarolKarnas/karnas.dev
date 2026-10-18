import type { Command } from "./index"
import {
  getDirectoryEntries,
  getDirectoryForRoute,
  getFileMetadata,
  resolveFile,
  TERMINAL_HOME,
  formatPromptPath,
} from "../terminal-filesystem"

const ls: Command = {
  name: "ls",
  description: "Browse files in the current directory",
  usage: "ls [-l] [path]",
  execute: (args, context) => {
    if (args.some((arg) => arg.startsWith("-") && arg !== "-l"))
      return "Usage: ls [-l] [path]"
    const paths = args.filter((arg) => arg !== "-l")
    if (paths.length > 1) return "Usage: ls [-l] [path]"
    const target = paths[0] ?? "."
    const entry = resolveFile(target, context.currentPath)
    if (!entry)
      return `ls: cannot access '${target}': No such file or directory`
    const files =
      entry.kind === "directory"
        ? (getDirectoryEntries(entry.path) ?? [])
        : [entry]
    return {
      type: "directory",
      path:
        entry.kind === "directory"
          ? entry.path
          : getDirectoryForRoute(entry.path),
      entries: files.map((file) => {
        const content = getFileMetadata(file, context)
        return content
          ? { ...file, title: content.title, date: content.date }
          : file
      }),
      detailed: args.includes("-l"),
    }
  },
}

const cd: Command = {
  name: "cd",
  description: "Change directory and show its page",
  usage: "cd [directory | -]",
  execute: (args, context) => {
    if (args.length > 1) return "Usage: cd [directory | -]"
    if (args[0] === "-" && !context.previousPath)
      return "cd: no previous directory"
    const target = args[0] === "-" ? context.previousPath! : (args[0] ?? "~")
    const entry = resolveFile(target, context.currentPath)
    if (!entry) return `cd: no such directory: ${target}`
    if (entry.kind !== "directory")
      return `cd: ${target}: Not a directory. Use 'open ${target}'.`
    context.changeDirectory(entry.path)
    return args[0] === "-" ? formatPromptPath(entry.path) : ""
  },
}

const open: Command = {
  name: "open",
  description: "Open a file or section in the editor",
  usage: "open <file-or-directory>",
  execute: (args, context) => {
    if (args.length !== 1) return "Usage: open <file-or-directory>"
    const entry = resolveFile(args[0], context.currentPath)
    if (!entry) return `open: no such file or directory: ${args[0]}`
    context.navigate(entry.href)
    return `Opened ${entry.name === "~" ? "home" : entry.name}`
  },
}

const pwd: Command = {
  name: "pwd",
  description: "Show the current working directory",
  usage: "pwd",
  execute: (_args, context) =>
    `${TERMINAL_HOME}${context.currentPath === "/" ? "" : context.currentPath}`,
}

export const navigationCommands: Command[] = [ls, cd, open, pwd]
