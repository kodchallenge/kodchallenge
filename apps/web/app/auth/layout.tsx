import React from "react";

export default function AuthLayout({
  children,
}: React.PropsWithChildren<{}>) {

  return (
    <main className='min-h-screen container flex flex-col items-center justify-center bg-[url("/images/auth-bg.png")]'>
      <div className='flex flex-col items-center justify-center space-y-4 py-2'>
        {children}
      </div>
    </main>
  )
}
