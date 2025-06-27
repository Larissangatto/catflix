'use client'
import styles from './VideoThumb.module.css'
import Link from 'next/link'
import YouTubeVideoThumb from './YouTubeVideoThumb'



export default function VideoThumb({video}){
    return(
        video && <Link href={`/player/${video.key}`} className={styles.video}>
            <YouTubeVideoThumb className={styles.thumbnail}
            vYouTube={video.key}/>
        </Link>
    )

}


