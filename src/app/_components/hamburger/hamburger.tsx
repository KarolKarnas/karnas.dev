import type { Dispatch, SetStateAction } from "react"
import styles from "./hamburger.module.scss"

type Props = {
  setShowSideNav: Dispatch<SetStateAction<boolean>>
  showSideNav: boolean
}
export default function Hamburger({ setShowSideNav, showSideNav }: Props) {
  return (
    <button
      type="button"
      className={styles.container}
      onClick={() => setShowSideNav(!showSideNav)}
      aria-label={showSideNav ? "Close explorer" : "Open explorer"}
      aria-expanded={showSideNav}
      aria-controls="file-explorer"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        {showSideNav ? (
          <path d="m6 6 12 12M6 18 18 6" />
        ) : (
          <path d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  )
}
