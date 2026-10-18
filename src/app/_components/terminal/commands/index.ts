import type { PostMeta, ProjectMeta } from "@/app/api/content/route"
import type { CommandOutput } from "../terminal-types"
import { navigationCommands } from "./navigation"
import { contentCommands } from "./content"
import { infoCommands } from "./info"
import { funCommands } from "./fun"
import { workspaceCommands } from "./workspace"
import type { Appearance, Theme } from "../../appearance/appearance-config"

export type CommandContext = {
  navigate: (path: string) => void
  changeDirectory: (path: string) => void
  posts: PostMeta[]
  projects: ProjectMeta[]
  professional: ProjectMeta[]
  currentPath: string
  previousPath: string | null
  theme: Theme
  setTheme: (theme: Theme) => void
  appearance: Appearance
  updateAppearance: (patch: Partial<Appearance>) => void
  startMatrix: () => void
  clearTerminal: () => void
  closeTerminal: () => void
  commandHistory: string[]
}

export type Command = {
  name: string
  description: string
  usage: string
  execute: (
    args: string[],
    context: CommandContext
  ) => CommandOutput | Promise<CommandOutput>
}

const commandRegistry = new Map<string, Command>()

function registerCommands(commands: Command[]) {
  for (const cmd of commands) {
    commandRegistry.set(cmd.name, cmd)
  }
}

registerCommands(navigationCommands)
registerCommands(contentCommands)
registerCommands(infoCommands)
registerCommands(funCommands)
registerCommands(workspaceCommands)

export function getCommand(name: string): Command | undefined {
  return commandRegistry.get(name)
}

export function getAllCommands(): Command[] {
  return Array.from(commandRegistry.values())
}

export async function executeCommand(
  input: string,
  context: CommandContext
): Promise<CommandOutput> {
  const trimmed = input.trim()
  if (!trimmed) return ""

  const parts = trimmed.split(/\s+/)
  const commandName = parts[0].toLowerCase()
  const args = parts.slice(1)

  const command = getCommand(commandName)
  if (!command) {
    return `Command not found: ${commandName}. Type 'help' for available commands.`
  }

  return command.execute(args, context)
}
