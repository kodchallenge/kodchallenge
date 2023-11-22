import type { solution_state } from '@kod/prisma'

export declare type ResultCase = {
    input: string;
    expected: string;
    output: string;
    status: boolean;
    build: boolean;
    timeout: boolean;
}

export declare type RunCodeResult = {
    status: solution_state;
    success: boolean;
    message: string;
    cases: ResultCase[];
}