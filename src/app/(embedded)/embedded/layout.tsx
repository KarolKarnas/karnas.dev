import styles from "./layout.module.scss"

export default function EmbeddedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className={styles.content}>{children}</main>
}
