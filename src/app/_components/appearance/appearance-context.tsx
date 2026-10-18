"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react"

import { parseAppearance, type Appearance } from "./appearance-config"
export { DEFAULT_APPEARANCE, THEMES } from "./appearance-config"

const STORAGE_KEY = "karnas-appearance"
let memorySnapshot = ""

function snapshot() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? memorySnapshot
  } catch {
    return memorySnapshot
  }
}
function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) callback()
  }
  window.addEventListener("storage", onStorage)
  window.addEventListener("appearance-change", callback)
  return () => {
    window.removeEventListener("storage", onStorage)
    window.removeEventListener("appearance-change", callback)
  }
}
const AppearanceContext = createContext<{
  appearance: Appearance
  update: (patch: Partial<Appearance>) => void
} | null>(null)

export function AppearanceProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const raw = useSyncExternalStore(subscribe, snapshot, () => "")
  const appearance = useMemo(() => parseAppearance(raw), [raw])
  useEffect(() => {
    if (raw !== snapshot()) return
    document.documentElement.dataset.theme = appearance.theme
    document.documentElement.dataset.textSize = appearance.textSize
    document.documentElement.dataset.motion = appearance.reducedMotion
      ? "reduced"
      : "auto"
  }, [appearance, raw])
  const update = useCallback((patch: Partial<Appearance>) => {
    memorySnapshot = JSON.stringify({
      ...parseAppearance(snapshot()),
      ...patch,
    })
    try {
      window.localStorage.setItem(STORAGE_KEY, memorySnapshot)
    } catch {
      /* Session preferences still work without storage. */
    }
    window.dispatchEvent(new Event("appearance-change"))
  }, [])
  return (
    <AppearanceContext.Provider value={{ appearance, update }}>
      {children}
    </AppearanceContext.Provider>
  )
}

export function useAppearance() {
  const context = useContext(AppearanceContext)
  if (!context) throw new Error("useAppearance requires AppearanceProvider")
  return context
}
