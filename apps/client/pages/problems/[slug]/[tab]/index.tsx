import { EditorOutput, KCEditor, KodEditor } from '@/components/editor'
import Header from '@/components/editor/Header'
import { Problem } from '@/models'
import { ProblemService } from '@/services'
import { wrapper } from '@/store'
import { setEditorThemeAction, setSelectedLanguageAction } from '@/store/editorStore'
import { setCurrentProblemAction } from '@/store/problemStore'
import KodLayout from 'kod-layout'
import KodMarkdown from 'kod-markdown'
import { editor } from 'monaco-editor'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

export type Props = {
    problem: Problem
}
const ProblemDetailIndex = ({
    problem
}: Props) => {
    const dispatch = useDispatch()
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null)
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
                        <KodLayout.Tab id='description-area' style={{ overflow: "hidden !important",  }}>
                            <KCEditor.InfoTabs />
                        </KodLayout.Tab>
                        <KodLayout.Column gutterSize={10}>
                            <KodLayout.Tab>
                                <KodEditor editorRef={editorRef} />
                            </KodLayout.Tab>
                            <KodLayout.Tab>
                                <EditorOutput editorRef={editorRef} problem={problem} />
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
    store.dispatch(setSelectedLanguageAction(res.data.base_codes[0].language.slug))
    return {
        props: {
            problem: res.data,
        },
    }
})

export default ProblemDetailIndex