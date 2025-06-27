"use client"
import { useState, useEffect } from 'react'
import styles from './VideoList.module.css'
import { getVideos } from '@/helpers/helpers'
import VideoThumb from './VideoThumb'

export default function VideoList({tag}){
    const [videos, setVideos ]= useState([])
    useEffect (() => {
            async function fetchVideos() {
           
                const videosList = await getVideos(tag)
                setVideos(videosList)
            }
            fetchVideos()
        }, [tag])
    return(
        <div className={styles.list}>
            {videos.map(video => <VideoThumb key={video.key} video={video}/> )}
        </div>
    )
}
