"use client"

import styles from "./formDeleteProject.module.scss"
import { deleteProject } from "@/app/lib/actions"
import Button from "../../atoms/button"

type Props = {}
const FormDeleteProject = ({ slug }: { slug: string }) => {
  const deleteProjectWithSlug = deleteProject.bind(null, slug)

  const handleDelete = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    )
    if (confirmDelete) {
      deleteProjectWithSlug()
    }
  }

  return (
    <form className={styles.container} onSubmit={(e) => handleDelete(e)}>
      <Button color="pink" text="Delete" />
    </form>
  )
}

export default FormDeleteProject
