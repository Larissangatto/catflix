import HighlightVideo from '@/components/HighlightVideo'
import styles from './page.module.css'
import VideoTags from '@/components/VideoTag'
export default function MusicsPage(){
    return(
        <>
            <HighlightVideo tag='Músicas' />
            <VideoTags tag= 'Músicas' />
    
        </>
    )
}