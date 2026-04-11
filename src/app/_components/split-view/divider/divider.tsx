"use client"

import { useCallback, useEffect, useRef } from "react"
import styles from "./divider.module.scss"

type DividerProps = {
  onResize: (ratio: number) => void
  onDragStateChange: (isDragging: boolean) => void
  containerRef: React.RefObject<HTMLDivElement | null>
}

export default function Divider({
  onResize,
  onDragStateChange,
  containerRef,
}: DividerProps) {
  const isDragging = useRef(false)

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      isDragging.current = true
      onDragStateChange(true)
      document.body.style.cursor = "col-resize"
      document.body.style.userSelect = "none"
    },
    [onDragStateChange],
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const ratio = (e.clientX - rect.left) / rect.width
      const clamped = Math.min(Math.max(ratio, 0.2), 0.8)
      onResize(clamped)
    }

    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false
        onDragStateChange(false)
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
  }, [onResize, onDragStateChange, containerRef])

  return <div className={styles.divider} onMouseDown={handleMouseDown} />
}
