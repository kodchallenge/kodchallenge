"use client"
import '../globals.css'

import '@/assets/scss/kodchallenge.scss'
import DotPoints from '@/components/common/DotPoints'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <DotPoints />
      <main className='min-h-screen container flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center space-y-4 py-2'>
          {children}
        </div>
      </main>
    </>
  )
}
