import Image from 'next/image'
import styles from './not-found.module.css'
export default function NotFoundPage(){
    return(
        <div className={styles.notFound}>
            <h2> 404 | Página não encontrada </h2>
            <Image src='/notfound.png' width={1200} height={600} alt='Cachorros com olhos arregalados olhando para a página não encontrada'/>

        </div>
    )
}