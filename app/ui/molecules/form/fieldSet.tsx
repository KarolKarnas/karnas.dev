"use client"

import styles from "./fieldSet.module.scss"
import TextInput from "../../atoms/form/textInput"
import FileInput from "../../atoms/form/fileInput"
import Textarea from "../../atoms/form/textarea"
import { Field } from "@/app/utils/types"
import Image from "next/image"

type Props = {
  index: number
  originalItem?: Field
}

const FieldSet = ({ index,originalItem }: Props) => {
  // console.log(originalItem)
  return (
    <div className={styles.FieldSet}>
      <h3>Field Set {index}</h3>
      <TextInput name={`fieldTitle`} title="Title" originalValue={originalItem?.title}/>
      <Textarea name={`fieldContent`} title="Content" originalValue={originalItem?.content}/>
      {originalItem?.image ?            <div className={styles.oriMainImage}>
      <TextInput name="fieldImagePath" title={`Original Image Path ${index}`} originalValue={originalItem.image} readOnly />
              <h4>Original Image fieldset {index}</h4>
              <Image
                src={originalItem.image}
                width={600}
                height={374}
                alt={originalItem?.title || `field image ${index}`}
              />
            </div>: null }
      <FileInput name={`fieldImage`} title="Image" required={false} />
    </div>
  )
}

export default FieldSet
