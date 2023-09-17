export enum TerminalColorCode {
    "WARNING" = "WARNING",
    "INFO" = "INFO",
    "SUCCESS" = "SUCCESS",
    "ERROR" = "ERROR",
}

export const colorizeTerminalOutput = (output: string) => {
    const terminalColorCodes = Object.values(TerminalColorCode)
    terminalColorCodes.forEach((colorCode) => {
        const regex = new RegExp(`\\[${colorCode}\\]([\\s\\S]*?)\\[\\/${colorCode}\\]`, "g")
        output = output.replace(regex, `<span class="terminal-${colorCode.toLowerCase()}">$1</span>`)
    })
    // replace \n to <br>
    output = output.replace(/\n/g, "<br>")
    return output
}

export const colorizeTerminalInput = (input: string, colorCode: keyof typeof TerminalColorCode) => {
    return `[${colorCode}]${input}[/${colorCode}]`
}