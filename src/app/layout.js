import "./globals.css"

export const metadata = {
  title: "Catflix",
  description: "A melhor organização de vídeos do YouTube",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  )
}
