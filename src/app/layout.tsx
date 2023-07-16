
import clsx from 'clsx'
import './globals.css'

import '@/assets/scss/kodchallenge.scss'
import { MainHeader } from '@/components/header'
import { MainFooter } from '@/components/footer'
import { ThemeProvider } from '@/themes/ThemeProvider'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='darks'>
      <body className='font-nunito text-base'>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
