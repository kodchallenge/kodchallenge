import React from 'react'
import KodLayout from 'kod-layout'
import { EditorOutput, KodEditor, ProblemDescription } from '@/components/editor'
import Head from 'next/head'
import Header from '@/components/editor/Header'
// import '@/assets/styles/editor.css'

const ProblemDetailIndex = () => {
    return (
        <>
            <Head>
                <title>Problem Detay | KodChallenge</title>
                <link rel="stylesheet" href="/assets/styles/editor.css" />
            </Head>
            <div className="kc-editor">
                <KodLayout.Base>
                    <Header />
                    <KodLayout.Row gutterSize={10} minSize={400}>
                        <KodLayout.Tab id='description-area' style={{ overflow: "auto !important" }}>
                            <ProblemDescription />
                        </KodLayout.Tab>
                        <KodLayout.Column gutterSize={10}>
                            <KodLayout.Tab>
                                <KodEditor />
                            </KodLayout.Tab>
                            <KodLayout.Tab>
                                <EditorOutput />
                            </KodLayout.Tab>
                        </KodLayout.Column>
                    </KodLayout.Row>
                </KodLayout.Base>
            </div>
        </>
    )
}

export default ProblemDetailIndex