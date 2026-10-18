"use client"

import { useEffect, useState, type MouseEvent, type RefObject } from "react"
import { usePathname } from "next/navigation"
import { useAppearance } from "../appearance/appearance-context"
import styles from "./back-to-top.module.scss"

type Props = {
  scrollRef?: RefObject<HTMLDivElement | null>
}

export default function BackToTop({ scrollRef }: Props) {
  const pathname = usePathname()
  const { appearance } = useAppearance()
  const [position, setPosition] = useState({ visible: false, progress: 0 })

  useEffect(() => {
    const root = scrollRef?.current ?? document.scrollingElement
    if (!root) return
    const source = scrollRef ? root : window
    let frame = 0

    const measure = () => {
      frame = 0
      const distance = root.scrollHeight - root.clientHeight
      const progress =
        distance > 0
          ? Math.round(
              Math.min(1, Math.max(0, root.scrollTop / distance)) * 100
            )
          : 0
      const visible =
        root.scrollTop > Math.max(160, Math.min(400, root.clientHeight * 0.75))
      setPosition((previous) =>
        previous.visible === visible && previous.progress === progress
          ? previous
          : { visible, progress }
      )
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    source.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    const observer = new ResizeObserver(schedule)
    observer.observe(root)
    const content = scrollRef ? root.querySelector("main") : document.body
    if (content) observer.observe(content)
    schedule()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      source.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
    }
  }, [pathname, scrollRef])

  const scrollToTop = (event: MouseEvent<HTMLButtonElement>) => {
    const root = scrollRef?.current ?? document.scrollingElement
    if (!root) return
    const reducedMotion =
      appearance.reducedMotion ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // Keep keyboard navigation at the start after the button disappears.
    if (event.detail === 0) {
      const destination =
        root.querySelector<HTMLElement>("h1") ??
        root.querySelector<HTMLElement>("main")
      if (destination) {
        if (!destination.hasAttribute("tabindex")) {
          destination.setAttribute("tabindex", "-1")
          destination.addEventListener(
            "blur",
            () => {
              destination.removeAttribute("tabindex")
            },
            { once: true }
          )
        }
        destination.focus({ preventScroll: true })
      }
    }

    root.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" })
  }

  if (!position.visible) return null

  return (
    <button
      type="button"
      className={`${styles.button} ${scrollRef ? "" : styles.viewport}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg className={styles.progress} viewBox="0 0 48 48" aria-hidden="true">
        <circle className={styles.track} cx="24" cy="24" r="20" />
        <circle
          className={styles.indicator}
          cx="24"
          cy="24"
          r="20"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset={100 - position.progress}
        />
      </svg>
      <svg
        className={styles.arrow}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 19V5M6 11l6-6 6 6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
