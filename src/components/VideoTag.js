"use client"
import { useState, useEffect } from 'react'
import styles from './VideoTag.module.css'
import { objectToArray, removeDuplicates } from '@/helpers/helpers'

export default function VideoTags({tag}){
    const [tags, setTags ]= useState([])
    useEffect (() => {
            async function fetchVideos() {
                
                const response = await fetch('/data/database.json',{
                    next:{
                        revalidate:30 
                    }
                })
                const videos = await response.json()
                const videosList = objectToArray(videos)
                    .filter(video => tag == undefined || video.tags.includes(tag))
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
            </div>
        ))
    )
}
