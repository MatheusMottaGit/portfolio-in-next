import './globals.css'

import Profile from '@/components/profile/Profile'

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
      <body className={`${nunito.variable} font-nunito bg-base flex flex-col items-center justify-center`}>
        {/*@ts-expect-error Async Server Component */}
        <Profile />
        {children}
      </body>
    </html>
  )
}
