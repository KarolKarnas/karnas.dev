import Image from "next/image"
import styles from "./page.module.scss"
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata, ResolvingMetadata } from "next"
import { SOCIAL_ITEMS } from "@/utils/constants"
import { getAllPosts, getPostBySlug } from "@/lib/api"
import LinkCard from "@/app/_components/link-card/link-card"

export default async function Page(props: Params) {
  const params = await props.params
  const post = getPostBySlug(params.slug)
  if (!post) {
    notFound()
  }

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
        <h3>{post.content_title}</h3>
        <p>{post.content}</p>
        {post.fields.map((field, index) => (
          <section key={index}>
            {field.title ? <h3>{field.title}</h3> : null}
            {field.content ? <p>{field.content}</p> : null}
            {field.list ? (
              <ul className={styles.ListContainer}>
                {field.list.map((item, liIndex) => (
                  <li key={liIndex}>{item}</li>
                ))}
              </ul>
            ) : null}
            {field.image ? (
              <Image
                src={field.image}
                width={1200}
                height={673}
                alt={`${field.title}`}
              />
            ) : null}
            {field.second_content ? <p>{field.second_content}</p> : null}
            {field.links ? (
              <ul className={styles.LinksContainer}>
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
            {post.fields.length > index + 1 ? <hr /> : null}
          </section>
        ))}

        <div className={styles["author-container"]}>
          <Link className={styles.authorName} href="/about">
            <span>Karol Karnas</span>
            <span>Full Stack Developer</span>
          </Link>
          <ul>
            {SOCIAL_ITEMS.map((item, index) => (
              <LinkCard key={index} socialItem={item} color="light" />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

type Params = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  return {
    title: post.title,
    description: post.content.slice(0, 200),
    openGraph: {
      images: [post.main_image],
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
