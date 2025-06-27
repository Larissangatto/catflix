import HighlightVideo from '@/components/HighlightVideo'
import styles from'./page.module.css'
import VideoTags from '@/components/VideoTag'

export const metadata= {
    title:"📽️Documentários - Catflix"
}

export default function VideosPage(){
    return(
        <>
            <HighlightVideo tag= 'Documentários'/>
            <VideoTags tag= 'Documentários'/>
        </>
    )
}