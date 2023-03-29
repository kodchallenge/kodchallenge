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

    public static async approve(solutionId: number, problemId: number): Promise<AxiosResponse<{ status: true }, any>> {
        return api().post(`/v1/solutions/${solutionId}`, {problem: problemId})
    }
}