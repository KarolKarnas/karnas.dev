"use client"

import { useEffect, useRef, useSyncExternalStore } from "react"

const STORAGE_KEY = "explorer-folders"
const CHANGE_EVENT = "explorer-folders-change"
const FOLDERS = ["/professional-projects", "/side-projects", "/blog"] as const
type FolderState = Partial<Record<(typeof FOLDERS)[number], boolean>>
let sessionState: FolderState = {}
let sessionOnly = false

function readState(): FolderState {
  if (sessionOnly) return sessionState
  try {
    const parsed: unknown = JSON.parse(
      window.localStorage.getItem(STORAGE_KEY) ?? "{}"
    )
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      return {}
    return Object.fromEntries(
      FOLDERS.flatMap((path) => {
        const value = (parsed as Record<string, unknown>)[path]
        return typeof value === "boolean" ? [[path, value]] : []
      })
    )
  } catch {
    return sessionState
  }
}

export function isFolderExpanded(path: string): boolean {
  return readState()[path as keyof FolderState] === true
}

export function setFolderExpanded(path: string, expanded: boolean) {
  if (!FOLDERS.some((folder) => folder === path)) return
  sessionState = { ...readState(), [path]: expanded }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionState))
  } catch {
    // Keep manual choices for this session when persistent storage is unavailable.
    sessionOnly = true
  }
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

export function revealFolderForPathname(pathname: string) {
  const path = pathname.split(/[?#]/, 1)[0]
  const folder = FOLDERS.find(
    (folder) => path === folder || path.startsWith(`${folder}/`)
  )
  if (folder && !isFolderExpanded(folder)) setFolderExpanded(folder, true)
}

export function useRevealFolderOnNavigation(pathname: string) {
  const previousPathname = useRef(pathname)
  useEffect(() => {
    // Restore saved choices on mount; reveal only when the visitor navigates.
    if (previousPathname.current === pathname) return
    previousPathname.current = pathname
    revealFolderForPathname(pathname)
  }, [pathname])
}

function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) callback()
  }
  window.addEventListener("storage", onStorage)
  window.addEventListener(CHANGE_EVENT, callback)
  return () => {
    window.removeEventListener("storage", onStorage)
    window.removeEventListener(CHANGE_EVENT, callback)
  }
}

export function useFolderExpanded(path: string) {
  return useSyncExternalStore(
    subscribe,
    () => isFolderExpanded(path),
    () => false
  )
}
