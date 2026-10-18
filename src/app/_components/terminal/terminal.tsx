"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useTerminal } from "./terminal-context"
import { TERMINAL_MIN_HEIGHT, TERMINAL_MAX_HEIGHT_VH } from "./terminal-types"
import { executeCommand, getAllCommands, CommandContext } from "./commands"
import type { ContentResponse } from "@/app/api/content/route"
import {
  completeCommand,
  formatPromptPath,
  getDirectoryForRoute,
  resolveFile,
} from "./terminal-filesystem"
import { revealFolderForPathname } from "../side-nav/folder-state"
import TerminalInput from "./terminal-input/terminal-input"
import TerminalPrompt from "./terminal-prompt"
import TerminalListing from "./terminal-listing"
import { xMark } from "@/icons"
import styles from "./terminal.module.scss"
import { useAppearance } from "../appearance/appearance-context"
import MatrixRain from "./matrix-rain"

const Terminal = () => {
  const {
    isOpen,
    history,
    commandHistory,
    height,
    toggle,
    close,
    addEntry,
    addCommandToHistory,
    clearHistory,
    setHeight,
    setIsResizing,
    effect,
    startMatrix,
    stopEffect,
  } = useTerminal()

  const router = useRouter()
  const { appearance, update: updateAppearance } = useAppearance()
  const pathname = usePathname()
  const bodyRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const restoreInputFocus = useRef(false)
  const [workingDirectory, setWorkingDirectory] = useState(() =>
    getDirectoryForRoute(pathname)
  )
  const directoryRef = useRef(workingDirectory)
  const previousDirectoryRef = useRef<string | null>(null)
  const [content, setContent] = useState<ContentResponse>({
    posts: [],
    projects: [],
    professional: [],
  })
  const contentRequest = useRef<Promise<ContentResponse> | null>(null)

  const stopAnimation = useCallback(() => {
    restoreInputFocus.current =
      terminalRef.current?.contains(document.activeElement) ?? false
    stopEffect()
  }, [stopEffect])

  useEffect(() => {
    if (effect === null && restoreInputFocus.current) {
      restoreInputFocus.current = false
      terminalRef.current?.querySelector("input")?.focus()
    }
  }, [effect])

  const loadContent = useCallback(() => {
    if (!contentRequest.current) {
      contentRequest.current = fetch("/api/content")
        .then((response) => {
          if (!response.ok) throw new Error("Content request failed")
          return response.json() as Promise<ContentResponse>
        })
        .catch((error) => {
          contentRequest.current = null
          throw error
        })
    }
    return contentRequest.current
  }, [])

  // Fetch content metadata on mount
  useEffect(() => {
    let active = true
    loadContent()
      .then((data) => {
        if (active) setContent(data)
      })
      .catch(() => {
        // Reading commands retry the request and report a failure if it persists.
      })
    return () => {
      active = false
    }
  }, [loadContent])

  // Auto-scroll to bottom on new history or terminal open
  useEffect(() => {
    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({ block: "end" })
    })
  }, [history, isOpen])

  // Resize drag handling
  const handleDragStart = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      isDragging.current = true
      setIsResizing(true)
      document.body.style.cursor = "row-resize"
      document.body.style.userSelect = "none"
    },
    [setIsResizing]
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      const maxHeight = window.innerHeight * TERMINAL_MAX_HEIGHT_VH
      const newHeight = window.innerHeight - e.clientY
      setHeight(Math.min(Math.max(newHeight, TERMINAL_MIN_HEIGHT), maxHeight))
    }

    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false
        setIsResizing(false)
        document.body.style.cursor = ""
        document.body.style.userSelect = ""
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [setHeight, setIsResizing])

  const handleCommand = useCallback(
    async (input: string) => {
      addCommandToHistory(input)
      const path = directoryRef.current
      const name = input.trim().split(/\s+/)[0].toLowerCase()
      let metadata = content
      const target = input.trim().split(/\s+/).at(-1) ?? ""
      if (
        name === "find" ||
        (["cat", "head"].includes(name) && resolveFile(target, path)?.slug)
      ) {
        try {
          metadata = await loadContent()
          setContent(metadata)
        } catch {
          addEntry({
            id: 0,
            input,
            path,
            output:
              "Could not load the articles. Try this command again to retry.",
          })
          return
        }
      }
      const context: CommandContext = {
        navigate: (target: string) => {
          revealFolderForPathname(target)
          router.push(target)
        },
        changeDirectory: (target: string) => {
          if (target !== directoryRef.current)
            previousDirectoryRef.current = directoryRef.current
          directoryRef.current = target
          setWorkingDirectory(target)
          revealFolderForPathname(target)
          router.push(target)
        },
        ...metadata,
        currentPath: path,
        previousPath: previousDirectoryRef.current,
        theme: appearance.theme,
        setTheme: (theme) => updateAppearance({ theme }),
        startMatrix,
        clearTerminal: clearHistory,
        closeTerminal: close,
        commandHistory,
      }

      const output = await executeCommand(input, context)

      // Don't add entry for clear command (already handled)
      if (name === "clear" || name === "exit") return

      addEntry({ id: 0, input, path, output })
    },
    [
      addCommandToHistory,
      addEntry,
      clearHistory,
      close,
      commandHistory,
      content,
      loadContent,
      router,
      appearance.theme,
      updateAppearance,
      startMatrix,
    ]
  )

  if (!isOpen) return null

  return (
    <div
      className={styles.terminal}
      ref={terminalRef}
      style={{ height: `min(${height}px, 70dvh)` }}
      role="region"
      aria-label="Portfolio terminal"
    >
      <div
        className={styles.dragHandle}
        onMouseDown={handleDragStart}
        role="separator"
        aria-label="Resize terminal"
        aria-orientation="horizontal"
        aria-valuemin={TERMINAL_MIN_HEIGHT}
        aria-valuenow={Math.round(height)}
        tabIndex={0}
        onKeyDown={(event) => {
          if (!["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key))
            return
          event.preventDefault()
          const max = window.innerHeight * TERMINAL_MAX_HEIGHT_VH
          const next =
            event.key === "Home"
              ? TERMINAL_MIN_HEIGHT
              : event.key === "End"
                ? max
                : height + (event.key === "ArrowUp" ? 24 : -24)
          setHeight(Math.min(max, Math.max(TERMINAL_MIN_HEIGHT, next)))
        }}
      />
      <div className={styles.topBar}>
        <div className={styles.terminalLabel}>
          <span className={styles.title}>TERMINAL</span>
          <span className={styles.workingDirectory}>
            {formatPromptPath(workingDirectory)}
          </span>
        </div>
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.clearButton}
            onClick={clearHistory}
            title="Clear terminal (Ctrl+L)"
          >
            Clear
          </button>
          <button
            className={styles.closeButton}
            onClick={toggle}
            type="button"
            aria-label="Close Terminal"
            title="Close Terminal"
          >
            {xMark.icon}
          </button>
        </div>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.body} ref={bodyRef} inert={effect === "matrix"}>
          {history.length === 0 && (
            <div className={styles.welcome}>
              <div>
                <strong>karnas.dev</strong>
                <span>Explore the work from the command line.</span>
              </div>
              <p>
                Browse with <code>ls</code>, read with <code>cat</code>, open in
                the editor with <code>open</code>. Press <kbd>Tab</kbd> to
                complete.
              </p>
              <div className={styles.quickCommands}>
                {["ls", "cd blog", "help"].map((command) => (
                  <button
                    key={command}
                    type="button"
                    onClick={() => handleCommand(command)}
                  >
                    {command}
                    <span aria-hidden="true">↵</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          {history.map((entry) => (
            <div key={entry.id} className={styles.entry}>
              {entry.input && (
                <div className={styles.historyLine}>
                  <TerminalPrompt path={entry.path} />
                  <span className={styles.command}>{entry.input}</span>
                </div>
              )}
              {typeof entry.output === "string" ? (
                entry.output && (
                  <pre className={styles.commandOutput}>{entry.output}</pre>
                )
              ) : "entries" in entry.output ? (
                <TerminalListing
                  listing={entry.output}
                  onSelect={handleCommand}
                />
              ) : (
                entry.output
              )}
            </div>
          ))}
          <TerminalInput
            onSubmit={handleCommand}
            commandHistory={commandHistory}
            currentPath={workingDirectory}
            onComplete={(input) =>
              completeCommand(
                input,
                directoryRef.current,
                getAllCommands().map((command) => command.name)
              )
            }
          />
          <div ref={bottomRef} />
        </div>
        {effect === "matrix" && <MatrixRain onExit={stopAnimation} />}
      </div>
    </div>
  )
}

export default Terminal
