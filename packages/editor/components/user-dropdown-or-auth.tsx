"use client"
import { useKodAuth } from '@kod/lib/hoc'
import { Button, Skeleton, UserAvatar } from '@kod/ui'
import Link from 'next/link'

const UserDropdownOrAuth = () => {
    const { isAuthenticated, loading, user } = useKodAuth()

    if (loading) {
        return (
            <Skeleton className='w-20 h-10' />
        )
    }
    return (isAuthenticated && user ? (
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
    )
    )
}

export default UserDropdownOrAuth