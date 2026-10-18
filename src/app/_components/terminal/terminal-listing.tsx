import * as icons from "@/icons"
import type { DirectoryListing } from "./terminal-filesystem"
import { formatPromptPath } from "./terminal-filesystem"
import styles from "./terminal.module.scss"

type Props = { listing: DirectoryListing; onSelect: (command: string) => void }

export default function TerminalListing({ listing, onSelect }: Props) {
  const directories = listing.entries.filter(
    (entry) => entry.kind === "directory"
  ).length
  const files = listing.entries.length - directories
  const count = [
    directories ? `${directories} folder${directories === 1 ? "" : "s"}` : "",
    files ? `${files} file${files === 1 ? "" : "s"}` : "",
  ]
    .filter(Boolean)
    .join(" · ")
  return (
    <section
      className={styles.listing}
      aria-label={`Files in ${formatPromptPath(listing.path)}`}
    >
      <div className={styles.listingHeader}>
        <span>{formatPromptPath(listing.path)}</span>
        <span>{count || "Empty directory"}</span>
      </div>
      <ul className={styles.listingGrid} data-detailed={listing.detailed}>
        {listing.entries.map((entry) => (
          <li key={entry.path}>
            <button
              type="button"
              onClick={() =>
                onSelect(
                  `${entry.kind === "directory" ? "cd" : "open"} ${entry.path}`
                )
              }
            >
              <span className={styles.fileIcon} aria-hidden="true">
                {icons[entry.icon].icon}
              </span>
              <span className={styles.fileText}>
                <span
                  className={styles.fileName}
                  data-directory={entry.kind === "directory"}
                >
                  {entry.name}
                  {entry.kind === "directory" ? "/" : ""}
                </span>
                {listing.detailed && entry.title !== entry.name && (
                  <span className={styles.fileDescription}>{entry.title}</span>
                )}
              </span>
              {listing.detailed && entry.date && (
                <time className={styles.fileDate} dateTime={entry.date}>
                  {entry.date.slice(0, 10)}
                </time>
              )}
              <span className={styles.fileArrow} aria-hidden="true">
                {entry.kind === "directory" ? "→" : "↗"}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
