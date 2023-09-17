
const manocoLanguageMap: {
    [key: string]: string
} = {
    "js": "javascript",
    "ts": "typescript",
    "py": "python",
    "kt": "kotlin",
    "go": "golang",
    "c": "c",
    "cpp": "cpp",
    "cs": "csharp",
    "java": "java",
}
export const convertToMonacoLanguage = (language: string): string => {
    return manocoLanguageMap[language] || language;
}

export const monacoToLanguageSlug = (language: string): string => {
    return Object.keys(manocoLanguageMap).find(key => manocoLanguageMap[key] === language) || language;
}