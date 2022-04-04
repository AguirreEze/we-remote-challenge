const baseURL = "https://beta.mejorconsalud.com"

export const getArticleData = (id: string) => {
  return fetch(`${baseURL}/wp-json/mc/v3/posts/${id}`).then((data) =>
    data.json()
  )
}
