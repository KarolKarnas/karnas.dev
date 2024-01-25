"use client"

import * as icons from "../../../utils/icons"
import * as Form from "@radix-ui/react-form"
import styles from "./formProject.module.scss"
import { useState } from "react"
import TextInput from "../../atoms/form/textInput"
import FieldSet from "../../molecules/form/fieldSet"
import { createProject, editProject } from "../../../lib/actions"
import FileInput from "../../atoms/form/fileInput"
import ArrayInput from "../../atoms/form/arrayInput"
import ButtonSubmit from "../../atoms/form/buttonSubmit"
import { Post, Project } from "@/app/utils/types"
import Image from "next/image"

type Props = {
  project?: Project
}

const FormProject = ({ project }: Props) => {
  const [fields, setFields] = useState(project?.fields.length || 1)
  const iconsKeys = Object.keys(icons)
  // console.log(project?.fields)
  return (
    <Form.Root
      action={project ? editProject : createProject}
      // action={project ? editPost : createPost}
      className={styles.FormRoot}
    >
      {project ? (
        //EDIT FORM
        <>
          <div className={styles.col1}>
            <TextInput
              name="title"
              title="Title"
              originalValue={project.title}
              required
            />
            <TextInput
              name="shortTitle"
              title="Short Title"
              originalValue={project.short_title}
              required
            />
            <TextInput
              name="subTitle"
              title="Sub Title"
              originalValue={project.sub_title}
              required
            />
            <TextInput
              name="slug"
              title="Slug"
              originalValue={project.slug}
              readOnly
              required
            />
            <TextInput
              name="mainImagePath"
              title="Main Image Path"
              originalValue={project.main_image}
              readOnly
            />
            <div className={styles.oriMainImage}>
              <h4>Original Main Image</h4>
              <Image
                src={project.main_image}
                width={400}
                height={500}
                alt={project.short_title}
              />
            </div>
            <FileInput name="mainImage" title="Main Image" />

            {/* <div>
              {iconsKeys.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div> */}
            <TextInput
              name="mainIcon"
              title="Main Icon"
              originalValue={project.main_icon}
              required
            />
              <ArrayInput
                name="stack"
                title="Stack"
                originalValue={project.stack}
                required
              />
              <ArrayInput
                name="iconsStack"
                title="Icons Stack"
                originalValue={project.icons_stack}
                required
              />
            <TextInput
              name="liveDemo"
              title="Live Demo"
              originalValue={project.live_demo}
              required
            />
            <TextInput
              name="repo"
              title="Repo"
              originalValue={project.repo}
              required
            />
            <TextInput
              name="category"
              title="Category"
              originalValue={project.category}
              required
            />
            <ArrayInput
              name="tags"
              title="Tags"
              originalValue={project.tags}
              required
            />
          </div>
          <div className={styles.col2}>
            <TextInput
              name="contentTitle"
              title="Content Title"
              originalValue={project.content_title}
              required
            />
            <TextInput
              name="content"
              title="Content"
              originalValue={project.content}
              required
            />

            {Array.from({ length: fields }).map((item, index) => (
              <FieldSet
                key={index}
                index={index}
                originalItem={project.fields[index]}
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
            <TextInput name="title" title="Title" required />
            <TextInput name="shortTitle" title="Short Title" required />
            <TextInput name="subTitle" title="Sub Title" required />
            <TextInput name="slug" title="Slug" required />
            <FileInput name="mainImage" title="Main Image" required />

            <TextInput name="mainIcon" title="Main Icon" required />

            <ArrayInput name="stack" title="Stack" required />
            <ArrayInput name="iconsStack" title="Icons Stack" required />
            <TextInput name="liveDemo" title="Live Demo" required />
            <TextInput name="repo" title="Repo" required />
            <TextInput name="category" title="Category" required />
            <ArrayInput name="tags" title="Tags" required />
          </div>
          <div className={styles.col2}>
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
        </>
      )}
    </Form.Root>
  )
}

export default FormProject
