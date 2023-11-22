declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DATABASE_URL: string;
            JWT_SECRET_KEY: string;
            JWT_EXPIRES_IN: string;
            CODE_RUN_TIMEOUT: string;
            KOD_PROBLEM_PATH: string;
            KOD_SOLUTION_PATH: string;
        }
    }
}

export { };