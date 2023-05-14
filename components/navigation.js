import styles from '../styles/Page.module.css'
import Link from 'next/link';

export default function Navigation({ activePage }) {
    return (
        <>
            <div className={styles.center}>
                <h1>Alamgir's personal website</h1>
            </div>
            <div className={styles.center}>
                <h2>Hello! Welcome to Alamgir's home, please select your action:</h2>
            </div>

            <div className={styles.grid + styles.center}>
                <div>
                    <h3 className={activePage === 'intro' ? 'active' : ''}>
                        <Link href="/intro">1. My Introduction</Link>
                    </h3>
                    <h3 className={activePage === 'contact' ? 'active' : ''}>
                        <Link href="/contact">2. My Contact</Link>
                    </h3>
                    <h3 className={activePage === 'message' ? 'active' : ''}>
                        <Link href="/message">3. Send a message</Link>
                    </h3>
                </div>
            </div>
        </>
    )
}