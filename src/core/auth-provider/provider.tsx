"use client"
import { SEARCH_PARAMS } from '@/constants'
import { LoginErrCallbackType, LoginParams } from '@/types/auth'
import { User } from '@/types/user'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import KcAuthContext, { defaultAuthProvider } from './context'

type Props = React.PropsWithChildren<{}>

const KcAuthProvider = ({ children }: Props) => {
    const { data: session, status } = useSession()
    const [user, setUser] = useState<User | null>(defaultAuthProvider.user)
    const [loading, setLoading] = useState<boolean>(defaultAuthProvider.loading)

    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        setLoading(status === 'loading')
        console.log(session)
        //@ts-ignore
        setUser(session?.user ?? null)
    }, [session, status])

    const handleLogin = (params: LoginParams, errorCallback?: LoginErrCallbackType) => {
        // authService.signin(params.usernameOrEmail, params.password).then(res => {
        //     // if (params.rememberMe) {
        //     window.localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, res.token);
        //     window.localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(res));
        //     // }

        //     setUser({ ...res })
        
        //     const retur  nUrl = searchParams.get(SEARCH_PARAMS.RETURN_URL)
        //     const redirectUrl = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        //     router.replace(redirectUrl)
        // }).catch(err => {
            //     if (errorCallback) errorCallback(err)
            // })
        const returnUrl = searchParams.get(SEARCH_PARAMS.RETURN_URL)
        const redirectUrl = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        signIn("credentials", {
            ...params,
            callbackUrl: redirectUrl
        })
    }

    const handleLogout = () => {
        signOut()
        // setUser(null)
        // window.localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN)
        // window.localStorage.removeItem(STORAGE_KEYS.USER_DATA)
        // router.push('/login')
    }

    const values = {
        user,
        loading,
        setLoading,
        login: handleLogin,
        logout: handleLogout
    }
    return <KcAuthContext.Provider value={values}>{children}</KcAuthContext.Provider>
}

export default KcAuthProvider