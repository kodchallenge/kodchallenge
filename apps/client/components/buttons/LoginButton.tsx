import { signIn, useSession } from "next-auth/react"

export const LoginButton = () => {
    const { data: session } = useSession()
    return !session && (
        <button onClick={() => signIn()} className="btn btn-primary">Giriş Yap</button>
    )
}