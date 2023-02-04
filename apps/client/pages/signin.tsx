import React from 'react'
import KcLayout from '../layouts/KcLayout'
import clsx from 'clsx'
import s from '@/assets/styles/main.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { KcBrandButton } from '@/components/buttons'

const BgOverlay = (
    <div className={clsx(s.dotPointBg, "full-screen")}></div>
)

const Signin = () => {
    return (
        <KcLayout overlay={BgOverlay} hideHeader hideFooter>
            <Head>
                <title>KodChallenge Topluluğuna Katıl</title>
                <meta name="description" content="KodChallenge, Türkçe programlama topluluğudur. Topluluğumuzda sizide aramızda görmekten gurur duyarız." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='w-full overflow-auto'>
                <div className='min-h-screen w-full flex items-center p-5 justify-center flex-col space-y-2'>
                    <div className=" card w-full px-3 sm:max-w-md lg:max-w-lg md:4/5 bg-base-100 shadow-2xl">
                        <KcBrandButton />
                        <div className="p-0 sm:p-8 card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Kullanıcı Adı veya E-posta</span>
                                </label>
                                <input type="text" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Parola</span>
                                </label>
                                <input type="text" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Giriş Yap</button>
                            </div>
                        </div>
                        <div className='text-center'>
                            <p className='m-0'>
                                KodChallenge'da yeni misin?
                                <Link href={"/signup"} className="btn btn-link">HESAP OLUŞTUR</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </KcLayout>
    )
}

export default Signin