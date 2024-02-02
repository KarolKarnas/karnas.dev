import { fetchProjectBySlug } from "@/app/lib/data"
import Image from "next/image"
import styles from "./page.module.scss"
import { SOCIAL_ITEMS } from "@/app/utils/constants"
import LinkCard from "@/app/ui/atoms/linkCard"
import { SocialItem } from "@/app/utils/types"
import useIcon from "@/app/hooks/useIcon"
import StackIcons from "@/app/ui/atoms/stackIcons"
import { gitHub, link } from "@/app/utils/icons"
import Link from "next/link"

type Props = {}
export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const project = await fetchProjectBySlug(slug)
  // console.log(project)
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
      <Link className={styles.imgWrapper} href={project.main_image} target="blank">
        <Image
          src={project.main_image}
          width={1920}
          height={1080}
          alt={`main image`}
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
              <Link className={styles.imgWrapper} href={field.image} target="blank">
                <Image
                  src={field.image}
                  width={1200}
                  height={673}
                  alt={`field ${index} image`}
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
        <Link className={styles.authorName} href='/about'>
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
