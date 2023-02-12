import React, { useEffect } from 'react'
import KodLayout from 'kod-layout'
import { EditorOutput, KodEditor, ProblemDescription } from '@/components/editor'
import Head from 'next/head'
import Header from '@/components/editor/Header'
import { useDispatch } from 'react-redux'
import { setEditorThemeAction } from '@/store/editorStore'
import { Problem } from '@/models'
import { GetServerSideProps } from 'next'
import { ProblemService } from '@/services'
import KodMarkdown from 'kod-markdown'
import { wrapper } from '@/store'
import { setCurrentProblemAction } from '@/store/problemStore'

export type Props = {
    problem: Problem
}
const ProblemDetailIndex = ({
    problem
}: Props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setEditorThemeAction(document.documentElement.getAttribute("data-theme") as EditorThemes ?? "dracula"))
    }, [])
    return (
        <>
            <Head>
                <title>{problem.title} | KodChallenge</title>
                <link rel="stylesheet" href="/assets/styles/editor.css" />
            </Head>
            <div className="kc-editor">
                <KodLayout.Base>
                    <Header />
                    <KodLayout.Row gutterSize={10} minSize={400}>
                        <KodLayout.Tab id='description-area' style={{ overflow: "auto !important" }}>
                            <div className='p-10'>
                                <KodMarkdown markdown={problem.description} theme='light' />
                            </div>
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


export const getServerSideProps = wrapper.getServerSideProps<{ problem: Problem }>(store => async (context) => {
    //@ts-ignore
    const res = await ProblemService.getBySlug(context.params.slug);
    store.dispatch(setCurrentProblemAction(res.data))
    return {
        props: {
            problem: res.data,
        },
    }
})

export default ProblemDetailIndex