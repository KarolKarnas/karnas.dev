"use client"

import { useTerminalOptional } from "./terminal-context"

type TerminalTriggerProps = {
  children: React.ReactNode
  className?: string
}

const TerminalTrigger = ({ children, className }: TerminalTriggerProps) => {
  const terminal = useTerminalOptional()

  if (!terminal) return null

  return (
    <button type="button" onClick={terminal.open} className={className}>
      {children}
    </button>
  )
}

export default TerminalTrigger
