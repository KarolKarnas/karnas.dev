import MainHeading from "@/app/ui/atoms/mainHeading"
import styles from "./page.module.scss"
import FormProject from "@/app/ui/organisms/form/formProject"
import { fetchProjectBySlug } from "@/app/lib/data"

export default async function About({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const project = await fetchProjectBySlug(slug)
  // console.log(Array.isArray(post.tags))
  return (
    <div className={styles.container}>
      <MainHeading color="blue">Edit project Sir!</MainHeading>     <FormProject project={project}/>
    </div>
  )
}
