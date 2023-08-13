import { Button } from '@/components/ui/button'
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons'
import { editor } from 'monaco-editor'
import React, { useEffect } from 'react'

type Props = {
    editorRef: React.MutableRefObject<editor.IStandaloneCodeEditor | null>
}

const CopyCodeToClipboard = ({ editorRef }: Props) => {
    const [isCopied, setIsCopied] = React.useState(false)

    useEffect(() => {
        if (isCopied) {
            const timeout = setTimeout(() => {
                setIsCopied(false)
            }, 1000)
            return () => {
                clearTimeout(timeout)
            }
        }
    }, [isCopied])

    return (
        <Button
            className='relative'
            size={"icon"}
            variant={"ghost"}
            onClick={() => {
                setIsCopied(true)
                navigator.clipboard.writeText(editorRef.current?.getValue() ?? "")
            }}
            title='Kodu panoya kopyala'
        >
            {isCopied ? <CheckIcon /> : <CopyIcon />}
            {isCopied && (
                <span className="absolute z-200 -bottom-3 text-xs text-white bg-primary rounded-full px-1.5 py-0.5">Kopyalandı</span>
            )}
        </Button>
    )
}

export default CopyCodeToClipboard