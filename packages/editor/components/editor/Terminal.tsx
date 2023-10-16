import { DividerVerticalIcon, PlayIcon, Share2Icon } from '@kod/icons'
import { SyntaxThemes } from '@kod/lib/common'
import { useKodAuth, useKodTheme } from '@kod/lib/hoc'
import { KodTrpc } from '@kod/server/next'
import { RouterOutputs } from '@kod/server/trpc'
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '@kod/ui'
import { editor } from 'monaco-editor'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { monacoToLanguageSlug } from '../../lib/monaco-extends'
import { colorizeTerminalInput, colorizeTerminalOutput } from '../../lib/terminal'

type Props = {
    editorRef: React.MutableRefObject<editor.IStandaloneCodeEditor | null>,
    problemSlug?: string
}
type RunCodeResult = NonNullable<RouterOutputs["code"]["run"]["data"]>["result"]

const Terminal = ({ editorRef, problemSlug }: Props) => {
    const { isAuthenticated, user } = useKodAuth()
    const runCodeMutation = KodTrpc.code.run.useMutation()
    const params = useParams()
    const { theme } = useKodTheme()

    // states
    const [codeResult, setCodeResult] = useState<RunCodeResult | null>(null)
    const [output, setOutput] = useState("")
    const [currentTestIndex, setCurrentTestIndex] = useState<number>(0)

    // handlers
    const handleRunCode = async () => {
        try {
            if(!isAuthenticated) {
                //return setOutput(colorizeTerminalInput("Kodu çalıştırabilmek için giriş yapmalısın.", "ERROR"))
            }
            const code = editorRef.current?.getValue()
            // TODO: Language, problem gibi editor için önemli olan verileri state management da tut. Zustand kullanılabilir. useEditor()
            const languageSlug = monacoToLanguageSlug(editorRef.current?.getModel()?.getLanguageId() || "")
            problemSlug = problemSlug || params.slug as string;

            if (!code || !languageSlug || !problemSlug) return;

            setOutput(colorizeTerminalInput("Çalıştırılıyor...", "SUCCESS"))
            setCodeResult(null)
            const result = await runCodeMutation.mutateAsync({
                code,
                languageSlug,
                problemSlug
            })
            console.log(result)

            if (result.success && result.data) {
                setCodeResult(result.data.result)
                setOutput("")
            } else {
                setOutput(colorizeTerminalInput(result.error || result.message, "ERROR"))
            }

        } catch (err: any) {
            // runCodeMutation trpc error
            if(err?.data?.code == "UNAUTHORIZED") {
                return setOutput(colorizeTerminalInput("Kodu çalıştırabilmek için giriş yapmalısın.", "ERROR"))
            }
        }
    }

    const handleSaveCode = () => {

    }

    return (
        <Tabs defaultValue="output" className="flex flex-col bg-background border min-h-0">
            <TabsList className='h-10 border-b bg-transparent justify-between rounded-none text-left'>
                <div>
                    <TabsTrigger value="output">Sonuç</TabsTrigger>
                    {/* <TabsTrigger value="console">Konsol</TabsTrigger> */}
                </div>
                <div className='flex items-start space-x-2'>
                    <Button variant={"ghost"} size={"sm"} onClick={handleRunCode}>
                        <PlayIcon className='mr-1' />
                        Çalıştır
                    </Button>
                    <Button variant={"default"} size={"sm"} onClick={handleSaveCode}>
                        <Share2Icon className='mr-1' />
                        Kaydet
                    </Button>
                </div>
            </TabsList>
            <div className='h-0 flex-auto overflow-auto p-2'>
                <div className='h-full overflow-y-auto'>
                    <TabsContent value="output">
                        {(runCodeMutation.isLoading || output) && <div className={"font-code text-sm"} dangerouslySetInnerHTML={{ __html: colorizeTerminalOutput(output) }} />}
                        {codeResult?.cases && (
                            <div className='flex flex-col space-y-5'>
                                <div className={`${codeResult.cases?.some(x => !x.status) || codeResult.cases.length < 1 ? "bg-destructive/75" : "bg-success/75"}`}>
                                    <label className='text-sm flex gap-x-2 items-center'>
                                        <p>Toplam Test: <strong className='text-base/6'>{codeResult.cases.length}</strong></p>
                                        <DividerVerticalIcon />
                                        <p>Başarılı: <strong className='text-base/6'>{codeResult.cases.filter(x => x.status).length}</strong></p>
                                        <DividerVerticalIcon />
                                        <p>Başarısız: <strong className='text-base/6'>{codeResult.cases.filter(x => !x.status).length}</strong></p>
                                    </label>
                                </div>
                                <h2
                                    className={`${codeResult.cases[currentTestIndex]?.status ? 'text-success' : 'text-destructive'}  font-bold text-2xl`}
                                >
                                    {codeResult.cases[currentTestIndex]?.status ? "Doğru Cevap" : "Yanlış Cevap"}
                                </h2>
                                <div className='flex flex-wrap gap-x-2 gap-y-4'>
                                    {codeResult.cases.map((_case, i) => (
                                        <Button
                                            size={"sm"}
                                            variant={i == currentTestIndex ? "outline" : "ghost"}
                                            onClick={() => setCurrentTestIndex(i)}
                                        >
                                            <span className={`${_case.status ? 'bg-success' : 'bg-destructive'} w-3 h-3 rounded-full mr-1`}></span>
                                            Test {i + 1}
                                        </Button>
                                    ))}
                                </div>
                                {[
                                    { label: "Girdi", value: codeResult.cases[currentTestIndex]?.input?.replace(/\\"/g, '') },
                                    { label: "Beklenen", value: codeResult.cases[currentTestIndex]?.expected },
                                    { label: "Çıktı", value: codeResult.cases[currentTestIndex]?.output },
                                ].map((item, i) => (
                                    <div key={i} className=''>
                                        <label className='text-sm'>{item.label}</label>
                                        <SyntaxHighlighter
                                            children={String(item.value)?.replace(/\n$/, '') || ""}
                                            style={SyntaxThemes[theme]}
                                            PreTag="div"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </TabsContent>
                </div>
            </div>
        </Tabs>
    )
}

export default Terminal