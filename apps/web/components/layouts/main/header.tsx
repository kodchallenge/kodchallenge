"use client";
import React from 'react'
import { Button, NavItem, NavigationMenu, NavigationMenuList } from "@kod/ui";
import Link from "next/link";
import { LogoWithLabel } from '@/components/logo';

const navs = [
    { name: "Problemler", to: "/problems" },
    { name: "Yarışmalar", to: "/contests" },
    { name: "Etkinlikler", to: "/challenges" },
    { name: "Projeler", to: "/projects" },
]

const Header = () => {
    const user = null;
    return (
        <header className={""}>
            <div className="md:flex flex-col hidden">
                <NavigationMenu className="flex justify-between items-center py-5 container">
                    <Link href={"/"} className="hover:no-underline">
                        <LogoWithLabel />
                    </Link>
                    <div className="items-center justify-center text-sm lg:text-base">
                        <NavigationMenuList className="flex justify-center items-center">
                            {navs.map(nav => (
                                <NavItem href={nav.to}>
                                    {nav.name}
                                </NavItem>
                            ))}
                        </NavigationMenuList>
                    </div>
                    <div className="flex items-center space-x-2">
                        {!user ? (
                            <>
                                <Link href={"/auth/login"}>
                                    Giriş Yap
                                </Link>
                                <Link href={"/auth/register"}>
                                    <Button>Kayıt Ol</Button>
                                </Link>
                            </>
                        ) : (
                            <Link href={"/@" + user.username} className="btn btn-primary">Hesabım</Link>
                        )}
                    </div>
                </NavigationMenu>
            </div>
        </header>
    )
}

export default Header
