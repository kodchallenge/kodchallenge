import { GearIcon } from '@kod/icons'
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Switch } from '@kod/ui'
import { editor } from 'monaco-editor'
import React from 'react'

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
                    <Button variant={"default"}>Kaydet</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditorSettings