"use client"
import React from 'react'
import MonacoEditor from '@monaco-editor/react'
import Header from './components/header'
import { KodLogoWithLabel, Split } from '@kod/ui'
import ProblemPanel from './components/problem'
import './editor.css'
import KodEditor from './components/editor'
const Editor = () => {
  return (
    <div id='k-editor' className='h-full flex flex-col max-h-screen overflow-hidden'>
      <Header title="Buraya problem başlığı gelecek :)" logo={KodLogoWithLabel} />

      <main id='kc-editor-main' className='h-full flex-1 bg-editor-background dark:text-foreground'>
        <Split
          className='px-4 h-full py-2 flex'
          sizes={[50, 50]}
          minSize={[300, 400]}
        >
          <ProblemPanel />
          <KodEditor />
        </Split>
      </main>

    </div>
  )
}

export default Editor