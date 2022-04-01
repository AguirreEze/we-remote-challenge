import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { searchInApi } from "services/search"

export default function Search() {
  const router = useRouter()
  const { search } = router.query
  const [response, setResponse] = useState([])
  useEffect(() => {
    searchInApi(search).then(setResponse)
  }, [search])
  return (
    <>
      <h1>
        {search}({response.size} resultados)
      </h1>
      {response?.data?.length ? (
        response?.data?.map((elem) => <h2 key={elem.id}>{elem.title}</h2>)
      ) : (
        <h3>¡No hay artículos relacionados con el término de búsqueda!</h3>
      )}
    </>
  )
}
