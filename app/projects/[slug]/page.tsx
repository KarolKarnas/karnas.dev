import { fetchProjectBySlug } from "@/app/lib/data"
import Image from "next/image"
import styles from "./page.module.scss"
import { SOCIAL_ITEMS } from "@/app/utils/constants"
import LinkCard from "@/app/ui/atoms/linkCard"
import { SocialItem } from "@/app/utils/types"
import useIcon from "@/app/hooks/useIcon"
import StackIcons from "@/app/ui/atoms/stackIcons"
import { gitHub, link } from "@/app/utils/icons"

type Props = {}
export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const project = await fetchProjectBySlug(slug)
  const icons = useIcon(project.icons_stack)
  const socialItemLive: SocialItem = {
    link: project.live_demo,
    short_link: "Live Demo",
    icon: link,
  }
  const socialItemGithub: SocialItem = {
    link: project.repo,
    short_link: "Github Repo",
    icon: gitHub,
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

      <Image
        src={project.main_image}
        width={1920}
        height={1080}
        alt={`main image`}
      />
      <div className={styles["content-container"]}>
        <h3>{project.content_title}</h3>
        <p>{project.content}</p>
    
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
            <ul>
              {field.links
                ? field.links.map((item, index) => (
                    <LinkCard
                      key={index}
                      socialItem={{
                        link: item.link,
                        short_link: item.short_link,
                      }}
                      color="light"
                    />
                  ))
                : null}
            </ul>
          </section>
        ))}
            <div className={styles.details}>
              <h3>Technologies Used</h3>
               <StackIcons icons={icons} />
              <h3>Check live or the code</h3>
               <ul className={styles.links}>
        <LinkCard socialItem={socialItemLive} color="light" />
        <LinkCard socialItem={socialItemGithub} color="light" />
      </ul>
              {/* <Json code={project.json_stack} /> */}
            </div>


        <div className={styles["author-container"]}>
          <div>
            <span>Karol Karnas</span>
            <span>Fullstack Developer</span>
          </div>
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
