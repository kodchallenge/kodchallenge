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
import { CaretSortIcon, CheckIcon, CopyIcon, EnterFullScreenIcon, GearIcon, MoonIcon, UpdateIcon } from '@radix-ui/react-icons'
import { useTheme } from "next-themes"
import Link from 'next/link'
import { useRouter, useParams, usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import Split from 'react-split'
import ProblemListButton from './_components/ProblemListButton'
import "./editor.css"
import problemService from '@/services/problemService'
import { Problem, ProblemLanguage } from '@/types/problem'
import { CommandLoading } from 'cmdk'
import EditorLoading from './_components/EditorLoading'
import { Markdown } from '@/components/markdown'

const colorizeTerminalOutput = (output: string) => {
    const colorCodes = ["WARNING", "INFO", "SUCCESS", "ERROR"]

    colorCodes.forEach((colorCode) => {
        const regex = new RegExp(`\\[${colorCode}\\](.*?)\\[\\/${colorCode}\\]`, "g")
        output = output.replace(regex, `<span class="terminal-${colorCode.toLowerCase()}">$1</span>`)
    })
    // replace \n to <br>
    output = output.replace(/\n/g, "<br>")
    return output
}

const output = colorizeTerminalOutput(`- [WARNING]warn[/WARNING] See more info here: https://nextjs.org/docs/messages/invalid-next-config
- [INFO]event compiled client and server[/INFO] [SUCCESS]successfully in 185 ms (20 modules)[/SUCCESS]
- [ERROR]wait compiling...[/ERROR]
- [SUCCESS]event compiled client and server successfully in 73 ms (20 modules)[/SUCCESS]
- [WARNING]warn[/WARNING] compiling /editor/page (client and server)...
- [INFO]event[/INFO] compiled client and server successfully in 2.7s (2289 modules)
- [WARNING]warn[/WARNING] compiling...
- [INFO]event[/INFO] compiled successfully in 574 ms (1143 modules)
- [WARNING]warn[/WARNING] compiling /favicon.ico/route (client and server)...
- [INFO]event[/INFO] compiled client and server successfully in 1129 ms (2315 modules)
- [WARNING]warn[/WARNING] compiling...
- [INFO]event[/INFO] compiled client and server successfully in 1028 ms (2342 modules)
`)

const defaultCode = `/**
 * @Author: Yasin Torun
 * @Description: 
 * lorem ipsum dolor sit amet
 * @param {number[]} nums
*/
const showNumber = (nums) => {
  // TODO: implement
}
`

const languages = [
    // { value: "c", label: "C" },
    // { value: "cpp", label: "C++", },
    // { value: "cs", label: "C#" },
    // { value: "java", label: "Java" },
    { value: "js", label: "JavaScript" },
    // { value: "ts", label: "TypeScript" },
    // { value: "py", label: "Python" },
    // { value: "kt", label: "Kotlin" },
    // { value: "go", label: "Go" },
]

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

    useEffect(() => {
        problemService.getProblemBySlug(params.slug).then(problem => {
            setProblem(problem)
            setLanguage(problem.base_codes[0].language)
        })
    }, [params.slug])

    if (problem == null) return <EditorLoading />

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
            <main className='h-full flex-1 bg-slate-100 dark:bg-slate-800 dark:text-foreground'>
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
                                            <Button size={"icon"} variant={"ghost"}>
                                                <CopyIcon />
                                            </Button>
                                            <Button size={"icon"} variant={"ghost"}>
                                                <UpdateIcon />
                                            </Button>
                                            <Button size={"icon"} variant={"ghost"}>
                                                <GearIcon />
                                            </Button>
                                            <Button size={"icon"} variant={"ghost"}>
                                                <EnterFullScreenIcon />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className='h-0 flex-1 flex-grow overflow-auto !w-full'>
                                    <MonacoEditor
                                        // height={height}
                                        language={convertToMonacoLanguage(language?.slug ?? "")}
                                        value={problem?.base_codes.find(x => x.language.id == language?.id)?.code ?? ""}
                                        theme={theme == THEMES.DARK ? "vs-dark" : "light"}
                                        beforeMount={(monaco) => {
                                            // monaco.editor.defineTheme('one-dark', oneDark)
                                        }}
                                        onMount={(editor, monaco) => {
                                            // editorRef.current = editor
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
                                        <Button variant={"secondary"} size={"sm"}>Çalıştır</Button>
                                        <Button variant={"success"} size={"sm"} disabled>Kaydet</Button>
                                    </div>
                                </TabsList>
                                <div className='h-0 flex-auto overflow-auto p-2'>
                                    <div className='h-full overflow-y-auto'>
                                        <TabsContent value="console">
                                            <div className={"font-code text-sm"} dangerouslySetInnerHTML={{ __html: output }} />
                                        </TabsContent>
                                        <TabsContent value="output">Change your password here.</TabsContent>
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