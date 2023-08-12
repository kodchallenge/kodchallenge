"use client"
import { Logo } from '@/components/logo'
import { Markdown } from '@/components/markdown'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
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
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { THEMES } from '@/constants'
import { cn } from '@/lib/utils'
import MonacoEditor from "@monaco-editor/react"
import { CaretSortIcon, ChatBubbleIcon, CheckIcon, CopyIcon, EnterFullScreenIcon, EyeOpenIcon, GearIcon, MoonIcon, ThickArrowUpIcon, UpdateIcon } from '@radix-ui/react-icons'
import { useTheme } from "next-themes"
import Link from 'next/link'
import React from 'react'
import Split from 'react-split'
import ProblemListButton from './components/ProblemListButton'
import "./editor.css"

const md = `## Test

Lorem ipsum, dolor sit \`test="asda asda sd as"\` amet consectetur adipisicing elit. Quisquam odio asperiores nobis accusantium modi fugiat alias vitae illum est iusto blanditiis molestias voluptatem explicabo ipsum, distinctio dolores eveniet perferendis! Dolorem fuga omnis, tempora quis, accusamus facilis eligendi harum at aperiam cumque quisquam praesentium iste placeat aliquam repudiandae similique libero sit dolor voluptatibus incidunt corrupti! Esse voluptas aliquam incidunt magni!

lorem ip sum dolar sit amet

lorem **ip sum** \`a=1\` dolar sit amet asd asd asdlplk1lkalsd asdl kaspdk

- Yapılacak 1 
- Yapılacak 2
- Yapılacak 3

[Link](https://google.com)

LineBreak


\`\`\`bash
*Girdi:* nums = [3, 2, 4], target = 6
*Çıktı:* [1, 2]
\`\`\`

BR Test

Another LineBreak \\
Another  test


\`\`\`js
const a = 1
\`\`\`


> If you want to use a quote by someone else you can do this with a \\
> blockquote like this.


## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |
| 1 | 2  |  3 |  4  |
| 5 | 6  |  7 |  8  |

## Tasklist

- [ ] to do
- [x] done
`

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

// write one dark theme for monoaco editor
const oneDark = {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "", foreground: "abb2bf" },
    { token: "invalid", foreground: "ff3333" },
    { token: "emphasis", fontStyle: "italic" },
    { token: "strong", fontStyle: "bold" },

    { token: "variable", foreground: "d19a66" },
    { token: "variable.predefined", foreground: "d19a66" },
    { token: "variable.parameter", foreground: "9CDCFE" },
    { token: "constant", foreground: "569cd6" },
    { token: "comment", foreground: "8c8c8c" },
    { token: "number", foreground: "b5cea8" },
    { token: "number.hex", foreground: "5bb498" },
    { token: "regexp", foreground: "d16969" },
    { token: "annotation", foreground: "cc6666" },
    { token: "type", foreground: "3DC9B0" },

    { token: "delimiter", foreground: "abb2bf" },
    { token: "delimiter.html", foreground: "808080" },
    { token: "delimiter.xml", foreground: "808080" },

    { token: "tag", foreground: "e06c75" },
    { token: "tag.id.jade", foreground: "e06c75" },
    { token: "tag.class.jade", foreground: "e06c75" },
    { token: "meta.scss", foreground: "e06c75" },
    { token: "metatag", foreground: "e06c75" },
    { token: "metatag.content.html", foreground: "ff0000" },
    { token: "metatag.html", foreground: "808080" },
    { token: "metatag.xml", foreground: "808080" },
    { token: "metatag.php", fontStyle: "bold" },

    { token: "key", foreground: "c678dd" },
    { token: "string.key.json", foreground: "c678dd" },
    { token: "string.value.json", foreground: "98c379" },

    { token: "attribute.name", foreground: "d19a66" },
    { token: "attribute.value", foreground: "98c379" },
    { token: "attribute.value.number", foreground: "d19a66" },
    { token: "attribute.value.unit", foreground: "d19a66" },
    { token: "attribute.value.html", foreground: "d19a66" },
    { token: "attribute.value.xml", foreground: "d19a66" },

    { token: "string", foreground: "98c379" },
    { token: "string.html", foreground: "98c379" },
    { token: "string.sql", foreground: "98c379" },
    { token: "string.yaml", foreground: "98c379" },

    { token: "keyword", foreground: "c678dd" },
    { token: "keyword.json", foreground: "c678dd" },
    { token: "keyword.flow", foreground: "c678dd" },
    { token: "keyword.flow.scss", foreground: "c678dd" },

    { token: "operator.scss", foreground: "909090" },
    { token: "operator.sql", foreground: "909090" },
    { token: "operator.swift", foreground: "909090" },
    { token: "predefined.sql", foreground: "d19a66" },

  ],
  colors: {
    "editor.foreground": "#ABB2BF",
    "editor.background": "#282C34",
    "editor.selectionBackground": "#3E4451",
    "editor.lineHighlightBackground": "#2C313A",
    "editorCursor.foreground": "#528BFF",
    "editorWhitespace.foreground": "#3B4048",
  },
}


const languages = [
  { value: "c", label: "C" },
  { value: "cpp", label: "C++", },
  { value: "cs", label: "C#" },
  { value: "java", label: "Java" },
  { value: "js", label: "JavaScript" },
  { value: "ts", label: "TypeScript" },
  { value: "py", label: "Python" },
  { value: "kt", label: "Kotlin" },
  { value: "go", label: "Go" },
]

type EditorPageProps = {
  params: {
    slug: string
  }
}

const page = ({ params }: EditorPageProps) => {
  // const editorRef = React.useRef<editor.editor.IStandaloneCodeEditor>()
  const { setTheme, theme } = useTheme()
  const [open, setOpen] = React.useState(false)
  const [language, setLanguage] = React.useState<typeof languages[0]>(languages.find(x => x.value == "js") ?? languages[0])
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
            İkilik tabandan Onluk tabana dönüşüm
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
          <Tabs defaultValue="description" className="h-full flex-col flex e-side-info border bg-background">
            <TabsList className='h-10 border-b bg-transparent justify-start rounded-none text-left'>
              <TabsTrigger value="description">Açıklama</TabsTrigger>
              <TabsTrigger value="solutions">Çözümler</TabsTrigger>
              <TabsTrigger value="submissions">Kaydettiklerin</TabsTrigger>
            </TabsList>
            <div className='h-0 flex-auto overflow-auto p-2'>
              <div className='h-full overflow-y-auto'>
                <TabsContent value="description">
                  <Markdown markdown={md} />
                </TabsContent>
                <TabsContent value="solutions">
                  <div>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className='px-2 py-4 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer rounded-sm'>
                        <h1 className='text-lg font-medium mb-2'>✅3 Method's || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥</h1>
                        <div className='flex flex-wrap space-y-1 items-center space-x-3'>
                          <Link href={"#"} className='flex items-center space-x-1'>
                            <Avatar className='h-5 w-5'>
                              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                              <AvatarFallback>CN</AvatarFallback>,
                            </Avatar>
                            <h2 className='text-sm font-medium'>shadcn</h2>
                          </Link>
                          <div className='text-xs text-muted-foreground'>
                            09 Temmuz 2023
                          </div>
                          <div className='flex space-x-1 flex-1'>
                            {["C++", "Java", "Python"].map((label, i) => (
                              <Badge variant={"secondary"} key={i}>{label}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className='flex space-x-2 items-center'>
                            <Button className='space-x-2' variant={"ghost"} disabled>
                              <ThickArrowUpIcon />
                              <span className='text-xs'>682</span>
                            </Button>
                            <Button className='space-x-2' variant={"ghost"} disabled>
                              <EyeOpenIcon />
                              <span className='text-xs'>1.5K</span>
                            </Button>
                            <Button className='space-x-2' variant={"ghost"} disabled>
                              <ChatBubbleIcon />
                              <span className='text-xs'>3</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="submissions">
                  <div>
                    <div className=''>
                      <Table className='min-w[500px] overflow-auto'>
                        <TableBody>
                          {Array.from({ length: 10 }).map((_, i) => (
                            <TableRow key={i} >
                              <TableCell>
                                <p className={["text-success", "text-destructive", "text-warning", "text-warning", "text-destructive", "text-warning"][i % 6]}>
                                  {
                                    ["Accepted", "Wrong Answer", "Time Limit Exceeded", "Memory Limit Exceeded", "Runtime Error", "Compile Error"][i % 6]
                                  }
                                </p>
                              </TableCell>
                              <TableCell>
                                {["C++", "Java", "Python"][i % 3]}
                              </TableCell>
                              <TableCell>
                                {["10 Temmuz 2023", "11 Temmuz 2023", "12 Temmuz 2023"][i % 3]}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </div>
          </Tabs>
          <div>
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
                            <span className="truncate">{language.label}</span>
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            {/* <CommandInput placeholder="Search framework..." />
                            <CommandEmpty>No framework found.</CommandEmpty> */}
                            <CommandGroup>
                              {languages.map(lang => (
                                <CommandItem
                                  key={lang.value}
                                  onSelect={() => {
                                    setLanguage(lang)
                                    setOpen(false)
                                  }}
                                >
                                  <CheckIcon
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      language.value === lang.value ? "opacity-100" : "opacity-0"
                                    )}
                                  />
                                  {lang.label}
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
                    language={"javascript"}
                    value={defaultCode}
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
                    <Button variant={"success"} size={"sm"}>Kaydet</Button>
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

export default page