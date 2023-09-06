import { api } from "./config";

export type RunCodeData= {
    language: string;
    code: string;
    userId: number;
    problemSlug: string;
}

export type RunCodeResult = {
    status: string;
    output: string;
    id: number;
    cases: {
        input: string,
        expected: string,
        output: string,
        status: boolean,
        build: boolean,
        timeout: boolean
    }[];
}

const runCode = async (data: RunCodeData) => {
    return await api.post<RunCodeResult>("v1/code/run", data)
}

export default {
    runCode
};