import { getServerSession } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'
import { authOptions } from './auth-options'
import { AuthErrors } from './error-code'


export { authOptions } from './auth-options'
export { AuthErrors } from './error-code'

export type LoginProps = {
    usernameOrEmail: string
    password: string
}
export type LoginResponse = {
    error: AuthErrors | null
}
export const login = async (data: LoginProps, callbackUrl = "/"): Promise<LoginResponse> => {
    if (data && data.usernameOrEmail && data.password) {
        return await signIn('credentials', {
        ...data,
            callbackUrl: callbackUrl,
            redirect: false
        }) as LoginResponse
    }
    return {
        error: AuthErrors.MISSING_CREDENTIALS
    }
}

export const logout = async () => {
    await signOut()
}

export const getSession = async () => {
    return getServerSession(authOptions)
}