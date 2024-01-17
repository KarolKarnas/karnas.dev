"use client"

import styles from "./fieldSet.module.scss"
import TextInput from "../atoms/textInput"

type Props = {
  index: number
}

const FieldSet = ({ index }: Props) => {
  return (
    <div className={styles.FieldSet}>
      <h3>Field Set {index}</h3>
      <TextInput name={`fieldTitle`} title="Title" />
      <TextInput name={`fieldContent`} title="Content" />
      <TextInput name={`fieldImage`} title="Image" />
    </div>
  )
}

export default FieldSet
