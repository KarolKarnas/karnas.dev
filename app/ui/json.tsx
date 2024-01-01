import styles from "./json.module.scss"
import { FakeJson } from "../utils/types"

type Props = {
  code: FakeJson[]
}
const Json = ({ code }: Props) => {
  return (
    <div className={styles.code}>
      <span className={styles.text_yellow}>&#123;</span>
      <ul>
        {code.map((item, index) => (
          <li key={index}>
            <span className={styles.text_blue}>&#34;{item.title}&#34;</span>
            <span className={styles.text_white}>: </span>
            {typeof item.value === "string" ? (
              <>
                <span>&#34;{item.value}&#34;</span>
                <span className={styles.text_white}>
                  {index === code.length - 1 ? "" : ","}
                </span>
              </>
            ) : (
              <>
                <span className={styles.text_pink}>&#123;</span>
                <ul>
                  {item.value.map((item2, index2) => (
                    <li key={index2}>
                      <span className={styles.text_blue}>
                        &#34;{item2.title}&#34;
                      </span>
                      <span className={styles.text_white}>: </span>
                      {typeof item2.value === "string" ? (
                        <>
                          <span>&#34;{item2.value}&#34;</span>
                          <span className={styles.text_white}>
                            {index2 === item.value.length - 1 ? "" : ","}
                          </span>
                        </>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <span className={styles.text_pink}>&#125;</span>
              </>
            )}
          </li>
        ))}
      </ul>
      <span className={styles.text_yellow}>&#125;</span>
    </div>
  )
}
export default Json
