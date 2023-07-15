import { Logo } from '@/components/logo'
import { Markdown } from '@/components/markdown'
import { Button } from '@/components/ui/button'
import { HamburgerMenuIcon, MoonIcon } from '@radix-ui/react-icons'
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

const page = () => {
  return (
    <div className='h-full flex flex-col max-h-screen overflow-hidden'>
      <header className='flex shadow items-center justify-between px-4 py-2'>
        <div className='flex items-center space-x-3 e-header-start'>
          <Logo />
          <Button variant={"ghost"}>
            <HamburgerMenuIcon className='mr-2' />
            Problem Listesi
          </Button>
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
        <div className='px-4 h-full py-2 flex gap-2'>
          <section className='h-full flex-col flex flex-1 shadow e-side-info border bg-white'>
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
          <section className='h-full flex-1 shadow border bg-white e-code-editor'>
            <div className='h-10 border-b'>

            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default page