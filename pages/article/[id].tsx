import { GetServerSideProps } from "next"
import { getArticleData } from "services/article"
import { ArticleType } from "types"
import sanitizeHtml from "sanitize-html"
import styles from "./styles.module.scss"

interface Iprops {
  data: ArticleType
}

export default function Article({ data }: Iprops) {
  const date = new Date(data.published)
  return (
    <article className={styles.container}>
      <h1>{data.title}</h1>
      <div className={styles.tagsContainer}>
        <h2>Tags :</h2>
        <ul className={styles.tags}>
          {data.tags.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul>
      </div>
      <span className={styles.date}>Publicado {date.toDateString()}</span>

      <div
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.content) }}
      ></div>
      {data.author && <h2>Published by: {data.author.name}</h2>}
      <h2>Bibliografia</h2>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.bibliography) }}
      ></div>
    </article>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!
  if (!id) return { notFound: true }
  const data = await getArticleData(Array.isArray(id) ? id[0] : id)
  return { props: { data: data } }
}
