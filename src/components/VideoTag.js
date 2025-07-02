"use client"
import { useState, useEffect } from 'react'
import styles from './VideoTag.module.css'
import { getVideos, removeDuplicates } from '@/helpers/helpers'
import VideoList from './VideoList'

export default function VideoTags({ tag }) {
  const [groupedTags, setGroupedTags] = useState({}) 
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchAndGroup() {
      const allVideos = await getVideos() 

      if (!tag) {
        const tagMap = {}

        allVideos.forEach(video => {
          const main = video.tags?.[0]
          const sub = video.tags?.[1]
          if (!main || !sub) return

          if (!tagMap[main]) tagMap[main] = new Set()
          tagMap[main].add(sub)
        })

        // converte Set pra Array
        const grouped = {}
        for (const main in tagMap) {
          grouped[main] = Array.from(tagMap[main])
        }

        setGroupedTags(grouped)
        setVideos(allVideos)
      } else {

        const filtered = allVideos.filter(video => video.tags?.[0] === tag)
        const subtags = removeDuplicates(filtered.map(v => v.tags?.[1]).filter(Boolean))
        setGroupedTags({ [tag]: subtags })
        setVideos(filtered)
      }
    }

    fetchAndGroup()
  }, [tag])

  return (
    <>
      {Object.entries(groupedTags).map(([tag, subtagList]) => (
        <div key={tag} className={styles.section}>
          {!tag && <h2 className={styles.title}>{tag}</h2>}
          {subtagList.map(subtag => (
            <div key={subtag} className={styles.tag}>
              <h3 className={styles.subtitle}>{subtag}</h3>
              <VideoList
                tag={tag}
                subTag={subtag}
                videos={videos.filter(
                  video => video.tags?.[0] === tag && video.tags?.[1] === subtag
                )}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  )
}
