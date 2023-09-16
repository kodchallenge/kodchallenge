import { UpdateIcon } from '@kod/icons'
import { Button } from '@kod/ui'
import { useKodAlert } from '@kod/lib/hoc'
import { editor } from 'monaco-editor'
import React from 'react'
type Props = {
    editorRef: React.MutableRefObject<editor.IStandaloneCodeEditor | null>
    defaultCode: string
}
const ResetEditor = ({ editorRef, defaultCode }: Props) => {
    const kodAlert = useKodAlert()
    const handleResetEditor = () => {
        kodAlert.alert("Uyarı", "Kodunuzu sıfırlamak istediğinize emin misiniz?", [
            {
                text: "Sıfırla", onClick: () => {
                    editorRef.current?.setValue(defaultCode)
                }
            }
        ])
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