"use client"
import { useState, useEffect } from 'react'
import styles from './VideoTag.module.css'
import { getVideos, objectToArray, removeDuplicates } from '@/helpers/helpers'
import VideoList from './VideoList'

export default function VideoTags({tag}){
    const [tags, setTags ]= useState([])
    useEffect (() => {
            async function fetchVideos() {
           
                const videosList = await getVideos(tag)
                const tagList = removeDuplicates( videosList
                    .map(video =>video.tags)
                    .flat()
                    .sort())
                    .filter(tag => tag !== 'Jogos' && tag !== 'Músicas'&& tag !== 'Podcasts' && tag !== 'Documentários')
                setTags(tagList)
            }
            fetchVideos()
        }, [])
    return(
        tags.map(tag => (
            <div key={tag} className={styles.tag}>
                <h3 className={styles.title}>{tag}</h3>
                < VideoList tag = {tag}/>
            </div>
        ))
    )
}
