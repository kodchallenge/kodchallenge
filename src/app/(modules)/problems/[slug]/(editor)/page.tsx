"use client"
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import {
    Command,
    CommandGroup,
    CommandItem
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { THEMES } from '@/constants'
import { cn } from '@/lib/utils'
import MonacoEditor from "@monaco-editor/react"
import { CaretSortIcon, CheckIcon, CopyIcon, EnterFullScreenIcon, ExitFullScreenIcon, GearIcon, MixerHorizontalIcon, MoonIcon, PlayIcon, Share2Icon, UpdateIcon } from '@radix-ui/react-icons'
import { useTheme } from "next-themes"
import Link from 'next/link'
import { useRouter, useParams, usePathname } from 'next/navigation'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import Split from 'react-split'
import ProblemListButton from './_components/ProblemListButton'
import "./editor.css"
import problemService from '@/services/problemService'
import { Problem, ProblemLanguage } from '@/types/problem'
import { CommandLoading } from 'cmdk'
import EditorLoading from './_components/EditorLoading'
import { Markdown } from '@/components/markdown'
import { editor } from 'monaco-editor'
import { useKcAlert } from '@/core/alert-provider'
import CopyCodeToClipboard from './_components/CopyCodeToClipboard'
import FullScreenService from '@/lib/fullscreen-service'
import EditorSettings from './_components/EditorSettings'
import codeService from '@/services/codeService'

const colorizeTerminalOutput = (output: string) => {
    const colorCodes = ["WARNING", "INFO", "SUCCESS", "ERROR"]

    colorCodes.forEach((colorCode) => {
        const regex = new RegExp(`\\[${colorCode}\\]([\\s\\S]*?)\\[\\/${colorCode}\\]`, "g")
        output = output.replace(regex, `<span class="terminal-${colorCode.toLowerCase()}">$1</span>`)
    })
    // replace \n to <br>
    output = output.replace(/\n/g, "<br>")
    return output
}

const convertToMonacoLanguage = (language: string): string => {
    const map = {
        "js": "javascript",
        "ts": "typescript",
        "py": "python",
        "kt": "kotlin",
        "go": "golang",
        "c": "c",
        "cpp": "cpp",
        "cs": "csharp",
        "java": "java",
    }
    // @ts-ignore
    return map[language] ?? ""
}

type EditorPageProps = {
    params: {
        slug: string,
    }
}

const tabs = [
    { value: "description", label: "Açıklama" },
]

const Layout = ({ params }: EditorPageProps) => {
    // const editorRef = React.useRef<editor.editor.IStandaloneCodeEditor>()
    const { setTheme, theme } = useTheme()
    const [open, setOpen] = React.useState(false)
    const [language, setLanguage] = React.useState<ProblemLanguage | null>(null)
    const [problem, setProblem] = React.useState<Problem | null>(null)
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null)
    const [isRunning, setIsRunning] = useState<boolean>(false)
    const [output, setOutput] = React.useState<string>("")

    // TODO: change this. use full screen hook
    const [isFullscreen, setIsFullscreen] = React.useState(false)
    const kcAlert = useKcAlert()

    const problemDefaultCode = useMemo(() => problem?.base_codes.find(baseCode => baseCode.language == language)?.code ?? "", [problem, language])

    useEffect(() => {
        problemService.getProblemBySlug(params.slug).then(problem => {
            setProblem(problem)
            setLanguage(problem.base_codes[0].language)
        })
    }, [params.slug])

    if (problem == null) return <EditorLoading />

    const handleResetEditor = () => {
        kcAlert.alert("Uyarı", "Kodunuzu sıfırlamak istediğinize emin misiniz?", [
            {
                text: "Sıfırla", onClick: () => {
                    editorRef.current?.setValue(problemDefaultCode)
                }
            }
        ])
    }

    const handleRunCode = () => {
        const code = editorRef.current?.getValue()
        if(!language || !code) return;
        setIsRunning(true)
        setOutput(colorizeTerminalOutput("[SUCCESS]Çalıştırılıyor...[/SUCCESS]"))
        codeService.runCode({
            code,
            language: language.slug,
            problemSlug: problem.slug,
            userId: 1,
        }).then(res => {
            console.log(res.output)
            setOutput(colorizeTerminalOutput(res.output))
        }).catch(err => {
            console.error("Hata: ", typeof err.message)
            setOutput("[ERROR]Sistemsel hata oluştu![/ERROR]")
        }).finally(() => {
            setIsRunning(false)
        })
    }

    return (
        <div id='editor' className='h-full flex flex-col max-h-screen overflow-hidden'>
            <header className='flex shadow items-center justify-between px-4 py-2 bg-background'>
                <div className='flex items-center justify-start space-x-3 e-header-start w-auto md:w-[300px]'>
                    <Link href={"/"} className='no-underline'>
                        <Logo />
                    </Link>
                    <ProblemListButton />
                </div>
                <div className='e-header-center text-center'>
                    <h1 className='font-semibold'>
                        {problem?.title}
                    </h1>
                </div>
                <div className='flex items-center justify-end space-x-3 e-header-end w-auto md:w-[300px]'>
                    <div>
                        <Button size={"icon"} variant={"ghost"} onClick={() => setTheme(theme == THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)}>
                            <MoonIcon />
                        </Button>
                    </div>
                    <div>
                        <Button size={"sm"}>Giriş Yap</Button>
                    </div>
                </div>
            </header>
            <main id='kc-editor-main' className='h-full flex-1 bg-slate-100 dark:bg-slate-800 dark:text-foreground'>
                <Split
                    className='px-4 h-full py-2 flex'
                    gutterSize={8}
                    sizes={[50, 50]}
                    minSize={[300, 400]}
                >
                    <Tabs className="w-[50%] h-full flex-col flex e-side-info border bg-background">
                        <TabsList defaultValue={tabs[0].value} className='h-10 border-b bg-transparent justify-start rounded-none text-left'>
                            {tabs.map((tab, i) => (
                                <TabsTrigger key={i} value={tab.value}>{tab.label}</TabsTrigger>
                            ))}
                        </TabsList>
                        <div className='h-0 flex-auto overflow-auto p-2'>
                            <div className='h-full overflow-y-auto'>
                                <Markdown markdown={problem?.description} />
                            </div>
                        </div>
                    </Tabs>
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
                                        <div>
                                            <Popover open={open} onOpenChange={setOpen}>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        size={"sm"}
                                                        variant="outline"
                                                        role="combobox"
                                                        aria-expanded={open}
                                                        className="w-[125px] border-slate-300 dark:border-slate-600 justify-between"
                                                    >
                                                        <span className="truncate">{language?.name}</span>
                                                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-[200px] p-0">
                                                    <Command>
                                                        {/* <CommandInput placeholder="Search framework..." />
                            <CommandEmpty>No framework found.</CommandEmpty> */}
                                                        <CommandGroup>
                                                            {problem?.base_codes.map(code => (
                                                                <CommandItem
                                                                    key={code.language.slug}
                                                                    onSelect={() => {
                                                                        setLanguage(code.language)
                                                                        setOpen(false)
                                                                    }}
                                                                >
                                                                    <CheckIcon
                                                                        className={cn(
                                                                            "mr-2 h-4 w-4",
                                                                            language?.id === code.language.id ? "opacity-100" : "opacity-0"
                                                                        )}
                                                                    />
                                                                    {code.language.name}
                                                                </CommandItem>
                                                            ))}
                                                        </CommandGroup>
                                                    </Command>
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <div className='flex justify-end items-center space-x-1'>
                                            <CopyCodeToClipboard editorRef={editorRef} />
                                            <Button
                                                size={"icon"}
                                                variant={"ghost"}
                                                onClick={handleResetEditor}
                                                title='Editörü sıfırla'
                                            >
                                                <UpdateIcon />
                                            </Button>
                                            {!!editorRef.current && (
                                                <EditorSettings editorRef={editorRef} />
                                            )}
                                            <Button
                                                size={"icon"}
                                                variant={"ghost"}
                                                onClick={() => {
                                                    const fullscreen = new FullScreenService()
                                                    isFullscreen
                                                        ? fullscreen.exitFullscreen() :
                                                        fullscreen.requestFullscreen(document.documentElement)
                                                    setIsFullscreen(!isFullscreen)
                                                }}
                                                title={isFullscreen ? "Tam ekrandan çık" : "Tam ekran"}
                                            >
                                                {isFullscreen ? <ExitFullScreenIcon /> : <EnterFullScreenIcon />}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className='h-0 flex-1 flex-grow overflow-auto !w-full'>
                                    <MonacoEditor
                                        // height={height}
                                        language={convertToMonacoLanguage(language?.slug ?? "")}
                                        value={problemDefaultCode}
                                        theme={theme == THEMES.DARK ? "vs-dark" : "light"}
                                        beforeMount={(monaco) => {
                                            // monaco.editor.defineTheme('one-dark', oneDark)
                                        }}
                                        onMount={(editor, monaco) => {
                                            editorRef.current = editor
                                        }}

                                    />
                                </div>
                            </section>
                            <Tabs defaultValue="console" className="flex flex-col bg-background border min-h-0">
                                <TabsList className='h-10 border-b bg-transparent justify-between rounded-none text-left'>
                                    <div>
                                        <TabsTrigger value="console">Konsol</TabsTrigger>
                                        <TabsTrigger value="output">Sonuç</TabsTrigger>
                                    </div>
                                    <div className='flex items-start space-x-2'>
                                        <Button variant={"ghost"} size={"sm"} onClick={handleRunCode}>
                                            <PlayIcon className='mr-1'/>
                                            Çalıştır
                                        </Button>
                                        <Button variant={"secondary"} size={"sm"} onClick={handleRunCode}>
                                            <MixerHorizontalIcon className='mr-1'/>
                                            Testleri Başlat
                                        </Button>
                                        <Button variant={"success"} size={"sm"} disabled>
                                            <Share2Icon className='mr-1'/>
                                            Kaydet
                                        </Button>
                                    </div>
                                </TabsList>
                                <div className='h-0 flex-auto overflow-auto p-2'>
                                    <div className='h-full overflow-y-auto'>
                                        <TabsContent value="console">
                                            <div className={"font-code text-sm"} dangerouslySetInnerHTML={{ __html: output }} />
                                        </TabsContent>
                                        <TabsContent value="output">

                                        </TabsContent>
                                    </div>
                                </div>
                            </Tabs>
                        </Split>
                    </div>
                </Split>
            </main>
        </div >
    )
}

export default Layout