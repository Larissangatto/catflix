"use client"
import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle(){
    const [ themeLight, setThemeLight ] = useState(false)
    useEffect(()=>{
        document.documentElement.setAttribute(
            'data-theme',
            themeLight? 'light':'dark'
        )
    },[themeLight])
    return(
        <button className={styles.toggle} onClick={()=> setThemeLight(!themeLight)}>
            {themeLight? '🐈':'🐈‍⬛'}
        </button>

    )
}