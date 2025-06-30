"use client"
import { useState} from 'react'
import styles from './HamburguerMenu.module.css'
import Link from 'next/link'


export default function HamburguerMenu(){
    const [open, setOpen] = useState(false)   

    return(
        <div className={styles.wrapper}>

            <div className={styles.hamburguer} onClick={()=> setOpen(!open)}>☰</div>

            <nav className={`${styles.nav} ${open? styles.open :""}`}>
              <Link href="/videos" onClick={()=> setOpen(false)}>📽️Documentários</Link>
              <Link href="/musics"onClick={()=> setOpen(false)}>🎧Músicas</Link>
              <Link href="/podcasts"onClick={()=> setOpen(false)}>🎙️Podcasts</Link>
              <Link href="/games"onClick={()=> setOpen(false)}>🎮Jogos</Link>
            </nav>
        </div>

    )
}