"use client"
import { Button, Split } from '@kod/ui'
import React, { useCallback, useMemo, useState } from 'react'
import MonacoEditor from '@monaco-editor/react'
import { editor } from 'monaco-editor'
import Terminal from './Terminal'
import LanguageSelect from './language-select'
import CopyCodeToClipboard from './actions/copy-code-to-clipboard'
import ResetEditor from './actions/reset-editor'
import EditorSettings from './actions/editor-settings'
import Fullscreen from './actions/fullscreen'
import { RouterOutputs } from '@kod/server/trpc'
import { KodStorage } from '@kod/lib/storage'
import { StorageKeys } from '../../constants'
import { convertToMonacoLanguage } from '../../lib/monaco-extends'
import { getEditorTheme, getProblemSavedCodeByLanguage, setProblemCodeToStorage } from '../../lib/editor'
import { useKodTheme } from '@kod/lib/hoc'

type Props = {
  problem: NonNullable<RouterOutputs["problem"]["getBySlug"]>
}

type Language = Props["problem"]["base_codes"][number]["languages"]

const KodEditor = ({ problem }: Props) => {
  const [editorLanguage, setEditorLanguage] = useState<Language>(KodStorage.getObject(StorageKeys.CURRENT_LANGUAGE) ?? problem.base_codes[0].languages);
  const editorRef = React.useRef<editor.IStandaloneCodeEditor | null>(null)
  const { theme } = useKodTheme()

  const getProblemCode = useCallback(() => {
    return problem?.base_codes.find(baseCode => baseCode.language_id == editorLanguage.id)?.code ?? ""
  }, [problem, editorLanguage])

  const problemDefaultCode = useMemo(() => {
    if (!editorLanguage || !problem) return "";
    const defaultCode = getProblemCode()
    const savedCode = getProblemSavedCodeByLanguage(problem.slug, editorLanguage.slug)

    return savedCode || defaultCode
  }, [problem, editorLanguage])


  const handleChangeCode = (value: string | undefined) => {
    if (!problem || !editorLanguage || !value) return;

    setProblemCodeToStorage(problem.slug, editorLanguage.slug, value)
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
              <LanguageSelect
                data={problem.base_codes.map(x => x.languages)}
                selected={editorLanguage}
                onSelect={setEditorLanguage}
              />
              <div className='flex justify-end items-center space-x-1'>
                <CopyCodeToClipboard editorRef={editorRef} />
                <ResetEditor editorRef={editorRef} defaultCode={getProblemCode()} />
                <EditorSettings editorRef={editorRef} />
                <Fullscreen />
              </div>
            </div>
          </div>
          <div className='h-0 flex-1 flex-grow overflow-auto !w-full'>
            <MonacoEditor
              language={convertToMonacoLanguage(editorLanguage.slug)}
              value={problemDefaultCode}
              theme={getEditorTheme(theme)}
              onMount={(editor, monaco) => {
                editorRef.current = editor
              }}
              onChange={handleChangeCode}

            />
          </div>
        </section>
        <Terminal editorRef={editorRef} />
      </Split>
    </div>
  )
}

export default KodEditor