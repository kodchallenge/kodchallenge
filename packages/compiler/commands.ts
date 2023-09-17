export const commands: {
    [languageSlug: string]: string
} = {
    js: "node main.js",
    ts: "ts-node main.ts",
    py: "python main.py",
    c: "gcc main.c solution.c -o solution && ./solution",
    cpp: "g++ main.cpp solution.cpp -o solution && ./solution",
}
