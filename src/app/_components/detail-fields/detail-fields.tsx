import Image from "next/image"
import Link from "next/link"
import { Field } from "@/utils/types"
import LinkCard from "../link-card/link-card"
import styles from "./detail-fields.module.scss"

type Props = {
  fields: Field[]
  fallbackTitle: string
}

const DetailFields = ({ fields, fallbackTitle }: Props) => {
  return (
    <>
      {fields.map((field, index) => (
        <section key={index} className={styles.section}>
          {field.title ? <h3>{field.title}</h3> : null}
          {field.content ? <p>{field.content}</p> : null}
          {field.list ? (
            <ul className={styles.listContainer}>
              {field.list.map((item, liIndex) => (
                <li key={liIndex}>{item}</li>
              ))}
            </ul>
          ) : null}
          {field.image ? (
            <Link
              className={styles.imgWrapper}
              href={field.image}
              target="blank"
            >
              <Image
                src={field.image}
                width={1200}
                height={673}
                alt={field.title ?? fallbackTitle}
              />
            </Link>
          ) : null}
          {field.links ? (
            <ul className={styles.linksContainer}>
              {field.links.map((item, i) => (
                <LinkCard
                  key={i}
                  socialItem={{ link: item.link, short_link: item.short_link }}
                  color="light"
                />
              ))}
            </ul>
          ) : null}
          {field.second_content ? <p>{field.second_content}</p> : null}
          {fields.length > index + 1 ? <hr className={styles.hr} /> : null}
        </section>
      ))}
    </>
  )
}
export default DetailFields
