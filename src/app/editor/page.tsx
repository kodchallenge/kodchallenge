"use client"
import { Logo } from '@/components/logo'
import { Markdown } from '@/components/markdown'
import { Button } from '@/components/ui/button'
import { HamburgerMenuIcon, MoonIcon } from '@radix-ui/react-icons'
import "./editor.css"
import ProblemListButton from '@/app/editor/components/ProblemListButton'
import MonacoEditor from "@monaco-editor/react";
import editor from 'monaco-editor'
import React, { useEffect } from 'react'
import { cn } from '@/lib/utils'
import Split from 'react-split'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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
- wait compiling /editor/page (client and server)...
- event compiled client and server successfully in 2.7s (2289 modules)
- wait compiling...
- event compiled successfully in 574 ms (1143 modules)
- wait compiling /favicon.ico/route (client and server)...
- event compiled client and server successfully in 1129 ms (2315 modules)
- wait compiling...
- event compiled client and server successfully in 1028 ms (2342 modules)
- [WARNING]warn[/WARNING] See more info here: https://nextjs.org/docs/messages/invalid-next-config
- [INFO]event compiled client and server[/INFO] [SUCCESS]successfully in 185 ms (20 modules)[/SUCCESS]
- [ERROR]wait compiling...[/ERROR]
- [SUCCESS]event compiled client and server successfully in 73 ms (20 modules)[/SUCCESS]
- wait compiling /editor/page (client and server)...
- event compiled client and server successfully in 2.7s (2289 modules)
- wait compiling...
- event compiled successfully in 574 ms (1143 modules)
- wait compiling /favicon.ico/route (client and server)...
- event compiled client and server successfully in 1129 ms (2315 modules)
- wait compiling...
- event compiled client and server successfully in 1028 ms (2342 modules)
- [WARNING]warn[/WARNING] See more info here: https://nextjs.org/docs/messages/invalid-next-config
- [INFO]event compiled client and server[/INFO] [SUCCESS]successfully in 185 ms (20 modules)[/SUCCESS]
- [ERROR]wait compiling...[/ERROR]
- [SUCCESS]event compiled client and server successfully in 73 ms (20 modules)[/SUCCESS]
- wait compiling /editor/page (client and server)...
- event compiled client and server successfully in 2.7s (2289 modules)
- wait compiling...
- event compiled successfully in 574 ms (1143 modules)
- wait compiling /favicon.ico/route (client and server)...
- event compiled client and server successfully in 1129 ms (2315 modules)
- wait compiling...
- event compiled client and server successfully in 1028 ms (2342 modules)
- [WARNING]warn[/WARNING] See more info here: https://nextjs.org/docs/messages/invalid-next-config
- [INFO]event compiled client and server[/INFO] [SUCCESS]successfully in 185 ms (20 modules)[/SUCCESS]
- [ERROR]wait compiling...[/ERROR]
- [SUCCESS]event compiled client and server successfully in 73 ms (20 modules)[/SUCCESS]
- wait compiling /editor/page (client and server)...
- event compiled client and server successfully in 2.7s (2289 modules)
- wait compiling...
- event compiled successfully in 574 ms (1143 modules)
- wait compiling /favicon.ico/route (client and server)...
- event compiled client and server successfully in 1129 ms (2315 modules)
- wait compiling...
- event compiled client and server successfully in 1028 ms (2342 modules)
- [WARNING]warn[/WARNING] See more info here: https://nextjs.org/docs/messages/invalid-next-config
- [INFO]event compiled client and server[/INFO] [SUCCESS]successfully in 185 ms (20 modules)[/SUCCESS]
- [ERROR]wait compiling...[/ERROR]
- [SUCCESS]event compiled client and server successfully in 73 ms (20 modules)[/SUCCESS]
- wait compiling /editor/page (client and server)...
- event compiled client and server successfully in 2.7s (2289 modules)
- wait compiling...
- event compiled successfully in 574 ms (1143 modules)
- wait compiling /favicon.ico/route (client and server)...
- event compiled client and server successfully in 1129 ms (2315 modules)
- wait compiling...
- event compiled client and server successfully in 1028 ms (2342 modules)
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

const page = () => {
  const editorRef = React.useRef<editor.editor.IStandaloneCodeEditor>()

  // useEffect(() => {
  //   editorRef
  //   setShowConsole(false)
  // }, [])

  return (
    <div className='h-full flex flex-col max-h-screen overflow-hidden'>
      <header className='flex shadow items-center justify-between px-4 py-2'>
        <div className='flex items-center space-x-3 e-header-start'>
          <Logo />
          <ProblemListButton />
        </div>
        <div className='e-header-center'>

        </div>
        <div className='flex items-center space-x-3 e-header-end'>
          <div>
            <Button size={"icon"} variant={"ghost"}>
              <MoonIcon />
            </Button>
          </div>
          <div>
            <Button size={"sm"}>Giriş Yap</Button>
          </div>
        </div>
      </header>
      <main className='h-full flex-1 bg-slate-100'>
        <Split
          className='px-4 h-full py-2 flex'
          gutterSize={8}
          sizes={[50, 50]}
          minSize={[300, 400]}
        >
          <Tabs defaultValue="description" className="h-full flex-col flex e-side-info border bg-white">
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
                <TabsContent value="solutions">Change your password here.</TabsContent>
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
              <section className='flex flex-col border bg-white !w-full'>
                <div className='h-10 border-b'>

                </div>
                <div className='h-0 flex-1 flex-grow overflow-auto !w-full'>
                  <MonacoEditor
                    // height={height}
                    language={"javascript"}
                    value={defaultCode}
                    theme={"light"}
                    beforeMount={(monaco) => {
                      // monaco.editor.defineTheme("dark", Dark)
                    }}
                    onMount={(editor, monaco) => {
                      editorRef.current = editor
                    }}
                  />
                </div>
              </section>
              <Tabs defaultValue="console" className="flex flex-col bg-white border min-h-0">
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
                      <div className={"font-code text-sm"} dangerouslySetInnerHTML={{__html: output}}/>
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