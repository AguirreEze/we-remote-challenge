import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { searchInApi } from "services/search"
import { SeachResult } from "types"

interface Iprops {
  info: SeachResult
}

export default function Search({ info }: Iprops) {
  const router = useRouter()
  const { search } = router.query

  return (
    <>
      <h1>
        {search}({info.size} resultados)
      </h1>
      {info.data?.length ? (
        info.data?.map((elem) => <h2 key={elem.id}>{elem.title}</h2>)
      ) : (
        <h3>¡No hay artículos relacionados con el término de búsqueda!</h3>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { search, page, important } = context.query
  if (!search) return { notFound: true }
  const data = await searchInApi({
    search: search,
    page: page || "1",
    important: !!important,
  })
  return { props: { info: data } }
}
