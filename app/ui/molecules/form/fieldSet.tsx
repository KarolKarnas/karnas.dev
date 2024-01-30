"use client"

import styles from "./fieldSet.module.scss"
import TextInput from "../../atoms/form/textInput"
import FileInput from "../../atoms/form/fileInput"
import Textarea from "../../atoms/form/textarea"
import ArrayInput from "../../atoms/form/arrayInput"
import { Field } from "@/app/utils/types"
import Image from "next/image"

type Props = {
  index: number
  originalItem?: Field
}

const FieldSet = ({ index, originalItem }: Props) => {
  // console.log(originalItem)
  return (
    <div
      className={`${styles.FieldSet} ${index % 2 === 0 ? styles.even : styles.odd}`}
    >
      <h3>Field Set {index}</h3>
      <TextInput
        name={`fieldTitle`}
        title="Title"
        originalValue={originalItem?.title}
      />
      <Textarea
        name={`fieldContent`}
        title="Content"
        originalValue={originalItem?.content}
      />
      <ArrayInput
        name={`fieldList`}
        title="List"
        originalValue={originalItem?.list}
      />
      <Textarea
        name={`fieldSecondContent`}
        title="Second Content"
        originalValue={originalItem?.second_content}
      />

      <TextInput
        name="fieldImagePath"
        title={`Original Image Path ${index}`}
        originalValue={originalItem?.image}
        readOnly
      />

      {originalItem?.image ? (
        <div className={styles.oriMainImage}>
          <h4>Original Image fieldset {index}</h4>
          <Image
            src={originalItem.image}
            width={600}
            height={374}
            alt={originalItem?.title || `field image ${index}`}
          />
        </div>
      ) : null}
      <ArrayInput
        name={`fieldLink`}
        title="Links"
        originalValue={
          originalItem?.links
            ? originalItem.links.map((item) => item.link)
            : undefined
        }
      />
      <FileInput name={`fieldImage`} title="Image" />
    </div>
  )
}

export default FieldSet
