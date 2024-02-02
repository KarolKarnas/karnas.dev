import { fetchPostBySlug } from "@/app/lib/data"
import Image from "next/image"
import styles from "./page.module.scss"
import { SOCIAL_ITEMS } from "@/app/utils/constants"
import LinkCard from "@/app/ui/atoms/linkCard"
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata, ResolvingMetadata } from 'next'

type PropsMetadata = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: PropsMetadata,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug
  // fetch data
  const post = await fetchPostBySlug(slug)

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: post.title,
    description: post.content,
    openGraph: {
      images: [`${post.main_image}`, ...previousImages],
    },
  }
}


export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const post = await fetchPostBySlug(slug)
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
        {/* <p>{post.tags}</p>
        <p>{post.category}</p> */}
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
                alt={`field ${index} image`}
              />
            ) : null}
            {field.second_content ? <p>{field.second_content}</p> : null}
            {field.links ? (
              // component
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

        {/* <Image
          src={post.main_image}
          width={800}
          height={1000}
          alt={`main image`}
        /> */}

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
