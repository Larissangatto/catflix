import HighlightVideo from '@/components/HighlightVideo'
import styles from './page.module.css'
import VideoTags from '@/components/VideoTag'

export async function generateMetadata(){
    return{
title:  `🎙️Podcasts -  Catflix`
    }
}

export default function PodcastsPage(){
    return(
        <>
            <HighlightVideo tag ='Podcasts'/>
            <VideoTags tag ='Podcasts' />
        </>
    )
}