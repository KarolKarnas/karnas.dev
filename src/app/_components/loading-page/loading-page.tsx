import styles from "./loading-page.module.scss"

type Props = { label?: string }

export default function LoadingPage({ label = "Loading content" }: Props) {
  return (
    <div
      className={styles.loading}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className={styles.srOnly}>{label}</span>
      <div aria-hidden="true">
        <div className={styles.header}>
          <div className={`${styles.bone} ${styles.eyebrow}`} />
          <div className={`${styles.bone} ${styles.title}`} />
          <div className={`${styles.bone} ${styles.description}`} />
          <div className={`${styles.bone} ${styles.descriptionShort}`} />
        </div>
        <div className={styles.meta}>
          <span className={styles.bone} />
          <span className={styles.bone} />
        </div>
        <div className={styles.grid}>
          {[0, 1].map((index) => (
            <div key={index} className={styles.card}>
              <div className={`${styles.bone} ${styles.cover}`} />
              <div className={styles.body}>
                <div className={`${styles.bone} ${styles.eyebrow}`} />
                <div className={`${styles.bone} ${styles.cardTitle}`} />
                <div className={`${styles.bone} ${styles.line}`} />
                <div className={`${styles.bone} ${styles.line}`} />
                <div className={`${styles.bone} ${styles.descriptionShort}`} />
                <div className={styles.tags}>
                  {[0, 1, 2, 3].map((tag) => (
                    <span key={tag} className={styles.bone} />
                  ))}
                </div>
                <div className={styles.footer}>
                  <span className={styles.bone} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
