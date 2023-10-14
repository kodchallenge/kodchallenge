"use client"
import { useKodAuth } from '@kod/lib/hoc'
import { Button, Skeleton, UserAvatar } from '@kod/ui'
import Link from 'next/link'
import React from 'react'


const UserAuthContainer = ({ loading, children }: React.PropsWithChildren<{ loading: boolean }>) => (
    <>
        {loading ? (
            <Skeleton className='w-full h-10' />
        ) : (
            children
        )}
    </>
)

const UserDropdownOrAuth = () => {
    const { isAuthenticated, loading, user } = useKodAuth()
    console.log(user)
    return (
        <UserAuthContainer loading={loading}>
            {isAuthenticated && user ? (
                <UserAvatar
                    avatar={user.avatar}
                    username={user.username}
                    loading={false}
                />
            ) : (
                <Link className='hover:no-underline' href={`/auth/login`}>
                    <Button size={"sm"}>
                        Giriş Yap
                    </Button>
                </Link>
            )}
        </UserAuthContainer>
    )
}

export default UserDropdownOrAuth