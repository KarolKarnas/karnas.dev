"use client"

import * as Form from "@radix-ui/react-form"
import styles from "./fileInput.module.scss"


type Props = {
  name: string,
  title: string,
  required?: boolean
}

const FileInput = ({name, title, required}: Props) => {
  return (
    <Form.Field className={styles.FormField} name={name}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Form.Label className={styles.FormLabel}>{title}</Form.Label>
        <Form.Message className={styles.FormMessage} match="valueMissing">
          Please enter your {title}
        </Form.Message>
        <Form.Message className={styles.FormMessage} match="typeMismatch">
          Please provide a valid {title}
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input type="file" className={styles.Input} required={required} accept="image/png, image/gif, image/jpeg, image/jpg"/>
      </Form.Control>
    </Form.Field>
  )
}

export default FileInput
