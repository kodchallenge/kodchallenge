"use client"
import { Button, Split } from '@kod/ui'
import React from 'react'
import MonacoEditor from '@monaco-editor/react'
import { editor } from 'monaco-editor'
import Terminal from './Terminal'
import LanguageSelect from './language-select'
import CopyCodeToClipboard from './actions/copy-code-to-clipboard'
import ResetEditor from './actions/reset-editor'
import EditorSettings from './actions/editor-settings'
import Fullscreen from './actions/fullscreen'
import { RouterOutputs } from '@kod/server/trpc'

type Props = {
  problem: RouterOutputs["problem"]["getBySlug"]
}

const KodEditor = ({ problem }: Props) => {
  const editorRef = React.useRef<editor.IStandaloneCodeEditor | null>(null)

  const handleChangeCode = () => {

  }


  return (
    <div className='w-[50%]'>
      <Split
        className='h-full flex-1 flex flex-col justify-between e-code-editor'
        gutterSize={8}
        direction='vertical'
        sizes={[70, 30]}
        minSize={40}
      >
        <section className='flex flex-col border bg-background !w-full'>
          <div className='h-10 border-b'>
            <div className='h-full flex justify-between items-center px-2'>
              <LanguageSelect />
              <div className='flex justify-end items-center space-x-1'>
                <CopyCodeToClipboard editorRef={editorRef} />
                <ResetEditor editorRef={editorRef} />
                <EditorSettings editorRef={editorRef} />
                <Fullscreen />
              </div>
            </div>
          </div>
          <div className='h-0 flex-1 flex-grow overflow-auto !w-full'>
            <MonacoEditor
              language={"javascript"}
              value={"const a = 1"}
              theme={"vs-dark"}
              onMount={(editor, monaco) => {
                editorRef.current = editor
              }}
              onChange={handleChangeCode}

            />
          </div>
        </section>
        <Terminal />
      </Split>
    </div>
  )
}

export default KodEditor