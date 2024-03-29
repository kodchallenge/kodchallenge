"use server"
import { commands } from "./commands"
import { solution_state } from '@kod/prisma'
import { ResultCase, RunCodeResult } from "./type"

export type RunCodeProps = {
    solutionPath: string
    languageSlug: string
    cases: {
        input: string
        output: string
    }[],
}

const WORKDIR = '/usr/src/kod/solution'
const MAX_RUN_TIME = 10;

export const run = async ({
    solutionPath,
    languageSlug,
    cases,
}: RunCodeProps) => {
    const result: RunCodeResult = {
        success: false,
        status: solution_state.pending,
        cases: [],
        message: ""
    }
    try {
        const { exec, execSync } = await import('child_process')

        const command = commands[languageSlug]
        if (!command) {
            throw new Error(`Language ${languageSlug} is not supported`)
        }

        // BUILD
        execSync(`docker run -t -d ${languageSlug}_app`)
        const container = execSync(`docker ps -l -q`).toString().trim()
        execSync(`docker cp ${solutionPath}/. ${container}:${WORKDIR}`)

        // Copy runner-lib
        execSync(`docker cp ${process.env.KOD_RUNNER_LIB_PATH}/. ${container}:/usr/src/runner-lib`)

        const casePromises = cases.map(async ({ input, output: expected }, index): Promise<ResultCase> => {
            return new Promise((resolve, reject) => {
                const caseResult: ResultCase = {
                    input,
                    expected,
                    output: "",
                    status: false,
                    build: false,
                    timeout: false
                }
                try {
                    const runCommand = `${command} ${input}`
                    const runExec = exec(`docker exec -i ${container} sh -c "cd ${WORKDIR} && ${runCommand}"`, (err, stdout, stderr) => {
                        console.log(err, stdout.toString(), stderr.toString())
                        if (stderr) {
                            caseResult.build = true
                            caseResult.output = stderr
                            return resolve(caseResult)
                        }
                        caseResult.output = stdout.toString()
                        caseResult.status = caseResult.expected.trim() === caseResult.output.trim()
                        resolve(caseResult)
                    })
                    setTimeout(() => {
                        console.log('timeout')
                        caseResult.timeout = true
                        runExec.kill()
                        resolve(caseResult)
                    }, 1000 * MAX_RUN_TIME)
                } catch (err: any) {
                    caseResult.build = true
                    caseResult.output = err.message
                    resolve(caseResult)
                }
            })
        })

        result.cases = await Promise.all(casePromises)
        result.status = solution_state.success
        result.success = true
    } catch (err: any) {
        result.status = solution_state.failed
        result.message = err.message
    }
    return result
}