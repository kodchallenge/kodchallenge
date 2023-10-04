import React from 'react'
import { ContestLandingPage } from '@kod/features/contests/views'
import { KodMainLayout } from '@/components/layouts'
import { GitHubLogoIcon } from '@kod/icons'

const page = () => {
    const infos = [
        { title: "Projeler Nedir?", description: "KodChallenge, açık kaynak projelerinizi tanıtmanız ve topluluğumuzla paylaşmanız için mükemmel bir alan sunar.", icon: "🌐" },
        { title: "Github", description: "KodChallenge, Github ile çalışır. Github üzerinden açık kaynak projenizi platformumuza ekleyin.", icon: <GitHubLogoIcon className='w-8 h-8' /> },
        {title: "Topluluk", description: "Projelerinizi daha fazla insana ulaştırabilir ve topluluğumuzun gücünden yararlanabilirsiniz.", icon: "👥"}
    ]
    return (
        <KodMainLayout>
            <main className='md:my-48'>
                <div className="container relative md:mt-24 mt-16 my-32">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="md:text-4xl text-2xl md:leading-normal leading-normal font-semibold">Projeler ✨</h3>
                        <h6 className='font-extrabold text-xs text-primary'>YAKINDA</h6>
                        <p className="mt-6 text-slate-400 max-w-xl mx-auto">
                            Açık kaynak projelerinizi tanıtmak için platformumuzun gücünü kullanın.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[100px]">
                        {infos.map((info, index) => (
                            <div key={index} className="flex gap-8">
                                <div className="w-20 h-20 bg-primary/5 text-primary  rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                    {info.icon}
                                    {/* <i className="uil uil-question-circle"></i> */}
                                </div>
                                <div className="flex-1">
                                    <h5 className="mb-2 text-xl font-semibold">{info.title}</h5>
                                    <p className="text-slate-400">
                                        {info.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </KodMainLayout>
    )
}

export default page