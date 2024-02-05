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
    <Form.Root
      action={post ? editPost : createPost}
      className={styles.FormRoot}
    >
      {post ? (
        //EDIT FORM
        <div>
 
            <TextInput
              name="title"
              title="Title"
              originalValue={post.title}
              required
            />
            <TextInput
              name="shortTitle"
              title="Short Title"
              originalValue={post.short_title}
              required
            />
            <TextInput
              name="subTitle"
              title="Sub Title"
              originalValue={post.sub_title}
              required
            />
            <TextInput
              name="slug"
              title="Slug"
              originalValue={post.slug}
              readOnly
            />
            <TextInput
              name="mainImagePath"
              title="Main Image Path"
              originalValue={post.main_image}
              // readOnly
            />
            <div className={styles.oriMainImage}>
              <h4>Original Main Image</h4>
              <Image
                src={post.main_image}
                width={400}
                height={500}
                alt={post.title}
              />
            </div>
            <FileInput name="mainImage" title="Main Image" />
            <TextInput
              name="category"
              title="Category"
              originalValue={post.category}
            />
            <ArrayInput
              name="tags"
              title="Tags"
              originalValue={post.tags}
              required
            />
            <TextInput
              name="contentTitle"
              title="Content Title"
              originalValue={post.content_title}
              required
            />
            <TextInput
              name="content"
              title="Content"
              originalValue={post.content}
              required
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
      ) : (
        // CREATE NEW FORM
        <div>

            <TextInput name="title" title="Title" required />
            <TextInput name="shortTitle" title="Short Title" required />
            <TextInput name="subTitle" title="Sub Title" required />
            <TextInput name="slug" title="Slug" required />
            <FileInput name="mainImage" title="Main Image" required/>
            <TextInput name="category" title="Category" required />
            <ArrayInput name="tags" title="Tags" required />
      
            <TextInput name="contentTitle" title="Content Title" required />
            <TextInput name="content" title="Content" required />
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
      )}
    </Form.Root>
  )
}

export default FormPost
