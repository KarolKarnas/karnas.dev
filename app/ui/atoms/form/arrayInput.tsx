"use client"

import * as Form from "@radix-ui/react-form"
import styles from "./arrayInput.module.scss"
import { ChangeEvent, SyntheticEvent, useState } from "react"

type Props = {
  name: string
  title: string
  originalValue?: string[]
}

const ArrayInput = ({ name, title, originalValue }: Props) => {
  const [values, setValues] = useState<string[]>(originalValue || [])

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
        <textarea
          className={styles.Input}
          value={values.toString()}
          name="tags"
          required
          onChange={(e) =>
            setValues(e.target.value.split(",").map((val) => val.trim()))
          }
        />
      </Form.Control>
      <p>{JSON.stringify(values)}</p>
    </Form.Field>
  )
}

export default ArrayInput

// interface PropsStringArrayInput {
//   values: string[]
//   onChange: (values: string[]) => void
// }

// const StringArrayInput = ({ values, onChange }: PropsStringArrayInput) => {
//   const textValue = values.join(",")

//   console.log(textValue)
//   const onChangeTextValue = ({ target }: ChangeEvent<HTMLInputElement>) => {
//     onChange(target.value.split(","))
//   }

//   return (
//     <input
//       className={styles.Input}
//       value={textValue}
//       name="tags"
//       required
//       onChange={onChangeTextValue}
//     />
//   )
// }
