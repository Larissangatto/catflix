'use client'
import YouTube from 'react-youtube'
import styles from './page.module.css'
import { useParams } from 'next/navigation'

export default function PlayerPage(){
    const {vYouTube} = useParams()
    return(
        <div className={styles.player}>
            <YouTube videoId={vYouTube}
            opts={{
                playerVars:{
                    autoplay:1,
                    rel:0,  
                }
            }}/>
        </div>
    )
}