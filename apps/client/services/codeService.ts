import axios, { AxiosResponse } from "axios";
import api from "./api";

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
        return api().post(`/v1/code/run`, data)
    }

    public static async runTestCases(data: {
        code: string,
        language: string,
        problemSlug: string,
        userId: number,
        index: number,
    }): Promise<AxiosResponse<{
        status: boolean,
        output: string,
    }, any>> {
        return api().post(`/v1/code/case`, data)
    }
}