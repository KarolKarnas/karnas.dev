import { fetchPostBySlug } from "@/app/lib/data"
import Image from "next/image"
import styles from "./page.module.scss"
import { SOCIAL_ITEMS } from "@/app/utils/constants"
import SocialCard from "@/app/ui/socialCard"

type Props = {}
export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const post = await fetchPostBySlug(slug)

  // if (!invoice) {
  //   notFound();
  // }

  return (
    <div className={styles.container}>
      <div
        className={styles["image-container"]}
        style={{ backgroundImage: `url(${post.main_image})` }}
      ></div>
      <div className={styles["text-container"]}>
        <div className={styles["date-container"]}>
          <span>Karol Karnas</span>
          <span>{new Date(post.date).toLocaleDateString("en-GB")}</span>
        </div>
        <h1>{post.title}</h1>
        <h2>{post.sub_title}</h2>
      </div>

      <div className={styles["content-container"]}>
        <h3>{post.content_title}</h3>
        <p>{post.content}</p>
        {post.fields.map((field, index) => (
          <section key={index}>
            {field.title ? <h3>{field.title}</h3> : null}
            {field.content ? <p>{field.content}</p> : null}
            {field.image ? (
              <Image
                src={field.image}
                width={1200}
                height={673}
                alt={`field ${index} image`}
              />
            ) : null}
          </section>
        ))}

        {/* <Image
          src={post.main_image}
          width={800}
          height={1000}
          alt={`main image`}
        /> */}

        <div className={styles["author-container"]}>
          <div>
            <span>Karol Karnas</span>
            <span>Fullstack Developer</span>
          </div>
          <ul>
            {SOCIAL_ITEMS.map((item, index) => (
              <SocialCard key={index} socialItem={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
