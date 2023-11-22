import { KodStorage } from "@kod/lib/storage"
import { StorageKeys } from "../constants"
import { KodThemes } from "@kod/lib/hoc"

export const getProblemSavedCodes = (slug: string): { [language: string]: string } => {
    const currentCodes = KodStorage.getObject<{ [slug: string]: { [language: string]: string } }>(StorageKeys.CODE) ?? {}
    return currentCodes[slug] ?? {}
}

export const getProblemSavedCodeByLanguage = (slug: string, language: string): string | null => {
    const currentCodes = getProblemSavedCodes(slug)
    return currentCodes[language] || null
}

export const setProblemCodeToStorage = (slug: string, language: string, code: string) => {
    const currentCodes = getProblemSavedCodes(slug)
    currentCodes[language] = code
    KodStorage.set(StorageKeys.CODE, { [slug]: currentCodes })
}

export const getEditorTheme = (theme: string | undefined) => {
    return theme ? {
        [KodThemes.dark]: "vs-dark",
        [KodThemes.light]: "vs-light",
    }[theme] : undefined
}