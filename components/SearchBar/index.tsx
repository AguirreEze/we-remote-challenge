import Link from "next/link"
import { FormEvent, useState } from "react"
import { getSearchURL } from "services/search"

export default function SearchBar() {
  const [input, setInput] = useState<string>("")
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Link href={getSearchURL(input)}>
        <a>
          <button type="submit">search</button>
        </a>
      </Link>
    </form>
  )
}
