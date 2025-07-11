"use client"
import React,{ useEffect, useRef, useState } from 'react'
import styles from './HighlightVideo.module.css'
import { getRandomItem, getVideos} from '@/helpers/helpers'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import YouTubeVideoThumb from './YouTubeVideoThumb'

export default function HighlightVideo({tag}){
    const router = useRouter()
    const [ video, setVideo ] = useState(null)
    const videoList = useRef()

    useEffect (() => {
        async function fetchVideos() {
            videoList.current = await getVideos(tag)
                setVideo(getRandomItem(videoList.current))
        }
        fetchVideos()
    }, [tag])

    function onLuckyClick(event){
        const video = getRandomItem(videoList.current)
        router.push(`/player/${video.key}`)
        event.preventDefault()
    }

    return(
        video && 
        <div className={styles.video}>
            <YouTubeVideoThumb className={styles.thumbnail}
            vYouTube={video.key}/>
            <div className={styles.details}>
                <h2 className={styles.title}>{video.title}</h2>
                <p className={styles.description}>{video.description}</p>
                <Link href ={`/player/${video.key}`} className={styles.play}>Assistir</Link>
                <Link href ='#' onClick={onLuckyClick} className={styles.lucky}>Aleatório</Link>
            </div>
        </div>
    )
}