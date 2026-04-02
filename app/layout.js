import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Ampersand',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={poppins.className}>
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
