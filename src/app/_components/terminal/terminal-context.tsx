"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import {
  TerminalContextValue,
  TerminalState,
  TerminalEntry,
  TERMINAL_STORAGE_KEY,
  TERMINAL_DEFAULT_HEIGHT,
  TERMINAL_MIN_HEIGHT,
  DEFAULT_TERMINAL_STATE,
} from "./terminal-types"

const TerminalContext = createContext<TerminalContextValue | null>(null)

function loadHeight(): number {
  if (typeof window === "undefined") return TERMINAL_DEFAULT_HEIGHT
  try {
    const stored = localStorage.getItem(TERMINAL_STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      if (typeof parsed.height === "number" && parsed.height >= TERMINAL_MIN_HEIGHT) {
        return parsed.height
      }
    }
  } catch {
    // ignore
  }
  return TERMINAL_DEFAULT_HEIGHT
}

function saveHeight(height: number) {
  try {
    localStorage.setItem(TERMINAL_STORAGE_KEY, JSON.stringify({ height }))
  } catch {
    // ignore
  }
}

let nextEntryId = 0

export function TerminalProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<TerminalState>(DEFAULT_TERMINAL_STATE)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setState((prev) => ({ ...prev, height: loadHeight() }))
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hydrated) {
      saveHeight(state.height)
    }
  }, [state.height, hydrated])

  const toggle = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: !prev.isOpen }))
  }, [])

  const open = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: true }))
  }, [])

  const close = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }))
  }, [])

  const addEntry = useCallback((entry: TerminalEntry) => {
    setState((prev) => ({
      ...prev,
      history: [...prev.history, { ...entry, id: nextEntryId++ }],
    }))
  }, [])

  const addCommandToHistory = useCallback((command: string) => {
    setState((prev) => ({
      ...prev,
      commandHistory: [...prev.commandHistory, command],
    }))
  }, [])

  const clearHistory = useCallback(() => {
    setState((prev) => ({ ...prev, history: [] }))
  }, [])

  const setHeight = useCallback((height: number) => {
    setState((prev) => ({ ...prev, height }))
  }, [])

  const value: TerminalContextValue = {
    ...state,
    toggle,
    open,
    close,
    addEntry,
    addCommandToHistory,
    clearHistory,
    setHeight,
  }

  return (
    <TerminalContext.Provider value={value}>
      {children}
    </TerminalContext.Provider>
  )
}

export function useTerminal() {
  const context = useContext(TerminalContext)
  if (!context) {
    throw new Error("useTerminal must be used within TerminalProvider")
  }
  return context
}

export function useTerminalOptional() {
  return useContext(TerminalContext)
}
