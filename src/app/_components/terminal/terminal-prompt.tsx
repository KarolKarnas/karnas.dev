import { formatPromptPath } from "./terminal-filesystem"
import styles from "./terminal.module.scss"

export default function TerminalPrompt({ path }: { path: string }) {
  return (
    <span className={styles.promptLine}>
      <span className={styles.prompt}>
        visitor<span className={styles.host}>@karnas.dev</span>
      </span>
      <span className={styles.separator}>:</span>
      <span className={styles.path} title={formatPromptPath(path)}>
        {formatPromptPath(path)}
      </span>
      <span className={styles.dollar}>$</span>
    </span>
  )
}
