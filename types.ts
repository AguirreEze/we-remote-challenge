interface Categories {
  name: string
}
interface Article {
  id: number
  title: string
  categories: Categories[]
}

export interface SeachResult {
  data: Article[]
  size: number
  pages: number
  headline: string
  featured_media: {
    thumbnail: string
  }
}
