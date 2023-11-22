"use client"
import { SessionProvider, useSession } from 'next-auth/react';
import KodAuthContext from './context';
import { KodAuthValues } from './type';
type Props = React.PropsWithChildren<{}>;

const AuthProvider = ({ children }: Props) => {
    const session = useSession();

    const values: KodAuthValues = {
        user: session.data?.user as KodAuthValues["user"],
        isAuthenticated: session.status == "authenticated" && !!session.data?.user,
        loading: session.status == "loading"
    }

    return (
        <KodAuthContext.Provider value={values}>
            {children}
        </KodAuthContext.Provider>
    )
}

const KodAuthProvider = ({ children }: React.PropsWithChildren) => {
    return (
        <SessionProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </SessionProvider>
    )
}

export default KodAuthProvider