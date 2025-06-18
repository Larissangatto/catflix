"use client"
import React,{ useEffect, useState } from 'react'
import styles from './HighlightVideo.module.css'
import { getRandomItem, objectToArray } from '@/helpers/helpers'
import Link from 'next/link'
const videos = {
    "0db9RTlTMbQ": {
      "title": "Dicas de Roupas Femininas DIY",
      "description": "Transforme seu guarda-roupa com ideias simples e brilhantes. Este vídeo traz tutoriais fáceis para criar peças estilosas sem gastar muito.",
      "tags": ["Documentários", "Como as Coisas São Feitas"]
    },
    "Ma8bDh6ZGT4": {
      "title": "Ideias Simples com Cimento e PVC",
      "description": "Aprenda truques engenhosos para criar objetos úteis e decorativos usando cimento e tubos de PVC. Perfeito para quem gosta de DIY.",
      "tags": ["Documentários", "Como as Coisas São Feitas"]
    },
    "n6o7p8q9r0s": {
        "title": "Tecnologia em Pauta - Novidades da Semana",
        "description": "Discussão sobre as últimas novidades e tendências do mundo da tecnologia, incluindo lançamentos e debates atuais.",
        "tags": ["Podcasts", "Tecnologia", "Novidades"]
    },
    "t1u2v3w4x5y": {
        "title": "Saúde Mental Hoje - Como lidar com ansiedade",
        "description": "Conversa aprofundada sobre estratégias para lidar com a ansiedade no dia a dia, com dicas práticas e depoimentos.",
        "tags": ["Podcasts", "Saúde Mental", "Bem-estar"]
    },  
    "k1l2m3n4o5p": {
        "title": "Clássicos do Rock - Os Maiores Sucessos",
        "description": "Uma coletânea dos melhores clássicos do rock que marcaram gerações.",
        "tags": ["Músicas", "Rock", "Clássicos"]
    }, 
    "vc6vs-l5dkc": {
        "title": "Panic! At The Disco: I Write Sins Not Tragedies [OFFICIAL VIDEO]",
        "description": "Vídeo oficial da música 'I Write Sins Not Tragedies' da banda Panic! At The Disco, do álbum 'A Fever You Can't Sweat Out'. Disponível pela DCD2 Records / Fueled By Ramen.",
        "tags": ["Músicas", "Rock", "Videoclipe Oficial"]
    },
    "q2r3s4t5u6v": {
        "title": "The Legend of Zelda: Breath of the Wild - Gameplay",
        "description": "Exploração de mundo aberto e aventuras no Zelda BOTW.",
        "tags": ["Jogos", "Zelda", "Aventura"]
    },
    "y7z8a9b0c1d": {
        "title": "Gameplay Cyberpunk 2077 - Modo História",
        "description": "Aventura completa e narrativa detalhada do jogo Cyberpunk 2077.",
        "tags": ["Jogos", "Cyberpunk 2077", "RPG"]
    }
}
export default function HighlightVideo({tag}){
    const [ video, setVideo ] = useState(null)
    useEffect (() => {
        const videosList = objectToArray(videos)
            .filter(video => tag == undefined || video.tags.includes(tag))
        setVideo(getRandomItem(videosList))
    }, [])
    return(
        video && 
        <div className={styles.video}>
            <div className={styles.thumbnail} style={{backgroundImage: `url(https://img.youtube.com/vi/${video.key}/maxresdefault.jpg), url(https://img.youtube.com/vi/${video.key}/default.jpg)`}}>
            </div>
            <div className={styles.details}>
                <h2 className={styles.title}>{video.title}</h2>
                <p className={styles.description}>{video.description}</p>
                <a href ='#'className={styles.play}>Assistir</a>
            </div>
        </div>
    )
}