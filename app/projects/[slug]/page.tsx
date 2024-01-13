import { fetchProjectBySlug } from "@/app/lib/data"
import Image from "next/image"
import styles from "./page.module.scss"
import { SOCIAL_ITEMS } from "@/app/utils/constants"
import SocialCard from "@/app/ui/socialCard"
import { FakeJson, SocialItem } from "@/app/utils/types"
import Json from "@/app/ui/json"
import useIcon from "@/app/hooks/useIcon"
import StackIcons from "@/app/ui/stackIcons"
import { gitHub, link } from "@/app/utils/icons"

type Props = {}
export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const project = await fetchProjectBySlug(slug)
  const icons = useIcon(project.icons_stack)
  const socialItemLive: SocialItem = {
    path: project.live_demo,
    shortUrl: "Live Demo",
    icon: link,
  }
  const socialItemGithub: SocialItem = {
    path: project.repo,
    shortUrl: "Github Repo",
    icon: gitHub,
  }

  return (
    <div className={styles.container}>
      <div className={styles["text-container"]}>

        <h1>{project.title}</h1>
        <StackIcons icons={icons} />
        <h2>{project.sub_title}</h2>
      </div>

      <ul className={styles.links}>
        <SocialCard  socialItem={socialItemLive} />
        <SocialCard socialItem={socialItemGithub} />
      </ul>
      <Image
        src={project.main_image}
        width={1920}
        height={1080}
        alt={`main image`}
      />
      <div className={styles["content-container"]}>
        <h3>{project.content_title}</h3>
        <p>{project.content}</p>
        <Json code={project.json_stack} />

        {project.fields.map((field, index) => (
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
             {field.link ?  <SocialCard socialItem={{path: field.link, shortUrl: field.short_link}} /> : null}
          </section>
        ))}

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
