import localFont from 'next/font/local'
import Link from "next/link"
import styles from "./layout.module.css"
import "./globals.css"
import "./fonts.css"
import "./theme.css"
import ThemeToggle from "@/components/ThemeToggle"
import { ThemeProvider } from "@/contexts/ThemeContext"

export const metadata = {
  title: "Catflix",
  description: "A melhor organização de vídeos do YouTube",
}

const irish = localFont({src:'../fonts/irish.woff2',variable: '--irish-font'})
export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="pt">
        <body className={`${styles.body} ${irish.variable}`}>
          <header className={styles.header}>
            <Link className={styles.h1Link} href="/"><h1 className=  'knewave-regular'>Catflix</h1><img src='./favicon.ico'/></Link>
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
