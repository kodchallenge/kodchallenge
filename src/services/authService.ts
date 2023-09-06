import { User } from "@/types/user"
import { api } from "./config"

const signin = async (usernameOrEmail: string, password: string): Promise<User> => {
    return await api.post("v1/auth/signin", { usernameOrEmail, password })
}

export default {
    signin,
}