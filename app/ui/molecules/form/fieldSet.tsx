"use client"

import styles from "./fieldSet.module.scss"
import TextInput from "../../atoms/form/textInput"
import FileInput from "../../atoms/form/fileInput"
import Textarea from "../../atoms/form/textarea"

type Props = {
  index: number
}

const FieldSet = ({ index }: Props) => {
  return (
    <div className={styles.FieldSet}>
      <h3>Field Set {index}</h3>
      <TextInput name={`fieldTitle`} title="Title" />
      <Textarea name={`fieldContent`} title="Content" />
      <FileInput name={`fieldImage`} title="Image" required={false} />
      {/* <TextInput name={`fieldImage`} title="Image" /> */}
    </div>
  )
}

export default FieldSet
