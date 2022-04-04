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
          <Link href={getSearchURL(search, 1, !!important)}>
            <li className={styles.item}>
              <a>{"<<"}</a>
            </li>
          </Link>
          <Link href={getSearchURL(search, currentPage - 1, !!important)}>
            <li className={styles.item}>
              <a>{"<"}</a>
            </li>
          </Link>
        </>
      )}
      {pageNumbers.map((page) => (
        <Link href={getSearchURL(search, page, !!important)}>
          <li
            key={page}
            className={page === currentPage ? styles.itemSelected : styles.item}
          >
            <a>{page}</a>
          </li>
        </Link>
      ))}
      {currentPage < totalPages && (
        <>
          <Link href={getSearchURL(search, currentPage + 1, !!important)}>
            <li className={styles.item}>
              <a>{">"}</a>
            </li>
          </Link>
          <Link href={getSearchURL(search, totalPages, !!important)}>
            <li className={styles.item}>
              <a>{">>"}</a>
            </li>
          </Link>
        </>
      )}
    </ul>
  )
}
