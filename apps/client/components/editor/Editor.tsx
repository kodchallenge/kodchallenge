import React, { useEffect, useRef } from 'react'
import MonacoEditor from "@monaco-editor/react";
import editor from 'monaco-editor'
import { Dark } from "./themes/Dark";
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export type Props = {
    editorRef?: React.MutableRefObject<editor.editor.IStandaloneCodeEditor | null>
}

const Editor = ({
    editorRef
}: Props) => {
    const { theme, selectedLanguage } = useSelector((state: RootState) => state.editor)
    const { currentProblem } = useSelector((state: RootState) => state.problem)
    console.log(theme)
    return (
        <MonacoEditor
            // height={height}
            language={selectedLanguage}
            value={currentProblem.base_codes.find(x => x.language.slug == selectedLanguage).code}
            theme={theme == "dracula" ? "dark" : "light"}
            beforeMount={(monaco) => {
                monaco.editor.defineTheme("dark", Dark)
            }}
            onMount={(editor, monaco) => {
                editorRef.current = editor
            }}
        />
    )
}

export default React.memo(Editor)