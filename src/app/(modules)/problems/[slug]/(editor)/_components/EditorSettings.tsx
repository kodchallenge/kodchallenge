import React, { useMemo } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { GearIcon } from '@radix-ui/react-icons'
import { Switch } from '@/components/ui/switch'
import { editor } from 'monaco-editor'

type Props = {
    editorRef: React.MutableRefObject<editor.IStandaloneCodeEditor | null>
}

const EditorSettings = ({ editorRef }: Props) => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button
                    size={"icon"}
                    variant={"ghost"}
                    title='Ayarlar'
                >
                    <GearIcon />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Ayarlar</DialogTitle>
                </DialogHeader>
                <div className='py-2 flex justify-between items-center border-b border-b-secondary'>
                    <div className=''>
                        <h4 className='text-lg font-semibold'>Mini Harita</h4>
                        <p className='text-muted-foreground'>Miniharita gösterilsin mi?</p>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant={"destructive"}>Sıfırla</Button>
                    <Button variant={"success"}>Kaydet</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditorSettings