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
            <a href="/">Home</a>
            <a href="/videos">Vídeos</a>
            <a href="/musics">Músicas</a>
            <a href="/podcasts">Podcasts</a>
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
