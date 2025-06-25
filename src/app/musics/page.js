import HighlightVideo from '@/components/HighlightVideo'
import styles from './page.module.css'
import VideoTags from '@/components/VideoTag'
export function generateMetadata(){
    return{
        title: '🎧Músicas -  Catflix'
    }
}
export default function MusicsPage(){
    return(
        <>
            <HighlightVideo tag='Músicas' />
            <VideoTags tag= 'Músicas' />
    
        </>
    )
}