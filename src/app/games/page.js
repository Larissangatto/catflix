import HighlightVideo from '@/components/HighlightVideo'
import styles from './page.module.css'
import VideoTags from '@/components/VideoTag'

export async function generateMetadata(){
    return{
title:  `🎮Jogos -  Catflix`
    }
}
export default function GamesPage(){
    return(
        <>
            <HighlightVideo tag ='Jogos'/>
            <VideoTags tag='Jogos'/>
        </>
        )
}