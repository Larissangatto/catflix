import localFont from 'next/font/local'
import Link from "next/link"
import styles from "./layout.module.css"
import "./globals.css"
import "./fonts.css"
import "./theme.css"
import ThemeToggle from "@/components/ThemeToggle"
import { ThemeProvider } from "@/contexts/ThemeContext"
import Image from 'next/image'

export const metadata = {
  title: "Catflix",
  description: "A melhor organização de vídeos do YouTube",
  openGraph:{
    title: "Catflix",
    description: "A melhor organização de vídeos do YouTube",
    images:['/logo.png']
  }
}

const irish = localFont({src:'../fonts/irish.woff2',variable: '--irish-font'})
export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="pt">
        <body className={`${styles.body} ${irish.variable}`}>
          <header className={styles.header}>

            <Link href="/" className={styles.h1Link}>
              <h1 className="knewave-regular">Catflix</h1>
              < Image  src="/logo.png" alt="Logo" width={100} height={100}/>
            </Link>
            <nav className={styles.nav}>
              <Link href="/videos">📽️Documentários</Link>
              <Link href="/musics">🎧Músicas</Link>
              <Link href="/podcasts">🎙️Podcasts</Link>
              <Link href="/games">🎮Jogos</Link>
            </nav>
          </header>
          <main className={styles.main}>
            {children}
          </main>
          <footer className={styles.footer}>
            <p>&copy; 2025 Catflix - Larissa Nathanna Gatto</p>
            <ThemeToggle/>       
          </footer>
        </body>
      </html>
    </ThemeProvider>
  )
}
