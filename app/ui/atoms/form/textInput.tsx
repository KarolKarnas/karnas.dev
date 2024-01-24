"use client"

import * as Form from "@radix-ui/react-form"
import styles from "./textInput.module.scss"
import { SyntheticEvent, useState } from "react"

type Props = {
  name: string
  title: string
  originalValue?: string
  readOnly?: boolean
  required?: boolean
}

const TextInput = ({ name, title, originalValue, readOnly, required=false }: Props) => {

  const [value, setValue] = useState(originalValue || '')
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
        <input
          className={styles.Input}
          type="text"
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          readOnly={readOnly}
        />
      </Form.Control>
    </Form.Field>
  )
}

export default TextInput
