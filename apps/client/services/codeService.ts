import axios, { AxiosResponse } from "axios";
import api from "./api";
import authApi from "./authApi";

export default class CodeService {
    public static async runCode(data: {
        code: string,
        language: string,
        problemSlug: string,
        userId: number,
    }): Promise<AxiosResponse<{
        status: boolean,
        output: string,
    }, any>> {
        return authApi().post(`/v1/code/run`, data)
    }

    public static async runTestCases(data: {
        index: number,
        solution: number,
    }): Promise<AxiosResponse<{
        status: boolean,
        output: string,
    }, any>> {
        return authApi().post(`/v1/code/case`, data)
    }
}