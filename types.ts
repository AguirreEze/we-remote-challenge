interface Categories {
  name: string
}
export interface ArticleType {
  id: number
  title: string
  categories: Categories[]
  headline: string
  featured_media: {
    thumbnail: string
  }
}

export interface SeachResult {
  data: ArticleType[]
  size: number
  pages: number
}
