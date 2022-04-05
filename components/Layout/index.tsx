import SearchBar from "components/SearchBar"
import Head from "next/head"
import { ReactNode } from "react"

interface Iprops {
  children: ReactNode
}

export default function Layout({ children }: Iprops) {
  return (
    <>
      <Head>
        <title>We Remote</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <SearchBar />
      </header>
      {children}
    </>
  )
}
