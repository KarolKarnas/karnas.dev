import Image from "next/image"
import styles from "./page.module.scss"
import Link from "next/link"
import type { Metadata, ResolvingMetadata } from "next"
import useIcon from "@/hooks/useIcon"
import { SocialItem } from "@/utils/types"
import { gitHub, link } from "@/utils/icons"
import StackIcons from "@/app/_components/stack-icons/stack-icons"
import LinkCard from "@/app/_components/link-card/link-card"
import { SOCIAL_ITEMS } from "@/utils/constants"
import { getAllProjects, getProjectBySlug } from "@/lib/api"

export default async function Page(props: Params) {
  const params = await props.params
  const project = getProjectBySlug(params.slug)
  
  const icons = useIcon(project.icons_stack)
  const socialItemLive: SocialItem = {
    link: project.live_demo,
    short_link: "Live Demo",
    icon: link.icon,
  }
  const socialItemGithub: SocialItem = {
    link: project.repo,
    short_link: "Github Repo",
    icon: gitHub.icon,
  }

  return (
    <div className={styles.container}>
      <div className={styles["text-container"]}>
        <h1>{project.title}</h1>
        <StackIcons icons={icons} />
        <h2>{project.sub_title}</h2>
        <ul className={styles.links}>
          <LinkCard socialItem={socialItemLive} color="light" />
          <LinkCard socialItem={socialItemGithub} color="light" />
        </ul>
      </div>
      <Link
        className={styles.imgWrapper}
        href={project.main_image}
        target="blank"
      >
        <Image
          src={project.main_image}
          width={1920}
          height={1080}
          alt={`${project.title}`}
        />
      </Link>
      <div className={styles["content-container"]}>
        <h3>{project.content_title}</h3>
        <p>{project.content}</p>

        <div className={styles.technologies}>
          <h3>Technologies Used</h3>
          <StackIcons icons={icons} texts />
        </div>

        {project.fields.map((field, index) => (
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
              <Link
                className={styles.imgWrapper}
                href={field.image}
                target="blank"
              >
                <Image
                  src={field.image}
                  width={1200}
                  height={673}
                  alt={`${field.title}`}
                />
              </Link>
            ) : null}

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
            {field.second_content ? <p>{field.second_content}</p> : null}
            {project.fields.length > index + 1 ? <hr /> : null}
          </section>
        ))}
        <div className={styles.details}>
          <h3>Technologies Used</h3>
          <StackIcons icons={icons} texts />
          <h3>Check live or the code</h3>
          <ul className={styles.links}>
            <LinkCard socialItem={socialItemLive} color="light" />
            <LinkCard socialItem={socialItemGithub} color="light" />
          </ul>
        </div>

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
  const project = getProjectBySlug(params.slug)

  return {
    title: project.title,
    description: project.content.slice(0, 200),
    openGraph: {
      images: [project.main_image],
    },
  }
}


export async function generateStaticParams() {
  const projects = getAllProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}