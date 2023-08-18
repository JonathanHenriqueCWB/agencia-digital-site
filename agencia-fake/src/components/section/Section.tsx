import styles from './section.module.css'

import Computer from './icons/Computer'
import Smartphone from './icons/Smartphone'
import Marketing from './icons/Marketing'

import { Lobster } from 'next/font/google'
const lobster = Lobster({
    weight: ['400'], 
    subsets: ['latin'] 
})


export default function Section(){
    return (
        <div className={styles.section}>
            <h2 className={lobster.className}>O que podemos fazer pelo seu negócio?</h2>
            <div className={styles.container}>
                <div className={styles.card}>
                    <Computer />
                    <h3>Desenvolvimento de sites</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nobis ipsa est voluptatem, accusamus officiis nihil qui 
                        esse enim architecto neque veniam facere natus excepturi 
                        inventore dignissimos reiciendis quidem vero vel.
                    </p>
                </div>
                <div className={styles.card}>
                    <Smartphone />
                    <h3>Desenvolvimento de Apps</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nobis ipsa est voluptatem, accusamus officiis nihil qui 
                        esse enim architecto neque veniam facere natus excepturi 
                        inventore dignissimos reiciendis quidem vero vel.
                    </p>
                </div>
                <div className={styles.card}>
                    <Marketing />
                    <h3>Marketing Digital</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nobis ipsa est voluptatem, accusamus officiis nihil qui 
                        esse enim architecto neque veniam facere natus excepturi 
                        inventore dignissimos reiciendis quidem vero vel.
                    </p>
                </div>
            </div>
        </div>
    )
}