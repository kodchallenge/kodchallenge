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
          minSize={200}
        >
          <section className='h-full flex-col flex flex-11 e-side-info border bg-white'>
            <div className='h-10 border-b'></div>
            <div className='h-0 flex-auto overflow-auto p-2'>
              <Markdown markdown={md} />
            </div>
            {/* <Tabs defaultValue="account" className="w-full h-full bg-transparent">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <div className='h-full overflow-y-auto'>
                <TabsContent value="account">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolorem obcaecati. Omnis molestiae vel tempore rerum dolorum, similique sed atque quidem quisquam eveniet, perspiciatis aliquid blanditiis mollitia nobis perferendis maiores repellat voluptate eum. Assumenda nulla unde odit ipsum repellendus dolorem possimus quibusdam cupiditate, pariatur, cumque eveniet aliquid soluta? Vero natus fugiat libero, dignissimos explicabo, soluta quod tempora, ipsam consequuntur quo perspiciatis dolorem quasi. Quasi nulla ratione labore minima? Officiis eius provident quia doloribus autem! Soluta iusto itaque ipsum perferendis quos earum dolore est incidunt sunt quidem inventore ducimus, ab enim laboriosam reprehenderit libero dolor debitis quam labore asperiores exercitationem neque. Rerum adipisci animi cupiditate numquam excepturi qui maiores officia soluta atque similique hic exercitationem expedita tenetur at ipsam nihil, ratione quisquam dolorem voluptas voluptatibus natus? Placeat nobis harum amet vel et blanditiis, distinctio ab eveniet laborum omnis doloribus itaque architecto voluptas, quas velit unde earum, molestiae qui molestias? Fugiat voluptas nemo tempore ullam distinctio commodi accusantium quas nostrum modi eveniet! Natus aliquid enim deserunt ex deleniti nesciunt odio cum. Fugit deserunt delectus officiis perferendis laudantium, tenetur laboriosam at distinctio obcaecati pariatur voluptatum eaque. Fuga vero ipsa atque sapiente saepe ab alias aspernatur ratione molestiae placeat tempore, eos aliquid voluptates cum sunt blanditiis error aut maxime optio. Tempore at eos sequi necessitatibus eaque quis illum, quo excepturi magnam dolorum ullam quos? Aliquam, laborum provident. Vitae, inventore. Optio voluptatum voluptatem beatae. Molestias, corporis aut vero qui quia eum natus reprehenderit eaque ratione nesciunt fugiat velit maxime nobis vel numquam, consectetur quis iure, tempore repellendus omnis tenetur hic iste animi aliquam! Unde eligendi perferendis commodi consequuntur perspiciatis, laborum animi libero sit expedita fugiat, cupiditate quas inventore. Neque, reiciendis. Quos pariatur ipsa porro necessitatibus commodi tempora ex facilis nostrum? Impedit quos suscipit obcaecati tempore nisi, amet totam alias. Aperiam voluptatibus dolore saepe vero deserunt ex incidunt labore fugiat voluptate. Praesentium enim maiores ex quasi voluptas mollitia cumque, reiciendis laboriosam, porro asperiores qui libero odio omnis tempora ipsam quas labore minus excepturi. Accusamus voluptate commodi perferendis dolor, sunt ipsam quos nesciunt voluptatibus eius, fugit dolorem. Illo quam perspiciatis enim. Fugiat ratione tempora ab consectetur non odit ipsam, natus delectus quae nemo similique, magnam libero, facilis debitis sed. Architecto quod harum, neque fugiat adipisci repellendus iste quae debitis vitae sit ratione dolor quaerat aliquam delectus temporibus possimus voluptates ea! Eius minus velit voluptatibus aperiam pariatur quaerat a est nam nihil maiores soluta alias natus veritatis, voluptatem quisquam excepturi molestiae earum nostrum dolorem harum explicabo expedita consequatur rerum dolorum? Quo veritatis, consequuntur asperiores numquam incidunt doloremque facere distinctio expedita voluptatem provident modi pariatur dolore officiis fugit alias nesciunt porro eos adipisci eligendi ea obcaecati. Temporibus nesciunt sint numquam, quasi commodi earum sunt consequuntur sequi natus incidunt quia ducimus animi, omnis corporis. Quia neque, nostrum sapiente repudiandae odit ab tenetur optio omnis molestiae necessitatibus debitis? Dolore veniam quis hic maxime, doloremque doloribus, expedita dolorem dolores commodi, quia repellendus necessitatibus! Optio modi laborum officiis beatae obcaecati architecto, asperiores aspernatur et sit est ipsum earum aut officia delectus dolorum natus facilis nostrum? Quibusdam perspiciatis harum possimus nihil animi porro fugit reprehenderit aliquam rem corporis tempora esse, ullam accusamus est praesentium? Rem reiciendis distinctio magni, quod deleniti impedit esse dolorem, sapiente iusto dicta numquam porro reprehenderit id consequuntur. Molestias vel voluptatibus exercitationem dicta animi debitis nostrum delectus aliquam neque! Optio, dolorum error esse rerum sunt ad? Sit quos cumque ad commodi consequuntur? Assumenda officiis, repellat, eaque deleniti minima consequuntur cumque facilis omnis inventore architecto, debitis deserunt a itaque. Eum eaque inventore distinctio aperiam possimus, adipisci incidunt itaque laboriosam in perspiciatis eius et eveniet iusto cupiditate voluptate iure laborum fuga quis beatae tempora! Rem, molestias adipisci? Corrupti laudantium excepturi corporis rem vel, amet, totam vero, aliquam omnis est quo ipsum temporibus accusantium. In, dolore autem! Eius magnam tempora in, dolorum reprehenderit ipsam optio, molestiae corrupti minus obcaecati quod mollitia pariatur doloremque vel dignissimos quo reiciendis! Corporis maxime voluptatum ipsam illum iure quibusdam saepe hic repellat modi. Laudantium distinctio exercitationem, nulla dolor eius deserunt. Odio veniam dolore repellat sequi perspiciatis aliquid doloremque cumque enim minus ut, doloribus iure illo dignissimos natus excepturi nisi recusandae repellendus qui non quos officia delectus possimus rerum quis. Atque aliquid consectetur ipsum ipsam adipisci saepe nesciunt repellendus ex delectus! Asperiores, consectetur cupiditate. Suscipit officiis fuga saepe. Eos ducimus aspernatur laudantium perspiciatis sed impedit, ratione adipisci nobis. Voluptas, quam eaque est expedita ea ut numquam, nesciunt optio repellat deserunt ipsum culpa a velit facilis maiores quisquam error? Sit eos eius libero rem atque quidem, pariatur sint non quo explicabo corrupti sed. Error amet, quis qui quas quaerat rerum odit dolorum ad commodi consequuntur, autem earum minus maiores animi eum ut esse quasi corporis perferendis voluptates perspiciatis fugiat illum molestias consequatur. Facere in aliquid quas esse, nam possimus sed dignissimos voluptate accusantium quis amet ducimus vel assumenda autem ipsam, unde voluptates cum, rerum iure? Veritatis nihil id molestiae voluptatibus tempore. Sit ex ullam id laborum minus quo necessitatibus. Aliquid doloribus ipsa non nisi sapiente nam quas error nobis. Ea a eaque quisquam, error facere numquam consequatur commodi impedit, porro quo velit dolorem tenetur nesciunt distinctio illum ex, perspiciatis magni. Quasi et, earum inventore, debitis, possimus ipsa aliquam accusantium laboriosam vitae doloribus animi quidem. Officia aliquid, ea quo labore fugit modi sunt autem, necessitatibus tempore voluptatum, voluptas hic vel deleniti explicabo optio facere impedit atque iure nam unde laborum ad quidem totam? Minima veritatis voluptatibus deleniti nam, laudantium reprehenderit dolorum, repudiandae corporis cupiditate, facere repellat doloribus dignissimos suscipit illo velit quos quo corrupti tenetur beatae quam similique? Nam ex tempora, inventore numquam pariatur eius libero iure, fuga quo et molestias! Vitae non in fugit cum incidunt corrupti velit officiis earum accusantium illo dolor repellendus asperiores quidem unde placeat cupiditate eum a culpa, nisi aspernatur ea? Atque vero totam consectetur quasi modi, fugit illo quae mollitia perspiciatis laudantium porro repellat excepturi a earum! Ullam tempora officiis similique quis id eius suscipit possimus! Labore laborum dicta possimus, corrupti amet quam cupiditate dolore quia aliquid pariatur atque, saepe accusantium laudantium, odio aut enim sed.
                </TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
              </div>
            </Tabs> */}
          </section>
          <div>
            <Split
              className='h-full flex-1 flex flex-col justify-between e-code-editor'
              gutterSize={8}
              direction='vertical'
              sizes={[70, 30]}
            >
              <section className='flex flex-col border bg-white !w-full'>
                <div className='h-10 border-b'>

                </div>
                <div className='h-0 flex-1 flex-grow overflow-auto !w-full'>
                  <MonacoEditor
                    // height={height}
                    language={"javascript"}
                    value={"const a = 1"}
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
              <section className={'flex flex-col bg-white border min-h-0'}>
                  {/* <div className='h-10 border-y'>

                  </div> */}
                  <div className='h-0 flex-auto overflow-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore ut officiis impedit neque, iusto modi aliquid, a magni labore expedita libero velit dicta pariatur aliquam sit, voluptate obcaecati. Recusandae nulla magnam quibusdam culpa, dignissimos nihil aperiam consequatur rerum nemo doloremque ex eius voluptas suscipit vitae labore dolorem voluptatibus odit omnis! Facilis quos fugit laborum omnis aperiam, pariatur perferendis, placeat eligendi odit ex assumenda quidem incidunt consequatur itaque at ipsum esse amet enim sequi? Aspernatur molestias provident, commodi, repudiandae eius corporis veniam ipsam omnis iure ab quisquam suscipit culpa necessitatibus laboriosam praesentium expedita est fugit cupiditate perferendis! Quidem autem aut, asperiores temporibus aliquam earum eaque totam, iste, odit labore qui reiciendis pariatur? Totam harum qui architecto neque animi, fugiat dicta! Magni voluptate consectetur officia harum asperiores ab autem iusto praesentium enim sapiente porro eligendi nam, illum blanditiis sit ipsum temporibus explicabo dolorum similique doloremque natus, perferendis id. Minima itaque enim non ab debitis vitae laudantium facere minus, eum, placeat provident nesciunt? A quis nisi fugit rerum suscipit, veritatis enim iusto perspiciatis possimus dolore! Dolorum delectus tenetur omnis quibusdam eos sint animi culpa alias necessitatibus at? Necessitatibus, eius atque! Eum tenetur dolore deleniti officia nostrum? Earum quas fugiat voluptatum ipsum veritatis quidem beatae nulla architecto ducimus repudiandae ipsam commodi facere culpa ad voluptate, natus nemo. Maiores eum error aperiam commodi mollitia fuga porro velit doloremque nam culpa qui reprehenderit ut repudiandae possimus molestiae distinctio consectetur, necessitatibus illo quas odio at! Sunt, maxime. Molestiae quam possimus iure ipsam accusamus facere delectus eveniet laboriosam, expedita amet quasi ratione incidunt fugiat labore recusandae earum impedit esse ea at, ex quidem non, corrupti consequatur! Natus optio nulla tenetur quisquam at est reprehenderit minima. Quos suscipit dolores ipsum tempore rem inventore ipsam vitae sit, molestiae totam libero modi quia aperiam quod nisi consectetur nam accusamus dolorum cupiditate maiores ducimus facere excepturi sapiente! Totam aut corrupti sequi facilis voluptate ducimus tempore perspiciatis, explicabo iusto consectetur quos alias exercitationem culpa assumenda deserunt error debitis sint praesentium! Nemo est tempore enim, odit suscipit ut aut atque itaque dolorem eius praesentium esse? Quasi ex optio sequi aspernatur. Pariatur aut doloribus ab animi dicta dignissimos harum odio autem illo velit iusto mollitia vero distinctio ipsa quia accusantium, voluptas vitae libero. Officia omnis dolorem aliquid itaque exercitationem tempore, veniam, pariatur numquam consequuntur nulla provident voluptates quaerat? Quo doloribus odio accusantium laborum vitae consequuntur numquam optio. Facilis, fugiat quidem ad saepe mollitia dolorum quos corrupti! Fugiat atque distinctio, quasi cupiditate laboriosam aliquam officiis tempora, corporis ex quisquam, quos itaque mollitia. Atque labore cumque, debitis quidem inventore, earum modi rem commodi, a ad aliquid eius tempora illum totam eaque quas ipsam voluptatibus omnis incidunt quo odit. Provident, inventore quis! Ipsum dignissimos tempora atque minima. Quae, eligendi. Necessitatibus debitis rem facilis reiciendis voluptates! Aperiam nulla reiciendis nesciunt eum modi eveniet delectus molestias vel voluptas aspernatur tempore, dolore illum sapiente asperiores inventore perferendis tempora. Officiis eum maiores facilis voluptate ipsa totam illo odio, alias deleniti id harum magni molestiae error itaque! Harum aperiam quam repellendus nihil officiis reprehenderit et architecto id tempore rem ipsam blanditiis sapiente, quidem eius unde quia vitae provident. Inventore officia autem facere vitae, rerum quam expedita similique a natus aliquid, assumenda at obcaecati, nobis nemo illo error harum consequuntur iste perferendis ea reprehenderit. Omnis illo velit numquam aspernatur, nam praesentium molestiae distinctio optio eius ducimus explicabo sunt ab impedit, quidem quisquam vero amet? Ipsa, ipsam exercitationem officia voluptates minus ratione placeat, commodi aliquid quis, voluptatem nulla illo provident quaerat molestias! Consectetur facere dolore explicabo voluptate possimus sed voluptatem, officiis fuga error, officia soluta deserunt voluptas, sit repellat optio labore adipisci ex facilis. Esse nesciunt quo id harum cumque explicabo, ducimus provident assumenda a et! Dolor, corporis temporibus exercitationem voluptatem deserunt aspernatur aliquam vel quisquam nesciunt sequi modi pariatur quas animi accusamus obcaecati dolores quis ut quae amet in? Inventore atque voluptas non eius labore esse illum nesciunt nisi sed fuga numquam repudiandae, fugit ullam impedit quos sunt rem quaerat nemo fugiat ea pariatur doloremque adipisci. Omnis doloribus nesciunt voluptates error culpa recusandae quas modi! Tempora id ea perferendis earum! Nostrum ea molestias, debitis at tempore dolore aspernatur perspiciatis magni asperiores dolores eos explicabo obcaecati doloremque ad? Hic veritatis voluptas deleniti voluptate vitae reprehenderit ducimus, at aperiam molestiae excepturi, quia reiciendis omnis temporibus itaque incidunt sunt ex enim dicta corrupti neque tempore nihil minus voluptatem unde. Voluptates mollitia, dolor nam tenetur libero eum quo repellat a natus incidunt quisquam, id dicta ab at veritatis ex nihil officia unde fugit quae laboriosam totam. Molestiae laboriosam quibusdam illo nemo, nostrum quaerat, itaque aliquam totam cupiditate iusto sit explicabo, corporis quos? Blanditiis, ea placeat officia nam totam voluptatem nemo unde autem maiores eligendi corrupti ducimus animi culpa a, quasi, fugit ab ipsa. Assumenda nihil commodi deleniti deserunt labore nemo nesciunt consequuntur, illo ipsum? Quidem nihil voluptas debitis doloribus adipisci accusamus quae optio beatae sequi veritatis unde quis velit, numquam delectus dicta sit alias autem saepe quo officiis, consectetur pariatur? Dicta saepe fugiat quis nostrum, accusantium aliquid ipsa tempora molestias reprehenderit culpa, molestiae, pariatur in quia quod nihil quos delectus velit. Illum quaerat veritatis quisquam, eaque quo animi dolor? Ullam distinctio ipsum modi omnis ad error harum minus ducimus soluta repellendus obcaecati fuga neque voluptatibus officiis consequatur eos accusantium repellat, libero dolor natus perspiciatis ex! Totam cum officia quia vero voluptates, odit doloremque quibusdam ratione, laudantium accusamus voluptate nesciunt libero perspiciatis rerum accusantium molestias laboriosam facere qui iste non quis! Voluptates tenetur laudantium, consectetur laborum non voluptas molestias atque consequuntur necessitatibus adipisci expedita officiis in sed maxime qui porro? Aperiam eaque voluptatum excepturi et pariatur ipsa a, aliquid asperiores voluptatibus deserunt nostrum officiis aliquam maiores dolor omnis magnam quas officia! Iusto suscipit saepe molestiae quae. Eaque fuga a nemo eveniet sequi molestiae itaque expedita tenetur deserunt vero nam incidunt quo accusantium temporibus ab natus perspiciatis blanditiis ut, et asperiores corrupti! Dolorem nihil odio placeat blanditiis fugiat, velit adipisci sed unde voluptates veritatis voluptatibus, maiores at enim eos provident porro cupiditate quasi hic modi accusantium numquam. Excepturi, dolore!
                  </div>
                <section>
                  <div className='h-10'>
                    <Button size={"sm"}>Konsol</Button>
                  </div>
                </section>
              </section>
            </Split>
          </div>
        </Split>
      </main>
    </div>
  )
}

export default page