import SearchBar from "components/SearchBar"
import { ReactNode } from "react"

interface Iprops {
  children: ReactNode
}

export default function Layout({ children }: Iprops) {
  return (
    <>
      <SearchBar />
      {children}
    </>
  )
}
