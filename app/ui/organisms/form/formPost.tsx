"use client"

import * as Form from "@radix-ui/react-form"
import styles from "./formPost.module.scss"
import { SyntheticEvent, useState } from "react"
import TextInput from "../../atoms/form/textInput"
import FieldSet from "../../molecules/form/fieldSet"
import { plus } from "../../../utils/icons"
import { createPost } from "../../../lib/actions"
import FileInput from "../../atoms/form/fileInput"
// import { Test } from "./atoms/arrayInput2"
import ArrayInput from "../../atoms/form/arrayInput"

const FormPost = () => {
  const [fields, setFields] = useState(1)
  return (
    <div className={styles.container}>
      <Form.Root action={createPost} className={styles.FormRoot}>
        {/* <Test /> */}
        <TextInput name="title" title="Title" />
        <TextInput name="shortTitle" title="Short Title" />
        <TextInput name="subTitle" title="Sub Title" />
        <TextInput name="slug" title="Slug" />
        <TextInput name="contentTitle" title="Content Title" />
        <TextInput name="content" title="Content" />
        <FileInput name="mainImage" title="Main Image" required={true} />

        {Array.from({ length: fields }).map((item, index) => (
          <FieldSet key={index} index={index} />
        ))}
        <button
          className={styles.addButton}
          type="button"
          onClick={() => setFields(fields + 1)}
        >
          {plus} Add Field
        </button>

        <TextInput name="category" title="Category" />
        <ArrayInput name="tags" title="Tags" />
        {/* <TextInput name="tags" title="Tags" /> */}

        <Form.Submit asChild>
          <button
            type="submit"
            className={styles.Button}
            style={{ marginTop: 10 }}
          >
            Create Post
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  )
}

export default FormPost