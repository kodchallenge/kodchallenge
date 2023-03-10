import React, { useRef } from 'react'
import KcLayout from '../../layouts/KcLayout'
import clsx from 'clsx'
import s from '@/assets/styles/main.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { KcBrandButton } from '@/components/buttons'
import { ClientSafeProvider, getProviders, getSession, LiteralUnion, signIn } from 'next-auth/react'
import { BuiltInProviderType } from 'next-auth/providers'
import { useRouter } from 'next/router'

const BgOverlay = (
    <div className={clsx(s.dotPointBg, "full-screen")}></div>
)

export type SigninProps = {
    providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
}

const Signin = ({
    providers
}: SigninProps) => {
    const [loading, setLoading] = React.useState(false)
    const email = useRef("");
    const password = useRef("");
    const router = useRouter()
    const handleSignin = async () => {
        if(loading || !email.current || !password.current) return;
        setLoading(true)
        signIn("credentials", {
            email: email.current, 
            password: password.current,
            callbackUrl: router.query.callbackUrl as string ?? "/"
        }).finally(() => setLoading(false))
    }
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
                                <input type="text" className="input input-bordered" onChange={(e) => email.current = e.target.value} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Parola</span>
                                </label>
                                <input type="text" className="input input-bordered" onChange={(e) => password.current = e.target.value} />
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleSignin()}
                                    disabled={loading}
                                >
                                    {!loading ? "Giriş Yap" : "Giriş Yapılıyor..."}
                                </button>
                            </div>
                        </div>
                        <div className='text-center'>
                            <p className='m-0'>
                                KodChallenge'da yeni misin?
                                <Link href={"/signup"} className="btn btn-link">HESAP OLUŞTUR</Link>
                            </p>
                        </div>
                        <div className="flex flex-col space-y-4">
                            {providers &&
                                Object.values(providers).map(provider => {
                                    if (provider.name !== "Credentials") {
                                        return (
                                            <div key={provider.name} style={{ marginBottom: 0 }}>
                                                <a
                                                    href="#"
                                                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                                                    onClick={() => signIn(provider.id)}
                                                >
                                                    <span>
                                                        <svg
                                                            className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                                                            viewBox="0 0 16 16"
                                                            version="1.1"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                                            ></path>
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm font-medium text-gray-800 group-hover:text-white">Sign in with{' '} {provider.name}</span>
                                                </a>
                                            </div>
                                        )
                                    }
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </KcLayout>
    )
}

export default Signin

export async function getServerSideProps(context) {
    const { req } = context;
    const session = await getSession({ req });
    const providers = await getProviders()
    if (session) {
        return {
            redirect: { destination: "/" },
        };
    }
    return {
        props: {
            providers,
        },
    }
}