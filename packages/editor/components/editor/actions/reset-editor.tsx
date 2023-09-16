import { UpdateIcon } from '@kod/icons'
import { Button } from '@kod/ui'
import { editor } from 'monaco-editor'
import React from 'react'
type Props = {
    editorRef: React.MutableRefObject<editor.IStandaloneCodeEditor | null>
}
const ResetEditor = ({ editorRef }: Props) => {
    const handleResetEditor = () => {

    }

    return (
        <Button
            size={"icon"}
            variant={"ghost"}
            onClick={handleResetEditor}
            title='Editörü sıfırla'
        >
            <UpdateIcon />
        </Button>
    )
}

export default ResetEditor