const baseURL = "https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search="

export function searchInApi<T>(data: string): Promise<T> {
  return fetch(`${baseURL}${data}`, { method: "GET" }).then((data) =>
    data.json()
  )
}
const regEx = /\s+/g

export function clearInput(data: string): string {
  return data.toLowerCase().trim().replaceAll(regEx, "+")
}
