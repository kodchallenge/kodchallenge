
import clsx from 'clsx'
import './globals.css'

import '@/assets/scss/kodchallenge.scss'
import { MainHeader } from '@/components/header'
import { MainFooter } from '@/components/footer'
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
    <html lang="en">
      <body className='font-nunito text-base text-black dark:text-white dark:bg-slate-900'>
        {/* <Theme dataTheme='dark'> */}
        <div className={clsx("dot-points", "full-screen")}></div>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  )
}
