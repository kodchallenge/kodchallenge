import path from 'path';
import fs from 'fs';

/**
 * Turbo kullandığımız için bu path'i almak için bu şekilde bir yol izledik.
 * TURBO_INVOCATION_DIR env turbo.json yolunu yani parent yolunu veriyor.
 */
export const kodProblemPath = process.env.KOD_PROBLEM_PATH || ((process.env.TURBO_INVOCATION_DIR || process.cwd()) + "/problems")

export const getProblemPath = (slug: string) => path.join(kodProblemPath, slug)

export const getProblemDescription = (slug: string) => {
    return fs.readFileSync(path.join(getProblemPath(slug), 'description.md'), 'utf-8')
}


export const getProblemIO = (slug: string): {
    input: string;
    output: string;
}[] => {
    return JSON.parse(fs.readFileSync(path.join(getProblemPath(slug), 'io.json'), 'utf-8')) as {
        input: string;
        output: string;
    }[]
}

export const getProblemLanguages = (slug: string) => {
    return fs.readdirSync(getProblemPath(slug), {withFileTypes: true}).filter(item => item.isDirectory()).map(x => x.name)
}

export const getProblemSolution = (slug: string, language: string) => {
    const solutionPath = path.join(getProblemPath(slug), 'solution.' + language)
    if(fs.existsSync(solutionPath)) {
        return fs.readFileSync(solutionPath, 'utf-8')
    }
    return fs.readFileSync(path.join(getProblemPath(slug), language, 'Solution.' + language), 'utf-8')
}