import Link from "next/link"
import styles from "./layout.module.css"
import "./globals.css"
import "./theme.css"
import ThemeToggle from "@/components/ThemeToggle"
import { ThemeProvider } from "@/contexts/ThemeContext"

export const metadata = {
  title: "Catflix",
  description: "A melhor organização de vídeos do YouTube",
}

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="pt">
        <body className={styles.body}>
          <header className={styles.header}>
            <Link className={styles.h1Link} href="/"><img src='./favicon.ico'/><h1>Catflix</h1><ThemeToggle/></Link>
            <nav className={styles.nav}>
              <Link href="/videos">📽️Vídeos</Link>
              <Link href="/musics">🎧Músicas</Link>
              <Link href="/podcasts">🎙️Podcasts</Link>
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
