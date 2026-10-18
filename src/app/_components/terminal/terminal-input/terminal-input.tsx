"use client"

import { useState, useRef, useEffect, KeyboardEvent } from "react"
import TerminalPrompt from "../terminal-prompt"
import styles from "./terminal-input.module.scss"

type TerminalInputProps = {
  onSubmit: (command: string) => void
  commandHistory: string[]
  currentPath: string
  onComplete: (input: string) => string[]
}

const TerminalInput = ({
  onSubmit,
  commandHistory,
  currentPath,
  onComplete,
}: TerminalInputProps) => {
  const [value, setValue] = useState("")
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const draftRef = useRef("")
  const [completions, setCompletions] = useState<string[]>([])

  useEffect(() => {
    const isTouch =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: none)").matches
    if (isTouch) return
    inputRef.current?.focus()
  }, [commandHistory.length])

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab" && !e.shiftKey) {
      e.preventDefault()
      const matches = onComplete(value)
      if (matches.length === 1) {
        setValue(matches[0] + (value.includes(" ") ? "" : " "))
        setCompletions([])
      } else {
        if (matches.length > 1) {
          let prefix = matches[0]
          for (const match of matches.slice(1)) {
            while (!match.startsWith(prefix)) prefix = prefix.slice(0, -1)
          }
          if (prefix.length > value.length) setValue(prefix)
        }
        setCompletions(matches)
      }
      return
    }
    if (e.key === "Escape") {
      setCompletions([])
      return
    }
    setCompletions([])
    if (e.key === "Enter") {
      e.preventDefault()
      const trimmed = value.trim()
      if (trimmed) {
        onSubmit(trimmed)
      }
      setValue("")
      setHistoryIndex(-1)
      draftRef.current = ""
      return
    }

    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length === 0) return
      if (historyIndex === -1) draftRef.current = value
      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1)
      setHistoryIndex(newIndex)
      setValue(commandHistory[newIndex])
      return
    }

    if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex === -1) return
      if (historyIndex >= commandHistory.length - 1) {
        setHistoryIndex(-1)
        setValue(draftRef.current)
        return
      }
      const newIndex = historyIndex + 1
      setHistoryIndex(newIndex)
      setValue(commandHistory[newIndex])
      return
    }

    if (e.key === "c" && e.ctrlKey) {
      e.preventDefault()
      setValue("")
      setHistoryIndex(-1)
      return
    }

    if (e.key === "l" && e.ctrlKey) {
      e.preventDefault()
      onSubmit("clear")
      setValue("")
      setHistoryIndex(-1)
      draftRef.current = ""
      return
    }
  }

  return (
    <div className={styles.inputArea}>
      <div
        className={styles.inputLine}
        onClick={() => inputRef.current?.focus()}
      >
        <TerminalPrompt path={currentPath} />
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setCompletions([])
            setHistoryIndex(-1)
          }}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
          aria-label={`Terminal command in ${currentPath === "/" ? "home" : currentPath}`}
          aria-describedby="terminal-keyboard-hint"
        />
      </div>
      <span id="terminal-keyboard-hint" className={styles.srOnly}>
        Tab completes commands and paths. Up and Down browse command history.
      </span>
      {completions.length > 0 && (
        <div className={styles.completions}>
          <span role="status">{completions.length} completions</span>
          <ul>
            {completions.map((completion) => (
              <li key={completion}>
                <button
                  type="button"
                  onClick={() => {
                    setValue(completion)
                    setCompletions([])
                    inputRef.current?.focus()
                  }}
                >
                  {completion}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default TerminalInput
