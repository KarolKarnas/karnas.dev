"use client"

import * as Form from "@radix-ui/react-form"
import styles from "./formPost.module.scss"
import { useState } from "react"
import TextInput from "../../atoms/form/textInput"
import FieldSet from "../../molecules/form/fieldSet"
import { createPost, editPost } from "../../../lib/actions"
import FileInput from "../../atoms/form/fileInput"
import ArrayInput from "../../atoms/form/arrayInput"
import ButtonSubmit from "../../atoms/form/buttonSubmit"
import { Post } from "@/app/utils/types"
import Image from "next/image"

type Props = {
  post?: Post
}

const FormPost = ({ post }: Props) => {
  const [fields, setFields] = useState(post?.fields.length || 1)
// console.log(post?.fields)
  return (
    <Form.Root action={post ? editPost: createPost} className={styles.FormRoot}>
      {post ? (
        //EDIT FORM
        <>
          <div className={styles.col1}>
            <TextInput name="title" title="Title" originalValue={post.title} />
            <TextInput
              name="shortTitle"
              title="Short Title"
              originalValue={post.short_title}
            />
            <TextInput
              name="subTitle"
              title="Sub Title"
              originalValue={post.sub_title}
            />
            <TextInput name="slug" title="Slug" originalValue={post.slug} readOnly />
            <TextInput name="mainImagePath" title="Main Image Path" originalValue={post.main_image} readOnly />
            <div className={styles.oriMainImage}>
              <h4>Original Main Image</h4>
              <Image
                src={post.main_image}
                width={400}
                height={500}
                alt={post.short_title}
              />
            </div>
            <FileInput name="mainImage" title="Main Image" required={false} />
            <TextInput
              name="category"
              title="Category"
              originalValue={post.category}
            />
            <ArrayInput name="tags" title="Tags" originalValue={post.tags} />
          </div>
          <div className={styles.col2}>
            <TextInput
              name="contentTitle"
              title="Content Title"
              originalValue={post.content_title}
            />
            <TextInput
              name="content"
              title="Content"
              originalValue={post.content}
            />

            {Array.from({ length: fields }).map((item, index) => (
              <FieldSet
                key={index}
                index={index}
                originalItem={post.fields[index]}
              />
            ))}

            <button
              className={styles.addButton}
              type="button"
              onClick={() => setFields(fields + 1)}
            >
              <span>Add Field +</span>
            </button>
            <Form.Submit asChild>
              <ButtonSubmit color="orange" text="Update" type="submit" />
            </Form.Submit>
          </div>
        </>
      ) : (
        // CREATE NEW FORM
        <>
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
        </>
      )}
    </Form.Root>
  )
}

export default FormPost
