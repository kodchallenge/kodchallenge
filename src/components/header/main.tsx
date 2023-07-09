"use client"

import Link from "next/link"

import useScroll from "@/hooks/useScroll"
import { cn } from "@/lib/utils"
import { LogoWithLabel } from "@/components/logo"
import { Button } from "@/components/ui/button"

export const MainHeader = () => {
    const scrollY = useScroll()

    return (
        <header className={cn("fixed top-0 right-0 left-0 z-50 duration-500", scrollY > 50 ? "bg-white dark:bg-slate-800 shadow" : "")}>
            <div className="flex flex-col">
                <nav className="flex justify-between items-center py-5 container">
                    <LogoWithLabel />
                    <div className="items-center justify-center">
                        <ul className="flex space-x-5 justify-center items-center">
                            <li>
                                <Link href={"/problems"} className="active">
                                    Problemler
                                </Link>
                            </li>
                            <li>
                                <Link href={"/admin"}>
                                    <div className="tooltip tooltip-bottom tooltip-open" data-tip="Yakında">
                                        Yarışmalar
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <div className="tooltip tooltip-bottom tooltip-open" data-tip="Yakında">
                                        Etkinlikler
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <div className="tooltip tooltip-bottom tooltip-open" data-tip="Yakında">
                                        Projeler
                                    </div>
                                </Link>
                            </li>
                        </ul>
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
                </nav>
            </div>
        </header>
    )
}