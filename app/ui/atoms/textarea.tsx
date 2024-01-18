"use client"

import * as Form from "@radix-ui/react-form"
import styles from "./textInput.module.scss"


type Props = {
  name: string,
  title: string
}

const Textarea = ({name, title}: Props) => {
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
        <textarea className={styles.Textarea} required />
      </Form.Control>
    </Form.Field>
  )
}

export default Textarea
