"use client"
import { ThemeProvider, useTheme } from 'next-themes'

// Wrapper to use next-themes
export const useKodTheme = () => {
    const { setTheme, themes, theme } = useTheme()
    const toggleTheme = () => {
        if (theme === KodThemes.dark) {
            setTheme(KodThemes.light)
        } else {
            setTheme(KodThemes.dark)
        }
    }
    const isDark = theme === KodThemes.dark
    return {
        themes,
        theme,
        isDark,
        setTheme,
        toggleTheme
    }
}

export const KodThemes = {
    dark: 'dark',
    light: 'light'
}

export const KodThemeProvider = ThemeProvider