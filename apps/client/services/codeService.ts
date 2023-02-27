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
        return axios.post(`${process.env.API}/v1/code/run`, data)
    }
}