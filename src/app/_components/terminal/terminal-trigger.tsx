"use client"

import { useTerminalOptional } from "./terminal-context"

type TerminalTriggerProps = {
  children: React.ReactNode
  className?: string
}

const TerminalTrigger = ({ children, className }: TerminalTriggerProps) => {
  const terminal = useTerminalOptional()

  const handleClick = () => {
    if (terminal) {
      terminal.open()
      return
    }
    // Embedded in a split-view iframe — ask the parent window to open it.
    if (typeof window !== "undefined" && window.parent !== window) {
      window.parent.postMessage(
        { type: "split-view-open-terminal" },
        window.location.origin,
      )
    }
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  )
}

export default TerminalTrigger
