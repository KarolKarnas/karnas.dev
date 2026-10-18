import styles from "./project-visual.module.scss"

export function hasProjectVisual(slug: string) {
  return ["dms-housing-authority", "data-bid-machine"].includes(slug)
}

export default function ProjectVisual({ slug }: { slug: string }) {
  const documents = slug === "dms-housing-authority"
  return (
    <div
      className={styles.visual}
      data-kind={documents ? "documents" : "campaigns"}
      aria-hidden="true"
    >
      <span className={styles.label}>
        SYSTEM OVERVIEW <span>↗</span>
      </span>
      <div className={styles.flow}>
        {(documents
          ? ["Intake", "Extract", "Validate"]
          : ["Campaigns", "Signals", "Insights"]
        ).map((label, index) => (
          <div className={styles.node} key={label}>
            <div className={styles.symbol}>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              >
                {documents ? (
                  index === 0 ? (
                    <>
                      <path d="M9 4h10l5 5v19H9z" />
                      <path d="M18 4v6h6M12 16h9M12 20h7" />
                    </>
                  ) : index === 1 ? (
                    <>
                      <rect x="5" y="5" width="22" height="22" rx="5" />
                      <path d="M11 11h3v3h-3zM18 11h3M11 20h10M18 15h3" />
                    </>
                  ) : (
                    <>
                      <path d="m8 16 5 5 11-12" />
                      <circle cx="16" cy="16" r="13" />
                    </>
                  )
                ) : index === 0 ? (
                  <>
                    <path d="M7 26V15h4v11M14 26V8h4v18M21 26V4h4v22" />
                  </>
                ) : index === 1 ? (
                  <>
                    <path d="M3 17h6l4-10 6 18 4-12h6" />
                  </>
                ) : (
                  <>
                    <path d="m16 3 3 9 9 4-9 3-3 10-3-10-10-3 10-4z" />
                  </>
                )}
              </svg>
            </div>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <span>
          {documents ? "DOCUMENT INTELLIGENCE" : "CAMPAIGN INTELLIGENCE"}
        </span>
        <span>{documents ? "AZURE" : "AWS"}</span>
      </div>
    </div>
  )
}
