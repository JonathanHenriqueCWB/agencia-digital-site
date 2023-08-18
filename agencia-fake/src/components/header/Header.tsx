import Image from 'next/image'
import styles from './header.module.css'
import img  from '../../../public/img-headline.png'
import Link from 'next/link'

export default function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.headline}>
                <h2 className={styles.titulo1}>você achou a melhor</h2>
                <h2 className={styles.titulo2}>Agência Digital</h2>
                <p className={styles.texto}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima architecto eos,
                     officiis consectetur totam ipsam doloribus at nemo quas reprehenderit libero 
                     officia minus commodi, iure nulla. Hic consequatur omnis veniam!
                </p>
                <Link href='#' className={styles.btn}>Contrate agora</Link>
            </div>
            <div className={styles.imgHeadline}>
                <Image src={img} fill priority alt="Picture of the author" />
            </div>
        </header>
    )
}