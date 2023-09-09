import React, { PropsWithChildren } from 'react'
import Header from './header'
import Footer from './footer'

const layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default layout