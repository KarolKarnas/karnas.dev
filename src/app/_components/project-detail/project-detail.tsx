import Image from "next/image"
import Link from "next/link"
import styles from "./project-detail.module.scss"
import getIcons from "@/utils/icon-utils"
import { gitHub, link } from "@/icons"
import { Project, SocialItem } from "@/utils/types"
import AuthorFooter from "../author-footer/author-footer"
import DetailFields from "../detail-fields/detail-fields"
import LinkCard from "../link-card/link-card"
import StackIcons from "../stack-icons/stack-icons"

type Props = { project: Project }

const ProjectDetail = ({ project }: Props) => {
  const icons = getIcons(project.icons_stack)
  const socialItemLive: SocialItem | null = project.live_demo
    ? { link: project.live_demo, short_link: "Live Demo", icon: link.icon }
    : null
  const socialItemGithub: SocialItem | null = project.repo
    ? { link: project.repo, short_link: "Github Repo", icon: gitHub.icon }
    : null

  return (
    <div className={styles.container}>
      <div className={styles["text-container"]}>
        <h1>{project.title}</h1>
        <StackIcons icons={icons} />
        <h2>{project.sub_title}</h2>
        <ul className={styles.links}>
          {socialItemLive && (
            <LinkCard socialItem={socialItemLive} color="light" />
          )}
          {socialItemGithub && (
            <LinkCard socialItem={socialItemGithub} color="light" />
          )}
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
          alt={project.title}
        />
      </Link>
      <div className={styles["content-container"]}>
        <h3>{project.content_title}</h3>
        <p>{project.content}</p>

        <div className={styles.technologies}>
          <h3>Technologies Used</h3>
          <StackIcons icons={icons} texts />
        </div>

        <DetailFields fields={project.fields} fallbackTitle={project.title} />

        <div className={styles.details}>
          <h3>Technologies Used</h3>
          <StackIcons icons={icons} texts />
          {(socialItemLive || socialItemGithub) && (
            <h3>Check live or the code</h3>
          )}
          <ul className={styles.links}>
            {socialItemLive && (
              <LinkCard socialItem={socialItemLive} color="light" />
            )}
            {socialItemGithub && (
              <LinkCard socialItem={socialItemGithub} color="light" />
            )}
          </ul>
        </div>

        <AuthorFooter />
      </div>
    </div>
  )
}

export default ProjectDetail
