import { PlayIcon, Share2Icon } from '@kod/icons'
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '@kod/ui'

const Terminal = () => {
    const handleRunCode = () => {
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
                    {/* <Button variant={"secondary"} size={"sm"} onClick={handleRunCode}>
                                            <MixerHorizontalIcon className='mr-1'/>
                                            Testleri Başlat
                                        </Button> */}
                    <Button variant={"default"} size={"sm"} onClick={handleSaveCode}>
                        <Share2Icon className='mr-1' />
                        Kaydet
                    </Button>
                </div>
            </TabsList>
            <div className='h-0 flex-auto overflow-auto p-2'>
                <div className='h-full overflow-y-auto'>
                    <TabsContent value="output">
                        <div className={"font-code text-sm"} dangerouslySetInnerHTML={{ __html: "Çalıştırılıyor..." }} />
                        {/* {(isRunning || output) && <div className={"font-code text-sm"} dangerouslySetInnerHTML={{ __html: output }} />} */}
                        {/* {codeResult?.cases && (
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
                                    { label: "Girdi", value: codeResult.cases[currentTestIndex]?.input },
                                    { label: "Beklenen", value: codeResult.cases[currentTestIndex]?.expected },
                                    { label: "Çıktı", value: codeResult.cases[currentTestIndex]?.output },
                                ].map((item, i) => item.value && (
                                    <div key={i} className=''>
                                        <label className='text-sm'>{item.label}</label>
                                        <SyntaxHighlighter
                                            //@ts-ignore
                                            children={String(item.value).replace(/\n$/, '')}
                                            //@ts-ignore
                                            style={theme == THEMES.DARK ? oneDark : oneLight}
                                            PreTag="div"
                                        />
                                    </div>
                                ))}
                            </div>
                        )} */}
                        {/* <div className={"font-code text-sm"} dangerouslySetInnerHTML={{ __html: output }} /> */}
                    </TabsContent>
                    {/* <TabsContent value="console">
                                            <div className={"font-code text-sm"} dangerouslySetInnerHTML={{ __html: output }} />
                                        </TabsContent> */}
                </div>
            </div>
        </Tabs>
    )
}

export default Terminal