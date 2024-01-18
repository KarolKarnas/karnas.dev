"use client"

import * as Form from "@radix-ui/react-form"
import styles from "./formPost.module.scss"
import { SyntheticEvent, useState } from "react"
import TextInput from "./atoms/textInput"
import FieldSet from "./molecules/fieldSet"
import { plus } from "../utils/icons"
import { createPost } from "../lib/actions"

const FormPost = () => {
  const [fields, setFields] = useState(2)
  return (
    <div className={styles.container}>
      <Form.Root action={createPost} className={styles.FormRoot}>
        <TextInput name="title" title="Title" />
        <TextInput name="shortTitle" title="Short Title" />
        <TextInput name="subTitle" title="Sub Title" />

        {Array.from({ length: fields }).map((item, index) => (
          <FieldSet key={index} index={index} />
          ))}
        
          <button className={styles.addButton} type="button" onClick={() => setFields(fields + 1)}>{plus} Add Field</button>
        <Form.Submit asChild>
          <button type="submit" className={styles.Button} style={{ marginTop: 10 }}>
            Create Post
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  )
}

export default FormPost
