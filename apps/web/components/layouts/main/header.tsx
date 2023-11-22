"use client";
import { LogoWithLabel } from '@/components/logo';
import { logout } from '@kod/features/auth/next';
import { ExitIcon, UserIcon } from '@kod/icons';
import { useKodAuth } from '@kod/lib/hoc';
import {
    Button, DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, NavItem, NavigationMenu, NavigationMenuList, UserAvatar
} from "@kod/ui";
import Link from "next/link";

const navs = [
    { name: "Problemler", to: "/problems" },
    { name: "Yarışmalar", to: "/contests" },
    // { name: "Etkinlikler", to: "/challenges" },
    { name: "Projeler", to: "/projects" },
]

const Header = () => {
    const { isAuthenticated, user } = useKodAuth()

    const UserDropdown = () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost'>
                    <UserAvatar avatar={user.avatar} username={user.username} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Hesabım</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <UserIcon className="mr-2 h-4 w-4" />
                        <span>Profil</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='my-2 bg-destructive text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive' onClick={logout}>
                        <ExitIcon className="mr-2 h-4 w-4" />
                        <span>Çıkış Yap</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )

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
                        {!isAuthenticated ? (
                            <>
                                <Link href={"/auth/login"}>
                                    Giriş Yap
                                </Link>
                                <Link href={"/auth/register"}>
                                    <Button>Kayıt Ol</Button>
                                </Link>
                            </>
                        ) : (
                            // <Link href={"/@" + user.username} className="btn btn-primary">Hesabım</Link>
                            // <UserAvatar avatar={user.avatar} username={user.username} />
                            <UserDropdown />
                        )}
                    </div>
                </NavigationMenu>
            </div>
        </header>
    )
}

export default Header
