"use client";
// import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'
import BrandLink from '../brand/BrandLink';

export type KcHeaderProps = {
    disableDrawer?: boolean;
}

const KcHeader = (props: KcHeaderProps) => {
    // const { data: session } = useSession()

    return (
        <header>
            <div className="drawer-content flex flex-col">
                <nav className="navbar drawer-content">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} htmlFor="header-drawer" className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link href={"/problems"}>Problemler</Link></li>
                                <li><Link href={"/admin"}>Yarışmalar</Link></li>
                                <li><Link href={"/challenges"}>Etkinlikler</Link></li>
                                <li><Link href={"/projects"}>Projeler</Link></li>
                            </ul>
                        </div>
                        <BrandLink />
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href={"/problems"}>Problemler</Link></li>
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
                    <div className="navbar-end">
                        {/* <Link href={"/auth/signin"} className="btn btn-primary">Giriş Yap</Link> */}
                        {/* {!session ? (
                        ) : (
                            <Link href={"/@"+session.user.username} className="btn btn-primary">Hesabım</Link>
                        )} */}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default KcHeader