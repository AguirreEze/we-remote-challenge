const baseURL = "https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search="

interface SearchObject {
  search: string
  page: string
  important?: boolean
}

export function searchInApi<T>({
  search,
  page,
  important,
}: SearchObject): Promise<T> {
  let searchURL = `${baseURL}${search}&page=${page}`
  if (important) searchURL = searchURL.concat(`&orderby=relevance`)
  return fetch(searchURL, { method: "GET" }).then((data) => data.json())
}
const regEx = /\s+/g

export function getSearchURL(
  search: string,
  page: string,
  important: boolean
): string {
  const dataFromImput = search.toLowerCase().trim().replaceAll(regEx, "+")
  if (dataFromImput === "") return "/"
  if (important)
    return `/search?search=${dataFromImput}&page=${page || 1}&important=true`
  return `/search?search=${dataFromImput}&page=${page || 1}`
}

export function getDefaultData() {
  return fetch(
    "https://beta.mejorconsalud.com/wp-json/mc/v3/posts?orderby=date&order=desc",
    { method: "GET" }
  ).then((data) => data.json())
}
