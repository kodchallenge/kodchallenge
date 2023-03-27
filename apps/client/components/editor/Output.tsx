import { Problem } from '@/models';
import { CodeService } from '@/services';
import { RootState } from '@/store';
import { setEditorOutputConsoleAction } from '@/store/editorStore';
import { editor } from 'monaco-editor';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
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
    const { output, isError, selectedLanguage } = useSelector((state: RootState) => state.editor)
    const [isRunning, setIsRunning] = useState(false)
    const { data: session } = useSession()
    const dispatch = useDispatch()

    const handleRunCodeClick = async () => {
        if (!editorRef.current || !session) return;
        setIsRunning(true)
        const code = editorRef.current.getValue()
        await CodeService.runCode({
            code,
            language: selectedLanguage,
            problemSlug: problem.slug,
            userId: session.user.id
        }).then(res => {
            console.log(res.data)
            dispatch(setEditorOutputConsoleAction({
                output: res.data.output,
                isError: !res.data.status
            }))
        }).catch(err => {
            dispatch(setEditorOutputConsoleAction({
                output: err.response.data.message,
                isError: true
            }))
        })
        .finally(() => setIsRunning(false))
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
                        <button className='btn btn-sm btn-primary' disabled={!session || !output}>Testleri Başlat</button>
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
                                ) : (
                                    <code className={isError ? "text-error" : "asd"} dangerouslySetInnerHTML={{ __html: output.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;") }} />
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
        </div>
    )
}

export default Output