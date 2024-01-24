import { fetchPostBySlug } from "@/app/lib/data"
import Image from "next/image"
import styles from "./page.module.scss"
import { SOCIAL_ITEMS } from "@/app/utils/constants"
import LinkCard from "@/app/ui/atoms/linkCard"
import { notFound } from "next/navigation"

type Props = {}
export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const post = await fetchPostBySlug(slug)
  // console.log(post)
  if (!post) {
    notFound()
  }

  // console.log(post)
  // console.log(typeof post.tags)
  // console.log(Array.isArray(post.tags))

  return (
    <div className={styles.container}>
      <div
        className={styles["image-container"]}
        style={{ backgroundImage: `url(${post.main_image})` }}
      ></div>
      <div className={styles["text-container"]}>
        <div className={styles["date-container"]}>
          <span>{post.author_name}</span>
          <span>{new Date(post.date).toLocaleDateString("en-GB")}</span>
        </div>
        <h1>{post.title}</h1>
        <h2>{post.sub_title}</h2>
      </div>

      <div className={styles["content-container"]}>
        <p>{post.tags}</p>
        <p>{post.category}</p>
        <h3>{post.content_title}</h3>
        <p>{post.content}</p>
        {post.fields.map((field, index) => (
          <section key={index}>
            {field.title ? <h3>{field.title}</h3> : null}
            {field.content ? <p>{field.content}</p> : null}
            {field.list ? (
              <ul>
                {field.list.map((item, liIndex) => (
                  <li key={liIndex}>{item}</li>
                ))}
              </ul>
            ) : null}
            {field.second_content ? <p>{field.second_content}</p> : null}
            {field.image ? (
              <Image
                src={field.image}
                width={1200}
                height={673}
                alt={`field ${index} image`}
              />
            ) : null}
            {field.links ? (
              <ul>
                {field.links.map((item, index) => (
                  <LinkCard
                    key={index}
                    socialItem={{
                      link: item.link,
                      short_link: item.short_link,
                    }}
                    color="light"
                  />
                ))}
              </ul>
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
              <LinkCard key={index} socialItem={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
