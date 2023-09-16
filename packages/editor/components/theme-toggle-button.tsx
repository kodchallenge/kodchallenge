"use client"
import { MoonIcon, SunIcon } from '@kod/icons'
import { KodThemes, useKodTheme } from '@kod/lib/hoc'
import { Button } from '@kod/ui'
import React from 'react'

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useKodTheme()
    return (
        <Button size={"icon"} variant={"ghost"} onClick={toggleTheme}>
            {theme == KodThemes.light ? <MoonIcon /> : <SunIcon />}
        </Button>
    )
}

export default ThemeToggleButton