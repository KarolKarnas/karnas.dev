"use client"

import styles from "./formDeletePost.module.scss"
import { deletePost } from "@/app/lib/actions"
import Button from "../../atoms/button"

type Props = {}
const FormDeletePost = ({ slug }: { slug: string }) => {
  const deletePostWithSlug = deletePost.bind(null, slug)

  const handleDelete = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    )
    if (confirmDelete) {
      deletePostWithSlug()
    }
  }

  return (
    <form className={styles.container} onSubmit={(e) => handleDelete(e)}>
      <Button color="pink" text="Delete" />
    </form>
  )
}

export default FormDeletePost
