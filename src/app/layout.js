import Link from "next/link"
import "./globals.css"

export const metadata = {
  title: "Catflix",
  description: "A melhor organização de vídeos do YouTube",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <header>
          <h1>Catflix</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/videos">Vídeos</Link>
            <Link href="/musics">Músicas</Link>
            <Link href="/podcasts">Podcasts</Link>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>&copy; 2025 Catflix - Larissa Nathanna Gatto</p>

        </footer>
      </body>
    </html>
  )
}
