import styles from './nav.module.css'

// Fontes do google default next
import { Lobster } from 'next/font/google'
const lobster = Lobster({
    weight: ['400'], 
    subsets: ['latin'] 
})

export default function Header(){
    return (
        <header className={styles.navbar}>
            <div className={styles.container}>

                <div className={styles.logo}>
                    <h1 className={lobster.className}>Agência Fake</h1>
                </div>
                <div className={styles.menu}>
                    <a href='#' className={styles.link}>Home</a>
                    <a href='#' className={styles.link}>Sobre Nós</a>
                    <a href='#' className={styles.link}>Serviços</a>
                    <a href='#' className={styles.botao}>Fale Conosco</a>
                </div>
            </div>
        </header>
    )
}