import { Solution, SolutionCase } from '@/models'
import { AxiosResponse } from 'axios'
import api from './api'

export class SolutionService {
    public static async save(data: {
        code: string,
        language: number,
        problem: number,
    }): Promise<AxiosResponse<Solution, any>> {
        return api().post(`/v1/solutions`, data)
    }
}