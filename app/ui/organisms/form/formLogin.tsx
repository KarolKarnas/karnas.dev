"use client"

import * as Form from "@radix-ui/react-form"
import styles from "./formLogin.module.scss"

import { authenticate } from "@/app/lib/actions"

import { useFormState, useFormStatus } from "react-dom"

const FormLogin = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
  return (
    <div className={styles.container}>
      {/* <h1>Please log in to continue.</h1> */}
      <Form.Root action={dispatch} className={styles.FormRoot}>
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
              Please enter your Email
            </Form.Message>
            <Form.Message className={styles.FormMessage} match="typeMismatch">
              Please provide a valid Email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className={styles.Input}
              type="email"
              required
              placeholder="Enter your email"
            />
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
            <input
              className={styles.Input}
              type="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </Form.Control>
        </Form.Field>

        <Form.Submit asChild>
          <button className={styles.Button} style={{ marginTop: 10 }}>
            Login
          </button>
        </Form.Submit>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </Form.Root>
    </div>
  )
}

export default FormLogin