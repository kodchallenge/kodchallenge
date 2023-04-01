import { Solution, SolutionCase } from '@/models'
import { AxiosResponse } from 'axios'
import api from './api'
import { UserSolutionDetail } from '@/models/UserSolutionDetail'
import { getSession } from 'next-auth/react'
import authApi from './authApi'

export class SolutionService {
    public static async save(data: {
        code: string,
        language: number,
        problem: number,
    }): Promise<AxiosResponse<Solution, any>> {
        return api().post(`/v1/solutions`, data)
    }

    public static async approve(solutionId: number, problemId: number): Promise<AxiosResponse<{ status: boolean, message: string }, any>> {
        return authApi().post(`/v1/solutions/${solutionId}`, { problem: problemId })
    }

    public static async getSolutionsByUserId(userId: number): Promise<AxiosResponse<{ solutions: UserSolutionDetail[], message: string, status: boolean }, any>> {
        return authApi().get(`/v1/users/${userId}/solutions`)
    }
}