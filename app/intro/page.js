import Link from 'next/link';
import Navigation from '../../components/navigation';
import styles from '../../styles/Page.module.css'

const Intro = () => {
    return (
        <main className={styles.main}>
            <Navigation activePage="intro" />
            <h1>Hey, this is "My Introduction" page</h1>
            <p>Hello my name is Alamgir, and I am a 4th year student at University of Toronto...</p>
            {/* Video upload form and video display */}
            <h3>
                <Link href="/">Back</Link>
            </h3>
        </main>
    );
};

export default Intro;