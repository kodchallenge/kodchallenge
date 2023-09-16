export const convertToMonacoLanguage = (language: string): string => {
    const map = {
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
    // @ts-ignore
    return map[language] || language;
}