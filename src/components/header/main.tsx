"use client"

import Link from "next/link"

import useScroll from "@/hooks/useScroll"
import { cn } from "@/lib/utils"
import { LogoWithLabel } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import NavItem from "./components/NavItem"
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu"

const navs = [
    { name: "Problemler", to: "/problems" },
    { name: "Yarışmalar", to: "/contests" },
    { name: "Etkinlikler", to: "/events" },
    { name: "Projeler", to: "/projects" },
]

export const MainHeader = () => {
    const scrollY = useScroll()

    return (
        <header className={cn("fixed top-0 right-0 left-0 z-50 duration-500", scrollY > 50 ? "bg-white dark:bg-slate-800 shadow" : "")}>
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
                        {/* {!session ? ( */}
                        <Link href={"/login"}>
                            Giriş Yap
                        </Link>
                        <Link href={"/register"}>
                            <Button>Kayıt Ol</Button>
                        </Link>
                        {/* ) : (
                            <Link href={"/@" + session.user.username} className="btn btn-primary">Hesabım</Link>
                        )} */}
                    </div>
                </NavigationMenu>
            </div>
            <div className="md:hidden flex items-center justify-between py-5 px-1">
                <div className="flex items-center">
                    <Sheet>
                        <SheetTrigger>
                            <Button variant={"ghost"}>
                                <HamburgerMenuIcon />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side={"left"} className="flex-col justify-between">
                            <SheetHeader>
                                <SheetTitle>
                                    <LogoWithLabel />
                                </SheetTitle>
                                <SheetDescription>
                                    Türkçe Programlama Platformu
                                </SheetDescription>
                            </SheetHeader>
                            <NavigationMenu className="w-full max-w-none block">
                                <NavigationMenuList id="menu-nav">
                                    {navs.map(nav => (
                                        <NavItem href={nav.to}>{nav.name}</NavItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                            <div className="absolute bottom-0 left-0 right-0 text-center">
                                <div className="flex flex-col space-y-2 px-2">
                                    <Button>Giriş Yap</Button>
                                    <Button variant={"secondary"}>Kayıt Ol</Button>
                                </div>
                                <span className="opacity-50 text-sm">v1.0.2</span>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <LogoWithLabel size="sm" />
                </div>
                <div>
                    <Link href={"/register"}>
                        <Button size={"sm"}>Kayıt Ol</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}