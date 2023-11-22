"use client";
import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from './navigation-menu'
import Link from 'next/link'
import React from 'react'

type Props = React.PropsWithChildren<{
    href: string
}>

export const NavItem = ({
    href,
    children
}: Props) => {
    return (
        <NavigationMenuItem>
            <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {children}
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    )
}