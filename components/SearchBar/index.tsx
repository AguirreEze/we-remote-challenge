import Link from "next/link"
import { FormEvent, useState } from "react"
import { getSearchURL } from "services/search"
import styles from "./styles.module.scss"

export default function SearchBar() {
  const [input, setInput] = useState<string>("")
  const [important, setImportant] = useState<boolean>(false)
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputRow}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
        />
        <Link href={getSearchURL(input, "1", important)}>
          <a>
            <button type="submit" className={styles.button}>
              search
            </button>
          </a>
        </Link>
      </div>
      <div>
        <label className={styles.label}>show important</label>
        <input type="radio" onChange={() => setImportant(!important)} />
      </div>
    </form>
  )
}
