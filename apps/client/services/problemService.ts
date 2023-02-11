import api from './api'
import { AxiosResponse } from 'axios'
import { Problem } from '@/models'

export default class ProblemService {
    public static async getList(): Promise<AxiosResponse<Problem[], any>> {
        return api().get("/v1/problems")
    }

    public static async getBySlug(slug: string): Promise<AxiosResponse<Problem, any>> {
        return api().get(`/v1/problems/${slug}`)
    }

    public static async getById(id: number): Promise<AxiosResponse<Problem, any>> {
        return api().get(`/v1/problems/${id}`)
    }
}