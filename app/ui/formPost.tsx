"use client"

import * as Form from "@radix-ui/react-form"
import styles from "./formPost.module.scss"
import { SyntheticEvent, useState } from "react"

import { createPost } from "../lib/actions"

const FormPost = () => {
  return (
    <div className={styles.container}>
      <Form.Root action={createPost} className={styles.FormRoot}>
        <Form.Field className={styles.FormField} name="username">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className={styles.FormLabel}>Username</Form.Label>
            <Form.Message className={styles.FormMessage} match="valueMissing">
              Please enter your Username
            </Form.Message>
            <Form.Message className={styles.FormMessage} match="typeMismatch">
              Please provide a valid Username
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className={styles.Input} type="text" required />
          </Form.Control>
        </Form.Field>
        <Form.Field className={styles.FormField} name="password">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className={styles.FormLabel}>Password</Form.Label>
            <Form.Message className={styles.FormMessage} match="valueMissing">
              Please enter your password
            </Form.Message>
            <Form.Message className={styles.FormMessage} match="typeMismatch">
              Please provide a valid password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className={styles.Input} type="text" required />
          </Form.Control>
        </Form.Field>

        <Form.Submit asChild>
          <button className={styles.Button} style={{ marginTop: 10 }}>
            Create Post
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  )
}

export default FormPost
