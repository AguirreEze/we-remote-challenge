import Link from "next/link"
import { FormEvent, useState } from "react"
import { getSearchURL } from "services/search"

export default function SearchBar() {
  const [input, setInput] = useState<string>("")
  const [important, setImportant] = useState<boolean>(false)
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
      <Link href={getSearchURL(input, "1", important)}>
        <a>
          <button type="submit">search</button>
        </a>
      </Link>
      <label>show important</label>
      <input type="checkbox" onChange={() => setImportant(!important)} />
    </form>
  )
}
