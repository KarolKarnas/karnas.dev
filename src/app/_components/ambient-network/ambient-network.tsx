"use client"

import { useEffect, useRef, useSyncExternalStore } from "react"
import { useAppearance } from "../appearance/appearance-context"
import { startAmbientNetwork } from "./ambient-network-engine"
import styles from "./ambient-network.module.scss"

function subscribeToMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)")
  media.addEventListener("change", callback)
  return () => media.removeEventListener("change", callback)
}

export default function AmbientNetwork({
  viewport = false,
}: {
  viewport?: boolean
}) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const { appearance } = useAppearance()
  const systemReducedMotion = useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true
  )
  const reducedMotion = appearance.reducedMotion || systemReducedMotion

  useEffect(() => {
    if (!appearance.backgroundEnabled) return
    let stop: (() => void) | undefined
    // Read tokens after AppearanceProvider has applied the current theme.
    const frame = requestAnimationFrame(() => {
      if (!canvas.current) return
      const theme = getComputedStyle(document.documentElement)
      stop = startAmbientNetwork(canvas.current, {
        reducedMotion,
        cursorReaction: appearance.backgroundCursor,
        addOnClick: appearance.backgroundAddPoints,
        color: theme.getPropertyValue("--accent").trim(),
        secondaryColor: theme.getPropertyValue("--cyan").trim(),
      })
    })
    return () => {
      cancelAnimationFrame(frame)
      stop?.()
    }
  }, [
    reducedMotion,
    appearance.theme,
    appearance.backgroundEnabled,
    appearance.backgroundCursor,
    appearance.backgroundAddPoints,
  ])

  if (!appearance.backgroundEnabled) return null

  return (
    <canvas
      ref={canvas}
      className={`${styles.canvas} ${viewport ? styles.viewport : ""}`}
      aria-hidden="true"
    />
  )
}
