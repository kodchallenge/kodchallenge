import { Problem } from '@/models';
import { CodeService, SolutionService } from '@/services';
import api from '@/services/api';
import { RootState } from '@/store';
import { setEditorOutputConsoleAction, setIsTestableAction } from '@/store/editorStore';
import clsx from 'clsx';
import { editor } from 'monaco-editor';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export type Props = {
    editorRef: React.MutableRefObject<editor.IStandaloneCodeEditor>;
    problem: Problem;
}

const Output = ({
    editorRef,
    problem
}: Props) => {
    const { output, isError, isTestable, selectedLanguage } = useSelector((state: RootState) => state.editor)
    const { currentProblem } = useSelector((state: RootState) => state.problem)
    const [isRunning, setIsRunning] = useState(false)
    const [testCaseResults, setTestCaseResults] = useState<("running" | "fail" | "success")[]>([])
    const { data: session } = useSession()
    const dispatch = useDispatch()

    const handleRunCodeClick = async () => {
        if (!editorRef.current || !session) return;
        setIsRunning(true)
        setTestCaseResults([])
        const code = editorRef.current.getValue()
        await CodeService.runCode({
            code,
            language: selectedLanguage,
            problemSlug: problem.slug,
            userId: session.user.id
        }).then(res => {
            dispatch(setEditorOutputConsoleAction({
                output: res.data.output,
                isError: !res.data.status
            }))
            dispatch(setIsTestableAction(true))
        }).catch(err => {
            dispatch(setEditorOutputConsoleAction({
                output: err.response.data.message,
                isError: true
            }))
        })
            .finally(() => setIsRunning(false))
    }

    const handleTestCodeClick = async () => {
        if (!editorRef.current || !session || !isTestable) return;
        try {
            api().defaults.headers.common["Authorization"] = `Bearer ${session.user.token}`

            setTestCaseResults(Array.from({ length: problem.totalCases }).fill("running") as ("running" | "fail" | "success")[])
            dispatch(setIsTestableAction(false))
            const language = currentProblem.base_codes.find(x => x.language.slug == selectedLanguage).language;
            const {data: solution} = await SolutionService.save({
                code: editorRef.current.getValue(),
                language: language.id,
                problem: problem.id,
            })
            console.log(solution)

            for (let i = 0; i < problem.totalCases; i++) {
                await CodeService.runTestCases({
                    index: i,
                    solution: solution.id,
                }).then(res => {
                    setTestCaseResults(prev => {
                        const newResults = [...prev]
                        newResults[i] = res.data.status ? "success" : "fail"
                        return newResults
                    })
                }).catch(err => {
                    setTestCaseResults(prev => {
                        const newResults = [...prev]
                        newResults[i] = "fail"
                        return newResults
                    })
                })
            }
        } catch(err) {
            dispatch(setEditorOutputConsoleAction({
                output: "Testler çalıştırılırken bir hata oluştu.",
                isError: true
            }))
            setTestCaseResults([])
        }
    }

    return (
        <div className='card h-full'>
            <Tabs className={"h-full flex flex-col flex-1"}>
                <TabList className={"tabs tabs-boxed justify-between items-center shadow-md"}>
                    <div>
                        <Tab selectedClassName="tab-activse" className={"tab"}>Konsol</Tab>
                        {/* <Tab selectedClassName="tab-active" className="tab">Test Case</Tab> */}
                    </div>
                    <div className='flex items-center space-x-2'>
                        <button className='btn btn-sm' disabled={!session} onClick={handleRunCodeClick}>Çalıştır</button>
                        <button className='btn btn-sm btn-primary' disabled={!isTestable} onClick={handleTestCodeClick}>Testleri Başlat</button>
                        <button className='btn btn-success btn-sm' disabled>Gönder</button>
                    </div>
                </TabList>

                <TabPanel className={"flex-1 flex flex-col"}>
                    <div className="mockup-code p-2 rounded h-full">
                        {isRunning ? (
                            <pre data-prefix='> Çalıştırılıyor..' className="text-success"></pre>
                        ) : (
                            <pre data-prefix="> Çıktı" > <br />
                                {!session ? (
                                    <code>
                                        Yazdığınız kodu çalıştırabilmek için <label onClick={() => signIn()} className='link link-info'>giriş</label> yapmanız gerekiyor.
                                    </code>
                                ) : !testCaseResults?.length ? (
                                    <code className={isError ? "text-error" : "asd"} dangerouslySetInnerHTML={{ __html: output.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;") }} />
                                ) : (
                                    <div className='ß'>
                                        {testCaseResults.map((testCase, i) => (
                                            <div key={i} className={clsx('flex items-center p-3', { fail: "text-error", success: "text-success" }[testCase])}>
                                                Case {i + 1}
                                                <span className='ml-2'>
                                                    {testCase == "running" &&
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                    }
                                                    {testCase == "success" &&
                                                        <i className="fa-solid fa-check text-success"></i>
                                                    }
                                                    {testCase == "fail" &&
                                                        <i className="fa-solid fa-xmark text-error"></i>
                                                    }
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </pre>
                        )}
                    </div>
                </TabPanel>
                {/* <TabPanel>
                    <h2>Test case panel.</h2>
                    <p>TODO: burayı hallet.</p>
                </TabPanel> */}
            </Tabs>
        </div >
    )
}

export default Output