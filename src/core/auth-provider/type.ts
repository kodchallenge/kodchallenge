import { LoginErrCallbackType, LoginParams } from "@/types/auth"
import { User } from "@/types/user"


export type AuthValuesType = {
    loading: boolean
    logout: () => void
    user: User | null
    setLoading: (value: boolean) => void
    login: (params: LoginParams, errorCallback?: LoginErrCallbackType) => void
  }
  