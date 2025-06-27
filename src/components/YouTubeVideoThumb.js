'use client'
import { useEffect, useState } from "react"

export default function YouTubeVideoThumb({ className, vYouTube }) {
    const [thumbnail, setThumbnail] = useState(`https://img.youtube.com/vi/${vYouTube}/mqdefault.jpg`)
    useEffect(()=>{
        const url = `https://img.youtube.com/vi/${vYouTube}/maxresdefault.jpg`
        const image = new Image()
        image.onload=() =>{
            if(image.width> 200){
                setThumbnail(image.src)
            }
        }
        image.src =url
    },[vYouTube])


    return (         
        <div className={className} style={{ backgroundImage: `url(${thumbnail})` }}>
        </div>
    )
}

