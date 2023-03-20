import { useSession } from "next-auth/react"
import Link from "next/link"

export const LoginButton = () => {
    const { data: session } = useSession()
    return !session && (
        <Link href={"/signin"} className="btn btn-primary">Giriş Yap</Link>
    )
}