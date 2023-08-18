import Header from '@/components/header/Header'
import styles from './page.module.css'
import Section from '@/components/section/Section'

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <Section />
        </main>
    )
}
