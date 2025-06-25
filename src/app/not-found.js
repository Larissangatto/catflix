import styles from './not-found.module.css'
export default function NotFoundPage(){
    return(
        <div className={styles.notFound}>
            <h2> 404 | Página não encontrada </h2>
            <img src='/notfound.png'/>

        </div>
    )
}