"use client";
import { MainFooter } from '@/components/footer'
import { MainHeader } from '@/components/header'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation';

import React from 'react'

type Props = React.PropsWithChildren<{}>

const layout = ({
    children
}: Props) => {
    const pathname = usePathname();
    const isEditor = pathname.match(/\/problems\/(.*)/)

    return (
        <>
            <MainHeader />
            {children}
            <MainFooter />
        </>
    )
}

export default layout