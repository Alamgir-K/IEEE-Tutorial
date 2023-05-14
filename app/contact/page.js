import Link from 'next/link';
import Navigation from '../../components/navigation';
import styles from '../../styles/Page.module.css'
import Image from 'next/image';

const Contact = () => {
    return (
        <main className={styles.main}>
            <Navigation activePage="contact" />
            <h1>Hey, this is "my contact" page</h1>
            <p>phone number: 1234567</p>
            <p>my Instagram QR code:</p>

            <Image src="/images/instagram-qr.png" alt="instagramQR" width={200} height={200} />

            <Link href="https://www.linkedin.com/in/kalamgir/" target="_blank">
                <Image src="/images/linkedin-icon.png" alt="linkedin" width={50} height={50} />
            </Link>
            {/* GitHub link */}
            <Link href="https://www.github.com/Alamgir-K" target="_blank">
                <Image src="/images/github-icon.png" alt="linkedin" width={50} height={50} />
            </Link>
            <h3>
                <Link href="/">Back</Link>
            </h3>
        </main>
    );
};

export default Contact;