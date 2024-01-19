import MainHeading from "@/app/ui/atoms/mainHeading"
import styles from "./page.module.scss"
import FormPost from "@/app/ui/organisms/form/formPost"
import { fetchPostBySlug } from "@/app/lib/data"

export default async function About({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const post = await fetchPostBySlug(slug)
  // console.log(Array.isArray(post.tags))
  return (
    <div className={styles.container}>
      <MainHeading color="blue">Edit post Sir!</MainHeading>
      <FormPost post={post}/>
    </div>
  )
}
