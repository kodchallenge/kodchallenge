import api from './api'
import { AxiosResponse } from 'axios'
import { Problem, ProblemDetail } from '@/models'
import { User } from '@/models/user'

export class UserService {
    public static async getByUsername(username: string): Promise<AxiosResponse<User, any>> {
        return api().get(`/v1/users/${username}`)
    }
}