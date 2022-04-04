import Article from "components/Article"
import Pagination from "components/Pagination"
import { GetServerSideProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { searchInApi, getDefaultData } from "services/search"
import { SeachResult } from "types"
import styles from "./styles.module.scss"

interface Iprops {
  info: SeachResult
  noResults: boolean
}

export default function Search({ info, noResults }: Iprops) {
  const router = useRouter()
  const { search, page } = router.query

  if (!page || Array.isArray(page)) return null

  return (
    <>
      <section>
        {noResults ? (
          <h1 className={styles.title}>
            ¡No hay artículos relacionados con el término de búsqueda!
          </h1>
        ) : (
          <h1 className={styles.title}>
            {search} ({info.size} resultados)
          </h1>
        )}
        <ul className={styles.list}>
          {info.data?.map((elem) => (
            <Link href={`/article/${elem.id}`} key={elem.id}>
              <a>
                <Article data={elem} />
              </a>
            </Link>
          ))}
        </ul>
      </section>
      <footer>
        <Pagination currentPage={parseInt(page)} totalPages={info.pages} />
      </footer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { search, page, important } = context.query
  if (!search) return { notFound: true }
  if (Array.isArray(search)) return { notFound: true }
  if (Array.isArray(page)) return { notFound: true }
  const data: SeachResult = await searchInApi({
    search: search,
    page: page || "1",
    important: !!important,
  })
  if (data.size === 0) {
    const defaultData = await getDefaultData()
    return { props: { info: defaultData, noResults: true } }
  }
  return { props: { info: data, noResults: false } }
}
