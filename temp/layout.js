import './globals.css'
import { Inter, Be_Vietnam_Pro, Quattrocento } from 'next/font/google'
import { Providers } from "./providers";

const inter = Be_Vietnam_Pro({ subsets: ['latin'], weight: ["100"] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
