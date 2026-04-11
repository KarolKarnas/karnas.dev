"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useTerminal } from "./terminal-context"
import { TERMINAL_MIN_HEIGHT, TERMINAL_MAX_HEIGHT_VH } from "./terminal-types"
import { executeCommand, CommandContext } from "./commands"
import { ContentResponse, PostMeta, ProjectMeta } from "@/app/api/content/route"
import TerminalInput from "./terminal-input/terminal-input"
import { xMark } from "@/icons"
import styles from "./terminal.module.scss"

const ASCII_BANNER = ` _                                       _
| | ____ _ _ __ _ __   __ _ ___       __| | _____   __
| |/ / _\` | '__| '_ \\ / _\` / __|    / _\` |/ _ \\ \\ / /
|   < (_| | |  | | | | (_| \\__ \\ _ | (_| |  __/\\ V /
|_|\\_\\__,_|_|  |_| |_|\\__,_|___/(_) \\__,_|\\___| \\_/
`

const WELCOME_MESSAGE = `Welcome to karnas.dev terminal v1.0.0
Type 'help' for available commands.
`

const Terminal = () => {
  const {
    isOpen,
    history,
    commandHistory,
    height,
    toggle,
    addEntry,
    addCommandToHistory,
    clearHistory,
    setHeight,
  } = useTerminal()

  const router = useRouter()
  const pathname = usePathname()
  const bodyRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const [posts, setPosts] = useState<PostMeta[]>([])
  const [projects, setProjects] = useState<ProjectMeta[]>([])

  // Fetch content metadata on mount
  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data: ContentResponse) => {
        setPosts(data.posts)
        setProjects(data.projects)
      })
      .catch(() => {
        // silently fail
      })
  }, [])

  // Auto-scroll to bottom on new history or terminal open
  useEffect(() => {
    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({ block: "end" })
    })
  }, [history, isOpen])

  // Global keyboard shortcut: Ctrl+`
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" && e.ctrlKey) {
        e.preventDefault()
        toggle()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [toggle])

  // Resize drag handling
  const handleDragStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    isDragging.current = true
    document.body.style.cursor = "row-resize"
    document.body.style.userSelect = "none"
  }, [])

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
  }, [setHeight])

  const handleCommand = useCallback(
    async (input: string) => {
      addCommandToHistory(input)

      const context: CommandContext = {
        navigate: (path: string) => router.push(path),
        posts,
        projects,
        currentPath: pathname,
        clearTerminal: clearHistory,
        commandHistory,
      }

      const output = await executeCommand(input, context)

      // Don't add entry for clear command (already handled)
      if (input.trim().toLowerCase() === "clear") return

      addEntry({ id: 0, input, output })
    },
    [addCommandToHistory, addEntry, clearHistory, commandHistory, pathname, posts, projects, router]
  )

  if (!isOpen) return null

  return (
    <div className={styles.terminal} style={{ height }}>
      <div className={styles.dragHandle} onMouseDown={handleDragStart} />
      <div className={styles.topBar}>
        <span className={styles.title}>TERMINAL</span>
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
      <div className={styles.body} ref={bodyRef}>
        <pre className={styles.banner}>{ASCII_BANNER}</pre>
        <pre className={styles.welcome}>{WELCOME_MESSAGE}</pre>
        {history.map((entry) => (
          <div key={entry.id} className={styles.entry}>
            {entry.input && (
              <div className={styles.historyLine}>
                <span className={styles.prompt}>visitor@karnas.dev</span>
                <span className={styles.separator}>:</span>
                <span className={styles.path}>~</span>
                <span className={styles.dollar}>$ </span>
                <span className={styles.command}>{entry.input}</span>
              </div>
            )}
            {entry.output && (
              <pre className={styles.commandOutput}>{entry.output}</pre>
            )}
          </div>
        ))}
        <TerminalInput
          onSubmit={handleCommand}
          commandHistory={commandHistory}
        />
        <div ref={bottomRef} />
      </div>
    </div>
  )
}

export default Terminal
