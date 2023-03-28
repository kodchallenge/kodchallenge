import React, { useEffect, useRef } from 'react'
import MonacoEditor from "@monaco-editor/react";
import editor from 'monaco-editor'
import { Dark } from "./themes/Dark";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setIsTestableAction } from '@/store/editorStore';

export type Props = {
    editorRef?: React.MutableRefObject<editor.editor.IStandaloneCodeEditor | null>
}

const slugToEditorLanguage = (slug: string) => {
    const languages = [
        {value: "javascript", slug: "js"},
        {value: "typescript", slug: "ts"},
        {value: "python", slug: "py"},
    ]
    return languages.find(x => x.slug == slug)?.value ?? slug;
}

const Editor = ({
    editorRef
}: Props) => {
    const { theme, selectedLanguage, isTestable } = useSelector((state: RootState) => state.editor)
    const { currentProblem } = useSelector((state: RootState) => state.problem)
    const dispatch = useDispatch()
    return (
        <MonacoEditor
            // height={height}
            language={slugToEditorLanguage(selectedLanguage)}
            value={currentProblem.base_codes.find(x => x.language.slug == selectedLanguage).code}
            theme={theme == "dracula" ? "dark" : "light"}
            beforeMount={(monaco) => {
                monaco.editor.defineTheme("dark", Dark)
            }}
            onMount={(editor, monaco) => {
                editorRef.current = editor
            }}
            onChange={(value, event) => {
                isTestable && dispatch(setIsTestableAction(false))
            }}
        />
    )
}

export default React.memo(Editor)