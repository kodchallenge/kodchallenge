import { User } from "@/models/user"
import { UserService } from "@/services"
import api from "@/services/api"
import Head from "next/head"
import { useRouter } from "next/router"

type Props = {
    user: User
}

const UserProfile = ({
    user
}: Props) => {
    const router = useRouter()
    const { username } = router.query as { username: string }
    
    return user ? (
        <>
            <Head>
                <title>{username} ({user.firstname} {user.lastname})</title>
            </Head>
            <p>@{username}</p>
        </>
    ) : (
        <p>Not found</p>
    )
}

export async function getServerSideProps(context) {
    const { username } = context.query
    const { data: user } = await UserService.getByUsername(username)

    return {
        props: {
            user
        }
    }
}

export default UserProfile