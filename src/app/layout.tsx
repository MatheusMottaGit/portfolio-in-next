import { GithubProvider } from '@/contexts/GithubContext'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata = {
  title: 'Matheus - Dev',
  description: 'My official portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} font-nunito bg-base flex justify-center`}>
        <GithubProvider>
          {children}
        </GithubProvider>
      </body>
    </html>
  )
}
