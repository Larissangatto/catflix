"use client"
import { useState, useEffect } from 'react'
import styles from './VideoList.module.css'
import { getVideos } from '@/helpers/helpers'

export default function VideoList({tag}){
    const [videos, setVideos ]= useState([])
    useEffect (() => {
            async function fetchVideos() {
           
                const videosList = await getVideos(tag)
                setVideos(videosList)
            }
            fetchVideos()
        }, [])
    return(
        <div className={styles.list}>
            {videos.map(video => (
                <div key={video.key} className={styles.video}>
                    <h3 className={styles.title}>{video.title}</h3>
                </div>
            ))}
        </div>
    )
}
