import React from 'react'
import { ContestLandingPage } from '@kod/features/contests/views'
import { KodMainLayout } from '@/components/layouts'

const page = () => {
    const infos = [
        { title: "Topluluk", description: "Etkinlikler, kullanıcılar arasında etkileşimi teşvik etmek için mükemmel bir araçtır. İlgilendiğiniz bir konu hakkında bir etkinlik oluşturabilir ve diğer kullanıcıları davet edebilirsiniz.", icon: "👥" },
        { title: "Platform Tanıtımı", description: "Unutmayın ki Etkinlikler, yalnızca tanıtım amacıyla kullanılır. Etkinliğin nasıl yapıldığı veya yürütüldüğüyle ilgilenmeyiz. Bu, sadece topluluğunuzun dikkatini çekmek ve ilgi çekici içerikler oluşturmak için bir fırsattır.", icon: "📢" },
    ]
    return (
        <KodMainLayout>
            <main className='md:my-48'>
                <div className="container relative md:mt-24 mt-16 my-32">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="md:text-4xl text-2xl md:leading-normal leading-normal font-semibold">Etkinlikler 🎉</h3>
                        <h6 className='font-extrabold text-xs text-primary'>YAKINDA</h6>
                        <p className="mt-6 text-slate-400 max-w-xl mx-auto">
                            Ücretsiz etkinlikler oluşturun ve platformumuzun ömür boyu kaynaklarından yararlanın.
                        </p>
                    </div>
                    {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {infos.map((info, index) => (
                            <div key={index} className="group relative lg:px-6 transition-all duration-500 ease-in-out rounded-xl overflow-hidden text-center">
                                <div className="relative text-4xl">
                                    {info.icon}
                                </div>

                                <div className="mt-6">
                                    <a href="" className="text-xl font-medium transition-all duration-500 ease-in-out hover:text-indigo-600">
                                        {info.title}
                                    </a>
                                    <p className="text-slate-400 transition-all duration-500 ease-in-out mt-3">
                                        {info.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div> */}
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