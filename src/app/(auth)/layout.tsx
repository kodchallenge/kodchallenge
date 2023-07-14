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
      <main >
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4">
            {children}
          </div>
        </div>
      </main>
    </>
  )
}
