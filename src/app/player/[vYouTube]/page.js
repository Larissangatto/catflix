'use client'
import YouTube from 'react-youtube'
import styles from './page.module.css'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

export default function PlayerPage(){
    const {vYouTube} = useParams()

    useEffect(()=>{
        async function setTitle() {
            const response =await fetch(`/api/video/${vYouTube}`, {method:'POST'})
            const video = await response.json()
            document.title = `${video.title } -${document.title}`}
    setTitle()
    },[vYouTube])
   
    
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