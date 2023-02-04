import React from 'react'
import MonacoEditor from "@monaco-editor/react";
import { Dark } from "./themes/Dark";
const Editor = () => {
    return (
        <MonacoEditor
            // height={height}
            language={"javascript"}
            value={`//Write your code is here`}
            theme="Dark"
            beforeMount={(monaco) => {
                monaco.editor.defineTheme("Dark", Dark)
            }}
        />
    )
}

export default Editor