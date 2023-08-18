import Image from 'next/image'
import styles from './page.module.css'

// Imagem png (public)
import img  from '../../../public/wahts.jpeg'

// Fontes do google default next
import { Lobster } from 'next/font/google'
import Link from 'next/link'
const lobster = Lobster({
    weight: ['400'], 
    subsets: ['latin'] 
})

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.title}>
                <h1 className={lobster.className}>Agência Fake</h1>
                <p>Site construindo com NextJS 13+ e CSS3</p>
            </div>
            <div className={styles.copy}>
                <small>&copy; Todos os direitos reservados</small>
            </div>
            <div className={styles.whats}>
                <Link href={`https://api.whatsapp.com/send?phone=5541998924406&text=Ol%C3%A1,%20peguei%20seu%20contato%20no%20site!`}
                    target='_blanck'
                >
                    <Image src="/whats.png" width={80} height={80} alt="Picture of the author"  />
                </Link>
            </div>
        </footer>
    )
}