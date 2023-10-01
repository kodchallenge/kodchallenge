import { HamburgerMenuIcon } from '@kod/icons'
import { Button, KodLogo, UserAvatar } from '@kod/ui'
import Link from 'next/link'
import React from 'react'
import ProblemList from './problem-list'
import ThemeToggleButton from './theme-toggle-button'

type Props = {
    title?: string;
    logo?: (args: any) => React.JSX.Element;
}
const Header = ({
    title,
    logo: Logo = KodLogo
}: Props) => {
    const user = null;
    return (
        <header className='flex shadow items-center justify-between px-4 py-2 bg-background'>
            <div className='flex items-center justify-start space-x-3 e-header-start w-auto md:w-[300px]'>
                <Link href={"/"} className='no-underline'>
                    <Logo />
                </Link>
                <ProblemList
                    trigger={(
                        <Button variant={"ghost"}>
                            <HamburgerMenuIcon className='mr-2' />
                            Problem Listesi
                        </Button>
                    )}
                />
            </div>
            <div className='e-header-center text-center'>
                {title && (
                    <h1 className='font-semibold'>
                        {title}
                    </h1>
                )}
            </div>
            <div className='flex items-center justify-end space-x-3 e-header-end w-auto md:w-[300px]'>
                <div>
                    <ThemeToggleButton />
                </div>
                <div>
                    {user ? (
                        <UserAvatar
                            avatar={user.avatar}
                            username={user.username}
                            loading={false}
                        />
                    ) : (
                        <Link className='hover:no-underline' href={`/login`}>
                            <Button size={"sm"}>
                                Giriş Yap
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header