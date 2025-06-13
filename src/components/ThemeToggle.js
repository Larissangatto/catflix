"use client"
import { useContext, useEffect, useState } from 'react'
import styles from './ThemeToggle.module.css'
import { ThemeContext } from '@/contexts/ThemeContext'

export default function ThemeToggle(){
    const { themeLight, setThemeLight } = useContext(ThemeContext)   

    return(
        <button className={styles.toggle} onClick={()=> setThemeLight(!themeLight)}>
            {themeLight? '🐈':'🐈‍⬛'}
        </button>

    )
}