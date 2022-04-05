import Link from "next/link"
import { useRouter } from "next/router"
import { getSearchURL } from "services/search"
import styles from "./styles.module.scss"

interface Iprops {
  currentPage: number
  totalPages: number
}

function getPages(current: number, total: number) {
  if (current > total) return []
  let pages = [current]
  let contPrev = current
  let contNext = current
  while (pages.length < 8) {
    contPrev--
    contNext++
    if (contPrev >= 1) pages = [contPrev, ...pages]
    if (contNext <= total) pages = [...pages, contNext]
    if (contPrev < 1 && contNext > total) return pages
  }
  return pages
}

export default function Pagination({ currentPage, totalPages }: Iprops) {
  const router = useRouter()
  const { search, important } = router.query

  const pageNumbers = getPages(currentPage, totalPages)

  return (
    <ul className={styles.list}>
      {currentPage !== 1 && (
        <>
          <Link href={getSearchURL(search as string, 1, !!important)}>
            <a>
              <li key={"<<"} className={styles.item}>
                {"<<"}
              </li>
            </a>
          </Link>
          <Link
            href={getSearchURL(search as string, currentPage - 1, !!important)}
          >
            <a>
              <li key={"<"} className={styles.item}>
                {"<"}
              </li>
            </a>
          </Link>
        </>
      )}
      {pageNumbers.map((page) => (
        <Link
          href={getSearchURL(search as string, page, !!important)}
          key={page}
        >
          <a>
            <li
              className={
                page === currentPage ? styles.itemSelected : styles.item
              }
            >
              {page}
            </li>
          </a>
        </Link>
      ))}
      {currentPage < totalPages && (
        <>
          <Link
            href={getSearchURL(search as string, currentPage + 1, !!important)}
          >
            <a>
              <li key={">"} className={styles.item}>
                {">"}
              </li>
            </a>
          </Link>
          <Link href={getSearchURL(search as string, totalPages, !!important)}>
            <a>
              <li key={">>"} className={styles.item}>
                {">>"}
              </li>
            </a>
          </Link>
        </>
      )}
    </ul>
  )
}
