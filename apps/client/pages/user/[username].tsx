import KcLayout from "@/layouts/KcLayout"
import { User } from "@/models/user"
import { UserService } from "@/services"
import api from "@/services/api"
import clsx from "clsx"
import Head from "next/head"
import { useRouter } from "next/router"

type Props = {
    user: User
}

const UserProfile = ({
    user
}: Props) => {
    const router = useRouter()
    const { username } = router.query as { username: string }

    return user ? (
        <KcLayout>
            <Head>
                <title>{username} ({user.firstname} {user.lastname})</title>
            </Head>
            <div className="mx-auto my-12 grow p-4 md:mt-0 md:max-w-[888px] md:p-6 lg:max-w-screen-xl">
                <div className="flex flex-col gap-4 overflow-visible lg:flex-row lg:space-x-4">
                    <div className="">
                        <div className="card shadow-2xl rounded-lg min-w-[300px]  flex-col px-4 pt-[21px] lg:w-[300px]">
                            <div className="card-content">
                                <div className="my-3">
                                    <div className="grid grid-cols-3 my-3">
                                        <div className="col-span-1">
                                            <img src={user.avatar ?? "https://picsum.photos/id/237/200/300"} alt={user.username + " avatar image"} className="h-20 w-20 rounded-lg object-cover" />
                                        </div>
                                        <div className="col-span-2">
                                            <h4 className="font-bold text-lg">{user.firstname} {user.lastname}</h4>
                                            <p className="leading-3 text-gray-500 text-sm">@{user.username}</p>
                                        </div>
                                    </div>
                                    <div className="my-3 text-gray-500 text-sm">
                                        <p>Hi, I'm FullStack Developer. I am interesting with React, React Native, Node.js, C#.</p>
                                    </div>
                                    <button className="btn btn-primary btn-sm  w-full">Profili Düzenle</button>
                                </div>
                                <UserProfileLinkItem icon={"fa-location-dot"} label="Ankara" />
                                <a href="https://www.kodchallenge.com" target={"_blank"}>
                                    <UserProfileLinkItem icon={"fa-link"} label="https://www.kodchallenge.com" />
                                </a>
                                <a href="https://www.kodchallenge.com" target={"_blank"}>
                                    <UserProfileLinkItem icon={"fa-brands fa-github"} label="yasintorun" />
                                </a>
                                <a href="https://www.kodchallenge.com" target={"_blank"}>
                                    <UserProfileLinkItem icon={"fa-brands fa-linkedin"} label="yasintorun" />
                                </a>
                                <a href="https://www.kodchallenge.com" target={"_blank"}>
                                    <UserProfileLinkItem icon={"fa-brands fa-twitter"} label="yasintorunx" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[calc(100%_-_316px)]">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur ab temporibus reiciendis? Aliquid quis ratione eum earum quod in ducimus ab quae repudiandae, odio, pariatur tenetur nobis. Quisquam, ex natus laborum incidunt ab ut molestiae aperiam accusantium alias excepturi corporis velit totam quaerat sed vero deleniti amet esse enim sint nesciunt consequuntur ipsam assumenda expedita! Soluta, distinctio magni vitae laborum maiores fugiat mollitia vel fugit voluptatem, a nihil perspiciatis aliquam aut culpa suscipit voluptates recusandae quaerat quae explicabo beatae voluptate ipsam assumenda facere dolor. Suscipit vitae facere perspiciatis esse, magni dicta, assumenda, nihil voluptatem soluta numquam at maiores! Facere aperiam repellat voluptas in sunt ipsa beatae optio neque debitis dolorum, quae ratione fuga quasi nemo animi fugiat hic pariatur magnam, perspiciatis nihil reprehenderit! Voluptatibus ea quo aperiam! Eum, reiciendis laboriosam aperiam corporis voluptas saepe ea quos dolor animi incidunt error, harum et sequi adipisci culpa tempora consequuntur sapiente. Et corporis sapiente ab, similique mollitia deserunt cum vitae expedita odio laboriosam repudiandae aliquid dicta. Ad nostrum voluptates non numquam voluptatum eos aliquid accusamus reprehenderit veniam. Sequi ipsum facilis inventore sed quam earum illum harum quas, quis voluptatibus voluptatem voluptate reiciendis ducimus nam, temporibus est laborum. Totam tempora aut exercitationem expedita aliquid commodi ea iure quae omnis sequi illo dolorem ullam doloribus facilis consequuntur deserunt, in qui saepe doloremque quos. Culpa atque facere enim eum esse illo cumque nemo, soluta deserunt odit quasi, dolorum consequatur maiores debitis consequuntur, similique minima! Ab, aliquid corporis quos veritatis recusandae, veniam eius praesentium, beatae culpa iure tempore dignissimos libero eligendi accusamus voluptatum quod a quo! Vel ut distinctio provident nisi repellendus quod natus, minus animi dolores voluptatibus ducimus vero esse, ipsa molestias atque, similique pariatur aut veniam et dolor expedita quisquam quis id. Aspernatur, doloribus quibusdam amet laudantium mollitia quod expedita provident, error ea rerum dolor earum aut accusantium ex obcaecati in voluptatem optio asperiores sequi est quam nostrum numquam. Maxime quos sed fugit enim sapiente ab incidunt nulla, totam itaque labore a earum mollitia rerum consectetur ad facere ut vel deleniti qui eos magni! Dolorem quod dicta fugit numquam enim perferendis velit quae, impedit necessitatibus at accusamus saepe quisquam possimus veritatis nesciunt minus praesentium commodi fuga aspernatur eaque voluptatibus sunt voluptas. Aperiam sapiente maxime, voluptatem nam et, laborum consequatur cumque magni sit deserunt explicabo quo, expedita soluta amet in! Laborum quod repellat sunt accusantium iusto dignissimos dolores, velit officia quisquam dolorum error vitae omnis! Voluptatum quaerat hic autem aspernatur excepturi? Accusantium obcaecati corrupti, iure saepe distinctio maiores aliquid nam quasi atque vitae pariatur eveniet fuga mollitia id minima ipsa aliquam excepturi, quos asperiores porro illum veniam iste unde. Quas ut dolor voluptatem deserunt molestiae fugit non, aliquam, excepturi officia itaque voluptatum, sint facere? Incidunt sapiente accusantium neque eos consectetur eaque, blanditiis esse amet assumenda temporibus veritatis labore asperiores itaque debitis sequi corrupti. Cum aliquam corporis nemo modi dolorem, minus officia. Odit hic magnam aliquam! Excepturi voluptates quia dignissimos? Maxime, facere eius? Vel dolor dolores magnam necessitatibus? Officiis excepturi nam neque ut pariatur atque accusantium debitis illo officia unde nemo dolorem porro tempora perferendis inventore, cumque iste autem nesciunt consequuntur! Tenetur corporis vero sapiente iure, modi nobis recusandae cumque ratione, amet ipsam earum harum asperiores delectus quidem. Quia libero, repellat tempora totam impedit nobis et odio quam excepturi similique temporibus autem porro. Nulla assumenda doloribus ducimus fugiat? Aperiam recusandae modi est, molestiae veniam fugiat reiciendis sapiente rem alias, quos laboriosam, aut quibusdam optio deleniti debitis vitae. Dolores odit ab in atque, laborum molestias corporis consequatur amet sed cum tempora ut voluptatem reprehenderit aspernatur id illum magni molestiae repudiandae temporibus optio sequi? Nemo est ratione tempore dicta earum quaerat optio perspiciatis doloremque fugiat temporibus fuga ipsam eos ad enim ex praesentium dolore error suscipit quo nesciunt qui sint, quisquam aperiam. Dicta vero assumenda at exercitationem earum nesciunt saepe asperiores hic rerum libero tempora quasi facilis error, natus incidunt magni eos voluptatibus laborum, dolore ab sapiente expedita aspernatur placeat. Aspernatur recusandae magni debitis sunt, reiciendis optio voluptate quod mollitia error maxime ab perspiciatis dolor pariatur molestiae eaque tempora voluptas, magnam officiis in ea quam dolorum architecto suscipit. Qui neque molestiae ea. Ducimus, error perferendis deserunt expedita, tempora, quidem veritatis libero nisi iure dignissimos nostrum officia sequi soluta? Illo, qui voluptatum laudantium harum odio provident nobis aspernatur minima earum, iusto eaque quas sed minus ullam voluptates tempora porro. Illo quidem velit omnis aut dicta quasi nemo eius fugit debitis odit, sunt eos voluptatem nisi sed reprehenderit deleniti fugiat dolore consequatur. Ullam quaerat, quis consectetur magnam est dolorum nobis nemo unde repellat, natus distinctio nostrum ipsam. Aperiam, sapiente. Dolore veniam harum earum soluta pariatur maiores, sunt, ab velit animi placeat, consequatur sint enim porro laboriosam? Non iste placeat nostrum hic odit omnis tempora eligendi atque debitis. Earum, voluptas unde molestiae aliquid facilis mollitia ad vero inventore. Consequuntur est totam inventore? Aliquid qui fuga neque voluptatem fugiat inventore vel deserunt nobis nam, assumenda officia ducimus, placeat provident. Aperiam nulla esse et minima labore tempore exercitationem, temporibus tenetur, vel in, asperiores pariatur. Vero maiores obcaecati alias ipsa cupiditate. Nihil dolorum, saepe odio consectetur tempora iure aliquid corporis nisi, laboriosam minus dolore. Placeat accusantium qui cupiditate vero voluptates quod laudantium sint, amet temporibus enim dolor expedita necessitatibus, vitae numquam est. Earum nisi ullam eaque minus ipsa beatae officia soluta. Esse placeat porro libero fuga dolor accusamus, sit nobis inventore iure nemo quod in quasi laudantium! Delectus voluptates quas provident quia tenetur maiores nemo libero cupiditate quam? Sequi quo ratione quod ad minus ipsam, unde dolor ducimus enim tenetur deserunt sapiente itaque suscipit nemo at veniam, aperiam libero non est repellat assumenda recusandae omnis repellendus. Nesciunt quis illo numquam ducimus, at ipsa placeat. Voluptatem quia iure autem ab sunt ut quisquam perspiciatis rerum hic, eaque obcaecati porro sapiente, accusamus numquam optio, dolorum veritatis mollitia molestias fugit voluptatum nostrum? Expedita vero a quia cupiditate magnam temporibus repudiandae esse doloribus officiis itaque, dolores atque facilis necessitatibus impedit. Debitis, nisi. Deserunt omnis, cum quidem dolorem odit modi itaque impedit ipsum? Commodi laboriosam sint nihil quas reprehenderit.</p>
                    </div>
                </div>
            </div>
        </KcLayout>
    ) : (
        <p>not found</p>
    )
}

const UserProfileLinkItem = ({ icon, label }) => {
    return (
        <div className="flex items-start text-gray-600 my-3 space-x-[10px]">
            <span><i className={clsx("fa-regular min-w-[20px]", icon)}></i></span>
            <span className="overflow-hidden"><p className="truncate">{label}</p></span>
        </div>
    )
}


export async function getServerSideProps(context) {
    const { username } = context.query
    const { data: user } = await UserService.getByUsername(username)

    return {
        props: {
            user
        }
    }
}

export default UserProfile