import KcLayout from "@/layouts/KcLayout"
import { User } from "@/models/user"
import { UserService } from "@/services"
import { progressColors } from "@/utils/colors"
import clsx from "clsx"
import Head from "next/head"
import Link from "next/link"
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
                        <div className="card shadow-xl rounded-lg min-w-[300px]  flex-col px-4 pt-[21px] lg:w-[300px]">
                            <div className="card-content">
                                <div className="my-3">
                                    <div className="flex flex-start gap-4 my-3">
                                        <div className="col-span-1">
                                            <img src={user.avatar} alt={user.username + " avatar image"} className="h-20 w-20 rounded-lg object-cover" />
                                        </div>
                                        <div className="col-span-2">
                                            <h4 className="font-bold text-lg">{user.firstname} {user.lastname}</h4>
                                            <p className="leading-3 text-sm">@{user.username}</p>
                                        </div>
                                    </div>
                                    <div className="my-3 text-sm">
                                        <p>{user.biography}</p>
                                    </div>
                                    <button className="btn btn-primary btn-sm  w-full">Profili Düzenle</button>
                                </div>
                                {user.location &&
                                    <UserProfileLinkItem icon={"fa-location-dot"} label={user.location} />
                                }
                                {user.website &&
                                    <a href={user.website} target={"_blank"}>
                                        <UserProfileLinkItem icon={"fa-link"} label={user.website} />
                                    </a>
                                }
                                {user.github &&
                                    <a href={`https://github.com/${user.github}`} target={"_blank"}>
                                        <UserProfileLinkItem icon={"fa-brands fa-github"} label={user.github} />
                                    </a>
                                }
                                {user.linkedin &&
                                    <a href={`https://www.linkedin.com/in/${user.linkedin}`} target={"_blank"}>
                                        <UserProfileLinkItem icon={"fa-brands fa-linkedin"} label={user.linkedin} />
                                    </a>
                                }
                                {user.twitter &&
                                    <a href={`https://twitter.com/${user.twitter}`} target={"_blank"}>
                                        <UserProfileLinkItem icon={"fa-brands fa-twitter"} label={user.twitter} />
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[calc(100%_-_316px)] sm-mt-5">
                        <div className="xl:grid xl:grid-cols-2 gap-4">
                            <div className="card shadow-xl rounded-lg flex-col px-4 pt-[21px]">
                                <div className="card-content my-3">
                                    <h3 className="font-bold">En Çok Kullandığın Diller </h3>
                                    <div className="mt-5">
                                        <ul>
                                            {[
                                                { name: "JavaScript", value: 35 },
                                                { name: "TypeScript", value: 30 },
                                                { name: "Python", value: 20 },
                                                { name: "C#", value: 10 },
                                                { name: "C++", value: 5 },
                                            ].map((item, index) => (
                                                <li className="my-2">
                                                    <h4 className="leading-3">{item.name}</h4>
                                                    <div className="flex items-center gap-4">
                                                        <progress className={`progress progress-${progressColors[index]}`} value={item.value} max="100"></progress>
                                                        <span className="min-w-[40px]">{item.value}%</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-xl rounded-lg flex-col px-4 pt-[21px]">
                                <div className="card-content my-3">
                                    <h3 className="font-bold">Problem Zorluk İstatistikleri</h3>
                                    <div className="md:grid md:grid-cols-3 mt-5">
                                        <div className="md:col-span-1 lg:col-span-3 flex items-center justify-center">
                                            {/* @ts-ignore */}
                                            <div className="radial-progress before:bg-base-300 align-center text-center" style={{ "--value": "40", "--size": "8rem", "--thickness": "5px" }}>
                                                <h2 className="font-bold text-xl">100</h2>
                                                <p className="text-xs mt-2">Problem Çözüldü</p>
                                            </div>
                                        </div>
                                        <div className="md:col-span-2 lg:col-span-3">
                                            <ul>
                                                {[
                                                    { label: "Kolay", value: 67, total: 153, color: "success" },
                                                    { label: "Orta", value: 45, total: 125, color: "primary" },
                                                    { label: "Zor", value: 13, total: 89, color: "error" },
                                                ].map((item, index) => (
                                                    <li className="my-2">
                                                        <h4 className="leading-3">{item.label}</h4>
                                                        <div className="flex items-center gap-4">
                                                            <progress className={`progress progress-${item.color}`} value={item.value * 100 / item.total} max="100"></progress>
                                                            <span className="min-w-[60px]">{item.value} / {item.total}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-20 carsd sshadow rounded-lg">
                    <div className="carsd-content py-5">
                        <table className="table  table-zebra w-full table-hover rounded-none">
                            <thead>
                                <tr>
                                    <th>Başlık</th>
                                    <th>Başarı Oranı</th>
                                    <th>Skor</th>
                                    <th>Zorluk</th>
                                    <th>Tarih</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { slug: "hello-kodchallenge", title: "Merhaba KodChallenge", correctCase: 1, totalCase: 1, score: 20, difficulty: "Kolay", date: "2023-03-01" },
                                    { slug: "hello-kodchallenge", title: "İki sayının Toplamı", correctCase: 2, totalCase: 3, score: 10, difficulty: "Kolay", date: "2023-02-28" },
                                    { slug: "hello-kodchallenge", title: "Koordinatları grupla", correctCase: 2, totalCase: 5, score: 25, difficulty: "Orta", date: "2023-03-10" },
                                    { slug: "hello-kodchallenge", title: "Binary Tree (İkili Arama)", correctCase: 1, totalCase: 6, score: 50, difficulty: "Zor", date: "2023-03-21" },
                                ].map((problem, i) => (
                                    <tr className="hover">
                                        <td>
                                            <Link href={`/problems/${problem.slug}`} className="">{i + 1}. {problem.title}</Link>
                                        </td>
                                        <td>{problem.correctCase} / {problem.totalCase}</td>
                                        <td>{problem.score}</td>
                                        <td>{problem.difficulty}</td>
                                        <td>{new Date(problem.date).toLocaleDateString("tr")}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
        <div className="flex items-start my-3 space-x-[10px]">
            <span><i className={clsx("fa-regular min-w-[20px]", icon)}></i></span>
            <span className="overflow-hidden"><p className="truncate">{label}</p></span>
        </div>
    )
}


export async function getServerSideProps(context) {
    const { username } = context.query
    const { data: user } = await UserService.getByUsername(username)
    user.email = ""
    user.id = 0
    return {
        props: {
            user
        }
    }
}

export default UserProfile