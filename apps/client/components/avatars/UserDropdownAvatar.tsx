import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { Avatar } from "./index"

export const UserDropdownAvatar = () => {
    const { data: session } = useSession()
    const handleSignOut = () => {
        signOut()
    }
    return (
        <div className="dropdown dropdown-end">
            <Avatar src={session?.user.avatar ?? "https://picsum.photos/id/237/200/300"} tabIndex={0} />
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow-2xl bg-base-200 rounded-box w-52">
                <li>
                    <Link href={"/profile"}>Hesabım</Link>
                </li>
                <li>
                    <label className="btn border-0 bg-error hover:bg-error-content text-error-content hover:text-error " onClick={handleSignOut}>Çıkış Yap</label>
                </li>
            </ul>
        </div>
    )
}