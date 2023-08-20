export type LoginParams = {
    usernameOrEmail: string
    password: string
   // rememberMe?: boolean
}

export type LoginErrCallbackType = (err: { [key: string]: string }) => void