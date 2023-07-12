"use client"
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

type Props = React.PropsWithChildren<{
    title?: string;
    description?: string;
    info?: string;
    footer?: React.ReactNode;
}>

const AuthCard = ({
    title = "KodChallenge",
    description = "",
    info = "",
    children,
    footer
}: Props) => {
    return (
        <Card className="w-[350px] z-10">
            <CardHeader className='text-center'>
                <Link href={"/"} className='flex-1 w-full'>
                    <Logo className='w-full h-12' />
                </Link>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>
                        {description}
                    </CardDescription>
                )}
                {info && (
                    <p className='text-muted-foreground'>
                        {info}
                    </p>
                )}
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {footer && (
                <CardFooter className='flex flex-col space-y-3'>
                    {footer}
                </CardFooter>
            )}
        </Card>
    )
}

export default AuthCard