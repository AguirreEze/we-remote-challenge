import type { NextPage } from "next"
import styles from "./styles.module.scss"

const Home: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>We Remote challenge</h1>
      <p className={styles.description}>
        Type on the search bar at the top and click search! (enter works as
        well)
      </p>
    </>
  )
}

export default Home
