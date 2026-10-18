"use client"

import { useRef } from "react"
import { gear, xMark } from "@/icons"
import { DEFAULT_APPEARANCE, THEMES, useAppearance } from "./appearance-context"
import styles from "./appearance-settings.module.scss"

export default function AppearanceSettings() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const { appearance, update } = useAppearance()
  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        aria-label="Appearance settings"
        title="Appearance settings"
        onClick={() => dialogRef.current?.showModal()}
      >
        {gear.icon}
        <span>Settings</span>
        <span className={styles.current}>
          {THEMES.find((t) => t.id === appearance.theme)?.name}
        </span>
      </button>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="appearance-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close()
        }}
      >
        <div className={styles.panel}>
          <header className={styles.header}>
            <div>
              <span className={styles.eyebrow}>PERSONALIZE YOUR WORKSPACE</span>
              <h2 id="appearance-title">Make yourself at home.</h2>
            </div>
            <button
              type="button"
              autoFocus
              aria-label="Close settings"
              onClick={() => dialogRef.current?.close()}
            >
              {xMark.icon}
            </button>
          </header>
          <p className={styles.intro}>Same portfolio. Your preferred view.</p>
          <fieldset className={styles.themes}>
            <legend>Color theme</legend>
            {THEMES.map((theme) => (
              <label key={theme.id} className={styles.theme}>
                <input
                  type="radio"
                  name="theme"
                  value={theme.id}
                  checked={appearance.theme === theme.id}
                  onChange={() => update({ theme: theme.id })}
                />
                <span
                  className={styles.preview}
                  style={{ background: theme.colors[0] }}
                  aria-hidden="true"
                >
                  <span className={styles.previewSidebar} />
                  <span className={styles.previewCode}>
                    {theme.colors.slice(1).map((color, i) => (
                      <i
                        key={color}
                        style={{ background: color, width: `${70 - i * 14}%` }}
                      />
                    ))}
                  </span>
                </span>
                <span className={styles.themeName}>
                  {theme.name}
                  <span>{appearance.theme === theme.id ? "✓" : ""}</span>
                </span>
                <span className={styles.themeDescription}>
                  {theme.description}
                </span>
              </label>
            ))}
          </fieldset>
          <div className={styles.preference}>
            <label htmlFor="text-size">
              <strong>Text size</strong>
              <span>A comfortable reading distance.</span>
            </label>
            <select
              id="text-size"
              value={appearance.textSize}
              onChange={(e) =>
                update({
                  textSize: e.target.value as typeof appearance.textSize,
                })
              }
            >
              <option value="small">Small</option>
              <option value="default">Default</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div className={styles.preference}>
            <label htmlFor="reduced-motion">
              <strong>Reduce motion</strong>
              <span>Keep transitions to a minimum.</span>
            </label>
            <input
              id="reduced-motion"
              type="checkbox"
              checked={appearance.reducedMotion}
              onChange={(e) => update({ reducedMotion: e.target.checked })}
            />
          </div>
          <footer className={styles.footer}>
            <button type="button" onClick={() => update(DEFAULT_APPEARANCE)}>
              Reset to defaults
            </button>
            <span>Saved on this device</span>
          </footer>
        </div>
      </dialog>
    </>
  )
}
