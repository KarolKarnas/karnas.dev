import { JSX } from "react"

export type TerminalEntry = {
  id: number
  input: string
  output: string | JSX.Element
}

export type TerminalState = {
  isOpen: boolean
  history: TerminalEntry[]
  commandHistory: string[]
  height: number
}

export type TerminalContextValue = TerminalState & {
  toggle: () => void
  open: () => void
  close: () => void
  addEntry: (entry: TerminalEntry) => void
  addCommandToHistory: (command: string) => void
  clearHistory: () => void
  setHeight: (height: number) => void
}

export const TERMINAL_STORAGE_KEY = "terminal-state"
export const TERMINAL_DEFAULT_HEIGHT = 300
export const TERMINAL_MIN_HEIGHT = 150
export const TERMINAL_MAX_HEIGHT_VH = 0.7

export const DEFAULT_TERMINAL_STATE: TerminalState = {
  isOpen: false,
  history: [],
  commandHistory: [],
  height: TERMINAL_DEFAULT_HEIGHT,
}
