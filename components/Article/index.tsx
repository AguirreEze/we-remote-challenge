import Image from "next/image"
import { ArticleType } from "types"
import styles from "./styles.module.scss"

interface Iprops {
  data: ArticleType
}
export default function Article({ data }: Iprops) {
  return (
    <section className={styles.container}>
      <Image
        src={data.featured_media.thumbnail}
        height="150"
        width="150"
        layout="responsive"
        alt={"thumbnail"}
      />
      <article>
        <div className={styles.categories}>
          {data.categories.map((categorie) => (
            <span key={categorie.name}>{categorie.name}</span>
          ))}
        </div>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.headline}>{data.headline}</p>
      </article>
    </section>
  )
}
