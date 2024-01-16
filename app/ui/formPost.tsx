"use client"

import * as Form from "@radix-ui/react-form"
import styles from "./formPost.module.scss"
import { SyntheticEvent, useState } from "react"

const FormPost = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log("email", email)
  }
  return (
    <div className={styles.container}>
      <Form.Root className={styles.FormRoot} onSubmit={(e) => handleSubmit(e)}>
        <Form.Field className={styles.FormField} name="email">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className={styles.FormLabel}>Email</Form.Label>
            <Form.Message className={styles.FormMessage} match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className={styles.FormMessage} match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className={styles.Input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className={styles.FormField} name="question">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className={styles.FormLabel}>Question</Form.Label>
            <Form.Message className={styles.FormMessage} match="valueMissing">
              Please enter a question
            </Form.Message>
          </div>
          <Form.Control asChild>
            <textarea className={styles.Textarea} required />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className={styles.Button} style={{ marginTop: 10 }}>
            Post question
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  )
}

export default FormPost
