"use client"

import * as Form from "@radix-ui/react-form"
import styles from "./formPost.module.scss"
import { useState } from "react"
import TextInput from "../../atoms/form/textInput"
import FieldSet from "../../molecules/form/fieldSet"
import { createPost } from "../../../lib/actions"
import FileInput from "../../atoms/form/fileInput"
import ArrayInput from "../../atoms/form/arrayInput"
import ButtonSubmit from "../../atoms/form/buttonSubmit"
import MainHeading from "../../atoms/mainHeading"

const FormPost = () => {
  const [fields, setFields] = useState(1)
  return (
    <div className={styles.container}>
      <MainHeading color="blue">Create a new post Sir!</MainHeading>
      <Form.Root action={createPost} className={styles.FormRoot}>
        {/* <Test /> */}
        <div className={styles.col1}>
          <TextInput name="title" title="Title" />
          <TextInput name="shortTitle" title="Short Title" />
          <TextInput name="subTitle" title="Sub Title" />
          <TextInput name="slug" title="Slug" />
          <FileInput name="mainImage" title="Main Image" required={true} />
          <TextInput name="category" title="Category" />
          <ArrayInput name="tags" title="Tags" />
        </div>
        <div className={styles.col2}>
          <TextInput name="contentTitle" title="Content Title" />
          <TextInput name="content" title="Content" />
          {Array.from({ length: fields }).map((item, index) => (
            <FieldSet key={index} index={index} />
          ))}
          <button
            className={styles.addButton}
            type="button"
            onClick={() => setFields(fields + 1)}
          >
            <span>Add Field +</span>
          </button>
          <Form.Submit asChild>
            <ButtonSubmit color="orange" text="Submit" type="submit" />
          </Form.Submit>
        </div>
      </Form.Root>
    </div>
  )
}

export default FormPost
