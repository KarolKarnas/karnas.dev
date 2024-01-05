import { fetchBlogBySlug } from "@/app/lib/data"
import Image from "next/image"
import styles from "./page.module.scss"

type Props = {}
export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const post = await fetchBlogBySlug(slug)

  // if (!invoice) {
  //   notFound();
  // }
  return (
    <div className={styles.container}>
      <Image src={post.main_image} width={400} height={500} alt="Main image" />
      <h1>{post.title}</h1>
      <h4>{post.sub_title}</h4>
      <p>{post.content}</p>
      {post.fields.map((field, index) => (
        <section key={index}>
          {field.title ? <h3>{field.title}</h3> : null}
          {field.content ? <p>{field.content}</p> : null}
          {field.image ? (
            <Image
              src={field.image}
              width={500}
              height={500}
              alt={`field ${index} image`}
            />
          ) : null}
        </section>
      ))}
    </div>
  )
}
