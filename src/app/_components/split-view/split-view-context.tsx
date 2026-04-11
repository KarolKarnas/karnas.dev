"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import {
  SplitViewContextValue,
  SplitViewState,
  SPLIT_VIEW_STORAGE_KEY,
  DEFAULT_STATE,
  DEFAULT_SPLIT_RATIO,
} from "./split-view-types"

const SplitViewContext = createContext<SplitViewContextValue | null>(null)

function loadState(): SplitViewState {
  if (typeof window === "undefined") return DEFAULT_STATE
  try {
    const stored = localStorage.getItem(SPLIT_VIEW_STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored) as SplitViewState
      return {
        isActive: parsed.isActive ?? false,
        splitRatio: parsed.splitRatio ?? DEFAULT_SPLIT_RATIO,
        paneTabs: Array.isArray(parsed.paneTabs) ? parsed.paneTabs : [],
        activeTabIndex: parsed.activeTabIndex ?? 0,
      }
    }
  } catch {
    // ignore
  }
  return DEFAULT_STATE
}

function saveState(state: SplitViewState) {
  try {
    localStorage.setItem(SPLIT_VIEW_STORAGE_KEY, JSON.stringify(state))
  } catch {
    // ignore
  }
}

export function SplitViewProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<SplitViewState>(DEFAULT_STATE)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setState(loadState())
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hydrated) {
      saveState(state)
    }
  }, [state, hydrated])

  const openSplitPane = useCallback((url: string, title: string) => {
    setState((prev) => {
      // If already open, switch to it
      const existingIndex = prev.paneTabs.findIndex((t) => t.url === url)
      if (existingIndex !== -1) {
        return { ...prev, isActive: true, activeTabIndex: existingIndex }
      }
      // Add new tab and make it active
      const newTabs = [...prev.paneTabs, { url, title }]
      return {
        ...prev,
        isActive: true,
        paneTabs: newTabs,
        activeTabIndex: newTabs.length - 1,
      }
    })
  }, [])

  const closePaneTab = useCallback((index: number) => {
    setState((prev) => {
      const newTabs = prev.paneTabs.filter((_, i) => i !== index)
      if (newTabs.length === 0) {
        return { ...prev, isActive: false, paneTabs: [], activeTabIndex: 0 }
      }
      const newActiveIndex = Math.min(prev.activeTabIndex, newTabs.length - 1)
      return { ...prev, paneTabs: newTabs, activeTabIndex: newActiveIndex }
    })
  }, [])

  const setActivePaneTab = useCallback((index: number) => {
    setState((prev) => ({ ...prev, activeTabIndex: index }))
  }, [])

  const setSplitRatio = useCallback((ratio: number) => {
    setState((prev) => ({ ...prev, splitRatio: ratio }))
  }, [])

  const toggleSplitView = useCallback(() => {
    setState((prev) => {
      if (prev.isActive) {
        return { ...prev, isActive: false, paneTabs: [], activeTabIndex: 0 }
      }
      return prev
    })
  }, [])

  const value: SplitViewContextValue = {
    ...state,
    openSplitPane,
    closePaneTab,
    setActivePaneTab,
    setSplitRatio,
    toggleSplitView,
  }

  return (
    <SplitViewContext.Provider value={value}>
      {children}
    </SplitViewContext.Provider>
  )
}

export function useSplitView() {
  const context = useContext(SplitViewContext)
  if (!context) {
    throw new Error("useSplitView must be used within SplitViewProvider")
  }
  return context
}
