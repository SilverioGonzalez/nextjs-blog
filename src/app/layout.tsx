import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/(globalComponents)/navigation'
import Footer from './components/(globalComponents)/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
