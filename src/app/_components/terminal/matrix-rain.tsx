"use client"

import { useEffect, useRef, useSyncExternalStore } from "react"
import { useAppearance } from "../appearance/appearance-context"
import { startMatrixRain } from "./matrix-rain-engine"
import styles from "./terminal.module.scss"

function subscribeToMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)")
  media.addEventListener("change", callback)
  return () => media.removeEventListener("change", callback)
}

export default function MatrixRain({ onExit }: { onExit: () => void }) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const { appearance } = useAppearance()
  const systemReducedMotion = useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true
  )
  const reducedMotion = appearance.reducedMotion || systemReducedMotion

  useEffect(() => {
    if (canvas.current) return startMatrixRain(canvas.current, reducedMotion)
  }, [reducedMotion])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key !== "Escape" &&
        !(event.ctrlKey && event.key.toLowerCase() === "c")
      )
        return
      event.preventDefault()
      event.stopPropagation()
      onExit()
    }
    window.addEventListener("keydown", onKeyDown, true)
    const timeout = window.setTimeout(onExit, 18_000)
    return () => {
      window.clearTimeout(timeout)
      window.removeEventListener("keydown", onKeyDown, true)
    }
  }, [onExit])

  return (
    <section className={styles.matrixStage} aria-label="Matrix digital rain">
      <canvas ref={canvas} className={styles.matrixCanvas} aria-hidden="true" />
      <div className={styles.matrixLabel}>
        MATRIX{" "}
        <span>
          {"// "}
          {reducedMotion ? "STILL FRAME" : "DIGITAL RAIN"}
        </span>
      </div>
      <div className={styles.matrixControls}>
        <span>Esc or Ctrl+C to return</span>
        <button autoFocus type="button" onClick={onExit}>
          Back to terminal <span aria-hidden="true">↵</span>
        </button>
      </div>
    </section>
  )
}
