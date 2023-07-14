import { MainFooter } from '@/components/footer'
import { MainHeader } from '@/components/header'
import React from 'react'

type Props = React.PropsWithChildren<{}>

const layout = ({
    children
}: Props) => {
    return (
        <>
            <MainHeader />
            {children}
            <MainFooter />
        </>
    )
}

export default layout