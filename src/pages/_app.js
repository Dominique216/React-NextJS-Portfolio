import '@/styles/globals.css'
import '../styles/about.css'
import { Oswald } from 'next/font/google'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: '200',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${oswald.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
