"use client"
import ProblemListButton from '@/app/(modules)/problems/[slug]/(editor)/components/ProblemListButton'
import { Logo } from '@/components/logo'
import { Markdown } from '@/components/markdown'
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
import { CaretSortIcon, ChatBubbleIcon, CheckIcon, CopyIcon, EnterFullScreenIcon, EyeOpenIcon, GearIcon, MoonIcon, ThickArrowUpIcon, UpdateIcon, UploadIcon } from '@radix-ui/react-icons'
import { useTheme } from "next-themes"
import React from 'react'
import Split from 'react-split'
import "./editor.css"
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

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


const page = () => {
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
                <TabsContent value="submissions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi assumenda atque aliquam iure illo ducimus voluptas nulla enim natus possimus iusto aliquid vel quo odio reiciendis, error nam suscipit officia, quidem culpa? Corporis incidunt et, perspiciatis quas amet eaque laudantium cupiditate voluptatem minus repellat accusamus id, a impedit aliquid. Minima sit quam, quia quae, laboriosam sint nesciunt quo quis, labore provident reprehenderit ipsam reiciendis aperiam eos cum. Vero, maxime error aliquid iusto explicabo velit, beatae pariatur eligendi esse similique delectus iste quae aperiam dolorem! Laudantium, eius natus, odit nulla maiores doloremque facilis ipsa doloribus, quasi eos accusantium quae labore deserunt expedita adipisci! Sint tempore iusto obcaecati impedit corrupti quidem non commodi suscipit maxime velit excepturi, repudiandae recusandae dignissimos sequi, voluptatum, aut vitae inventore quisquam animi ex! Modi facilis nemo quibusdam at dolorem accusantium neque quod corrupti quas. Tempore ratione sint rerum nemo eum earum porro, provident inventore, debitis quis, sequi optio totam deserunt. Nam ipsa, possimus aut sapiente ullam et sit quaerat. Iusto cumque deleniti sint tempore eligendi dicta provident molestias nihil natus eos, fugiat nisi illo, numquam vitae a incidunt explicabo fuga esse voluptates iste corrupti quis amet consequuntur. Numquam provident reprehenderit veritatis ab, praesentium laborum impedit non ipsam fugit animi. Eos itaque placeat atque, corporis quam recusandae ullam quod, doloribus ducimus exercitationem delectus beatae, enim pariatur! Voluptatum, rem eum possimus itaque expedita, reprehenderit aliquam beatae distinctio nobis praesentium maiores voluptate ipsum! Nisi, cumque quis. Adipisci odit, rem necessitatibus maiores praesentium architecto quis quae soluta inventore ex quia sint quas laborum sequi natus autem sit ullam! Aperiam ducimus deserunt dolorem eos ipsa porro rem, at voluptas consectetur mollitia facere iure, fugit temporibus accusantium totam dolore fuga quasi delectus cumque eius, facilis alias laboriosam aut magni. Quisquam, maxime tenetur ipsum distinctio sequi reiciendis culpa adipisci nihil deleniti et neque quis quae, similique nulla nesciunt voluptatem soluta delectus explicabo molestias molestiae! Ipsam odio nisi eos, facere exercitationem aliquam quas unde officiis! Cupiditate temporibus quasi numquam fugiat quae recusandae odit. Ad doloribus commodi eveniet eligendi labore fugit quia deserunt magni porro amet distinctio repudiandae, minus, magnam asperiores. Quidem, eaque rem laudantium libero pariatur neque iure odio quo eos. Minima blanditiis cupiditate magnam sit saepe, sequi fugiat! Minima exercitationem totam iusto. Ad inventore maiores aut vel deleniti harum eaque omnis laborum ullam repellendus nesciunt eligendi incidunt vero possimus atque sunt aliquid, delectus, culpa sequi aperiam fuga molestiae autem repudiandae! Fuga, doloremque delectus ut sunt eveniet praesentium tenetur quis pariatur? Officia ad sed quos maiores ipsam nemo quae molestias minus expedita iure nisi totam quia voluptate quis magnam ex, ut eum voluptatem fugit est assumenda delectus sint quaerat ipsum? A quia, placeat tempore sapiente reiciendis, enim perferendis, eius doloribus sit dolore pariatur magni. Debitis vitae molestiae qui nisi, earum sit quod nostrum accusantium voluptatem exercitationem cupiditate maxime saepe iste? Eaque odit deserunt nobis! Dolore molestiae illo deserunt ad at consectetur harum eos beatae ea incidunt temporibus dicta fugit delectus autem porro, tempore eum, ullam et est aut repellendus quod eaque. Natus inventore atque excepturi similique voluptas quas modi praesentium tenetur, maiores numquam laboriosam unde, tempora, facere corrupti! Dolorem animi placeat deleniti aperiam illum officia, magni minus harum! Labore esse eligendi veniam molestias odio totam neque voluptatem cupiditate eum. Deleniti aperiam dolore libero iste minima consequatur explicabo nobis voluptatem facere quas harum ratione inventore expedita delectus accusamus sed repellendus, eum veniam in fuga perferendis esse aliquam? Asperiores quae consequuntur aliquam quod possimus dolore a corrupti, rem earum modi voluptas doloribus explicabo nihil nobis! Eveniet architecto repellendus ea numquam dolor fugit voluptate quasi esse odio et at porro est asperiores culpa, molestias sequi quod ratione repellat deleniti quibusdam aspernatur nemo nihil quam. Reprehenderit iusto quia, veritatis molestias voluptates porro dicta quae necessitatibus autem! Amet impedit quasi laboriosam dolorem aperiam sint, quam consequatur laudantium et. Quas quasi non architecto tempora consequatur dolores, atque adipisci veniam. Animi repellendus impedit vitae cumque asperiores dicta id maxime delectus, consequuntur totam eaque deleniti ab velit! Totam ut iusto quae ducimus error a exercitationem maxime, voluptates magnam corrupti est reiciendis expedita amet corporis voluptatem adipisci animi laborum asperiores! Dolorem quidem quibusdam ex dolore velit dolores possimus cumque, facilis vitae nesciunt placeat nemo? Ab voluptas blanditiis eum natus. Vitae atque cumque repellendus nam voluptatum dolor totam! Molestiae, nostrum libero delectus sit cumque dolore beatae qui earum doloremque expedita pariatur sint explicabo repellat eaque, quas error reiciendis vero dolores. Repellat unde nostrum atque cum dolore commodi cumque iusto, ex ipsam illum dolor sequi blanditiis. Nulla eveniet neque doloremque aut laborum qui a ipsam nihil impedit accusamus non nemo maxime deserunt modi iusto ad dolore aliquam vitae necessitatibus perspiciatis voluptatem dignissimos, et quis! Dolore unde pariatur aspernatur dignissimos, cupiditate optio exercitationem, a architecto labore facilis perferendis, saepe rerum at asperiores corporis necessitatibus sit voluptatibus ratione quos beatae repellat consequuntur deleniti officiis? Aliquam, sunt nemo vel ad sed libero quo velit expedita blanditiis illum! Adipisci expedita ipsum, laboriosam beatae accusamus fuga iusto. Laudantium vitae aliquid qui accusamus ducimus omnis quia asperiores, numquam necessitatibus illo aliquam nesciunt impedit ad maxime tempore officiis ut molestias odit laboriosam quos perspiciatis soluta? Placeat sit voluptates voluptatibus laboriosam, illum fugit accusamus optio expedita quam dolorem neque sint libero est, velit tenetur ratione et. Unde molestiae natus ipsa soluta et, ut sapiente animi fugiat. Quisquam quam illum deserunt voluptas commodi expedita delectus, corrupti nesciunt accusamus quae excepturi eos quos. Quis soluta voluptas temporibus fugit tenetur ipsum! Tempore impedit quidem alias quisquam culpa, temporibus quia modi neque architecto nemo harum molestias. Est quo odit laboriosam laudantium placeat ipsum praesentium inventore sapiente necessitatibus minus quisquam, excepturi omnis tenetur labore reiciendis adipisci veritatis similique, voluptas nihil molestias impedit esse mollitia consequuntur iusto! Sint, quod debitis odit, magnam in rerum, quaerat nemo earum voluptatem ullam obcaecati repellat voluptas quis praesentium. Esse vitae debitis libero quidem quaerat eius voluptatem ratione sed amet dignissimos consectetur animi tempore nulla temporibus nesciunt ex modi similique, in cupiditate nostrum ab omnis repudiandae harum? Inventore eligendi in iusto quae ullam sequi earum ipsa dolore neque? Nam quaerat corporis quibusdam ullam amet!</TabsContent>
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