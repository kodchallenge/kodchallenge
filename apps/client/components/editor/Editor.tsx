import React, { useEffect, useRef } from 'react'
import MonacoEditor from "@monaco-editor/react";
import editor from 'monaco-editor'
import { Dark } from "./themes/Dark";
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
const Editor = () => {
    const { theme, selectedLanguage } = useSelector((state: RootState) => state.editor)
    const { currentProblem } = useSelector((state: RootState) => state.problem)
    console.log(theme)
    return (
        <MonacoEditor
            // height={height}
            language={"javascript"}
            value={currentProblem.base_codes.find(x => x.language.slug == selectedLanguage).code}
            theme={theme == "dracula" ? "dark" : "light"}
            beforeMount={(monaco) => {
                monaco.editor.defineTheme("dark", Dark)
            }}
        />
    )
}

export default React.memo(Editor)