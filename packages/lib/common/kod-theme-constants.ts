import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { KodThemes } from "../hoc";

export const SyntaxThemes: {
    [themeKey: string]: any
} = {
    [KodThemes.dark]: oneDark,
    [KodThemes.light]: oneLight
}