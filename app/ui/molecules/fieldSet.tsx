"use client"

import styles from "./fieldSet.module.scss"
import TextInput from "../atoms/textInput"
import FileInput from "../atoms/fileInput"
import Textarea from "../atoms/textarea"

type Props = {
  index: number
}

const FieldSet = ({ index }: Props) => {
  return (
    <div className={styles.FieldSet}>
      <h3>Field Set {index}</h3>
      <TextInput name={`fieldTitle`} title="Title" />
      <Textarea name={`fieldContent`} title="Content" />
      <FileInput name={`fieldImage`} title="Image" />
      {/* <TextInput name={`fieldImage`} title="Image" /> */}
    </div>
  )
}

export default FieldSet
