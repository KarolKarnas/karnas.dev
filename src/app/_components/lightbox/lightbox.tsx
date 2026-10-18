"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import {
  nextImageIndex,
  parseGallery,
  type GalleryState,
} from "./lightbox-utils"
import styles from "./lightbox.module.scss"

export default function Lightbox({ children }: { children: React.ReactNode }) {
  const [gallery, setGallery] = useState<GalleryState | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const sourceFrameRef = useRef<HTMLIFrameElement | null>(null)
  const triggerRef = useRef<HTMLAnchorElement | null>(null)
  const pathname = usePathname()
  const image = gallery?.images[gallery.index]

  useEffect(() => {
    const openFromClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey ||
        event.shiftKey
      )
        return
      if (!(event.target instanceof Element)) return
      const anchor = event.target.closest<HTMLAnchorElement>("a[data-lightbox]")
      if (!anchor) return
      const container = anchor.closest("[data-image-gallery]")
      if (!container) return
      const links = Array.from(
        container.querySelectorAll<HTMLAnchorElement>("a[data-lightbox]")
      )
      const next = parseGallery(
        {
          images: links.map((link) => ({
            src: link.href,
            alt: link.querySelector("img")?.alt ?? "Image",
          })),
          index: links.indexOf(anchor),
        },
        window.location.origin
      )
      if (!next) return
      event.preventDefault()
      event.stopPropagation()
      triggerRef.current = anchor
      if (window.parent !== window) {
        window.parent.postMessage(
          { type: "portfolio-lightbox-open", gallery: next },
          window.location.origin
        )
      } else {
        sourceFrameRef.current = null
        setGallery(next)
      }
    }
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || window.parent !== window)
        return
      if (event.data?.type !== "portfolio-lightbox-open") return
      const frame = Array.from(document.querySelectorAll("iframe")).find(
        (frame) => frame.contentWindow === event.source
      )
      if (!frame) return
      const next = parseGallery(event.data.gallery, window.location.origin)
      if (next) {
        sourceFrameRef.current = frame
        const focused = frame.contentDocument?.activeElement
        triggerRef.current = focused?.matches("a[data-lightbox]")
          ? (focused as HTMLAnchorElement)
          : null
        setGallery(next)
      }
    }
    document.addEventListener("click", openFromClick, true)
    window.addEventListener("message", onMessage)
    return () => {
      document.removeEventListener("click", openFromClick, true)
      window.removeEventListener("message", onMessage)
    }
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (gallery && dialog && !dialog.open) dialog.showModal()
  }, [gallery])

  useEffect(() => {
    // Navigation, including browser back, must never leave an old image covering the page.
    dialogRef.current?.close()
  }, [pathname])

  const move = (direction: number) =>
    setGallery((current) =>
      current
        ? {
            ...current,
            index: nextImageIndex(
              current.index,
              direction,
              current.images.length
            ),
          }
        : null
    )
  const close = () => dialogRef.current?.close()

  return (
    <>
      {children}
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label="Image viewer"
        onClose={() => {
          setGallery(null)
          // A gallery launched from an iframe still returns focus to its image.
          const frame = sourceFrameRef.current
          if (frame?.isConnected) frame.focus({ preventScroll: true })
          if (triggerRef.current?.isConnected)
            triggerRef.current.focus({ preventScroll: true })
          sourceFrameRef.current = null
        }}
        onKeyDown={(event) => {
          event.stopPropagation()
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault()
            move(event.key === "ArrowRight" ? 1 : -1)
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close()
        }}
      >
        {gallery && image && (
          <>
            <header className={styles.toolbar}>
              <span aria-live="polite" aria-atomic="true">
                {gallery.index + 1} / {gallery.images.length}
              </span>
              <a
                href={image.src}
                target="_blank"
                rel="noreferrer"
                className={styles.original}
              >
                Open original ↗
              </a>
              <button
                type="button"
                className={styles.close}
                aria-label="Close image viewer"
                title="Close (Esc)"
                autoFocus
                onClick={close}
              >
                <span aria-hidden="true">×</span>
              </button>
            </header>
            <div
              className={styles.stage}
              onClick={(event) => {
                if (event.target === event.currentTarget) close()
              }}
            >
              {gallery.images.length > 1 && (
                <button
                  type="button"
                  className={`${styles.arrow} ${styles.previous}`}
                  aria-label="Previous image"
                  title="Previous (←)"
                  onClick={() => move(-1)}
                >
                  <span aria-hidden="true">←</span>
                </button>
              )}
              <figure className={styles.figure}>
                {/* Original proportions and formats; images are validated before entering the gallery. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={styles.image}
                />
                <figcaption aria-live="polite">{image.alt}</figcaption>
              </figure>
              {gallery.images.length > 1 && (
                <button
                  type="button"
                  className={`${styles.arrow} ${styles.next}`}
                  aria-label="Next image"
                  title="Next (→)"
                  onClick={() => move(1)}
                >
                  <span aria-hidden="true">→</span>
                </button>
              )}
            </div>
          </>
        )}
      </dialog>
    </>
  )
}
