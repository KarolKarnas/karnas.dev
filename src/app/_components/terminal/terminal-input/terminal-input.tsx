"use client"

import { useState, useRef, useEffect, KeyboardEvent } from "react"
import styles from "./terminal-input.module.scss"

type TerminalInputProps = {
  onSubmit: (command: string) => void
  commandHistory: string[]
}

const TerminalInput = ({ onSubmit, commandHistory }: TerminalInputProps) => {
  const [value, setValue] = useState("")
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [commandHistory.length])

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      const trimmed = value.trim()
      if (trimmed) {
        onSubmit(trimmed)
      }
      setValue("")
      setHistoryIndex(-1)
      return
    }

    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length === 0) return
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
        setValue("")
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
      return
    }
  }

  return (
    <div
      className={styles.inputLine}
      onClick={() => inputRef.current?.focus()}
    >
      <span className={styles.prompt}>visitor@karnas.dev</span>
      <span className={styles.separator}>:</span>
      <span className={styles.path}>~</span>
      <span className={styles.dollar}>$ </span>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        spellCheck={false}
        autoComplete="off"
        autoCapitalize="off"
        aria-label="Terminal input"
      />
    </div>
  )
}

export default TerminalInput
