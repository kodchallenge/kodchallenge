import React from "react";

export default function AuthLayout({
  children,
}: React.PropsWithChildren<{}>) {

  return (
    <main className='min-h-screen flex flex-col items-center justify-center'>
      <div className='-z-10 absolute top-0 left-0 w-full h-full bg-[url("/assets/images/home-bg.png")] bg-center bg-no-repeat bg-cover opacity-20 '></div>
      <div className="container">
        <div className='flex flex-col items-center justify-center space-y-4 py-2'>
          {children}
        </div>
      </div>
    </main>
  )
}
