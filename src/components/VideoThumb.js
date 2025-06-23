import styles from './VideoThumb.module.css'

import Link from 'next/link'

export default function VideoThumb({video}){
    return(
        video && <Link href={`/player/${video.key}`} className={styles.video}>
            <div className={styles.thumbnail} style={{backgroundImage: `url(https://img.youtube.com/vi/${video.key}/maxresdefault.jpg), url(https://img.youtube.com/vi/${video.key}/hddefault.jpg)`}}>
            </div>
        </Link>
    )

}


