interface Categories {
  name: string
}
export interface ArticlePreviewType {
  id: number
  title: string
  categories: Categories[]
  headline: string
  /*eslint-disable */
  featured_media: {
    thumbnail: string
  }
  /* eslint-enable */
}

export interface SeachResult {
  data: ArticlePreviewType[]
  size: number
  pages: number
}

export interface Tags {
  name: string
  id: number
}

export interface ArticleType {
  title: string
  categories: Categories[]
  published: string
  content: string
  tags: Tags[]
  bibliography: string
  author?: {
    name: string
  }
}
