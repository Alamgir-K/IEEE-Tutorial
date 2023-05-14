import styles from '../styles/Page.module.css'
import Navigation from '../components/navigation';


export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation activePage="" />
    </main>
  )
}

