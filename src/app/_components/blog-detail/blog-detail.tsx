import getIcons from "@/utils/icon-utils"
import { Post } from "@/utils/types"
import AuthorFooter from "../author-footer/author-footer"
import DetailFields from "../detail-fields/detail-fields"
import StackIcons from "../stack-icons/stack-icons"
import styles from "./blog-detail.module.scss"

type Props = { post: Post }

const BlogDetail = ({ post }: Props) => {
  const icons = post.icons_stack ? getIcons(post.icons_stack) : []

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
        {icons.length > 0 && <StackIcons icons={icons} />}
        <h2>{post.sub_title}</h2>
      </div>

      <div className={styles["content-container"]}>
        <h3>{post.content_title}</h3>
        <p>{post.content}</p>

        <DetailFields fields={post.fields} fallbackTitle={post.title} />

        <AuthorFooter />
      </div>
    </div>
  )
}

export default BlogDetail
