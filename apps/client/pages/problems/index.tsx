import KcLayout from '@/layouts/KcLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const TrackSlug = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <KcLayout>
            <Head>
                <title>{slug} diline ait problemler - KodChallenge</title>
                <meta name="description" content={`${slug} dilinde kendinizi geliştirebileceğiniz farklı türden problemleri burada bulabilirsiniz.`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <section className="py-20 tails-selected-element">
                    <div className="px-4 max-w-7xl sm:px-6 lg:px-8">
                        <div className='flex items-center space-x-6'>
                            <div className="avatar">
                                <div className="w-20 rounded-full">
                                    <img src="https://res.cloudinary.com/kodchallenge/image/upload/v1652446325/logos/cpp.png" />
                                </div>
                            </div>
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl md:text-5xl xl:text-6xl">
                                C++
                            </h2>
                        </div>
                        <p className="mt-3 text-base text-gray-500 md:mt-5">
                            C++ (Türkçe telaffuz: si plas plas), 1979'da Bell Laboratuarlarında başlayarak Bjarne Stroustrup tarafından geliştirilen genel amaçlı bir programlama dilidir. Özellikle hız veya bazı düşük seviye özelliklere erişim gerektiren uygulamalar için son derece popülerdir. Hem yüksek hem de düşük seviyeli dil özelliklerini kapsadığı için orta seviye bir dil olarak kabul edilir.
                            C++ prosedürel, nesne yönelimli(Object Oriented), işlevsel(Functional) ve genel programlamayı destekler. C++ için derleyiciler, Windows, Mac OS ve Linux dahil olmak üzere esasen her platform için mevcuttur.
                            <a href='https://tr.wikipedia.org/wiki/C%2B%2B' className='link px-3'>Wikipedia</a>
                        </p>
                    </div>
                    <div className="tails-hover-element pt-12">
                        <h3 className='font-bold tracking-tight py-6'>Tüm Problemler</h3>
                        <div className='lg:grid grid-cols-12 gap-4 space-y-6 md:space-y-0 pt-8 sm:pt-0'>
                            <div className='col-span-8 space-y-4'>
                                {Array.from({ length: 3 }).map(problem => (
                                    <div className="card w-full bg-base-100 shadow-xl hover:-translate-y-2 ease duration-100">
                                        <div className="card-body space-y-3 sm:space-y-0 p-2 sm:p-8 sm:flex sm:items-center sm:flex-row justify-between">
                                            <div>
                                                <h2 className="card-title">Ardışık Sayıların Toplamı</h2>
                                                <div className='space-x-2'>
                                                    <div className="badge badge-success">Kolay</div>
                                                    <div className="badge badge-primary">Skor: <strong>10</strong></div>
                                                </div>
                                            </div>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Problemi Çöz</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='col-span-4'>
                                <div className="card card-bordered w-full bg-transparent shadow-xl">
                                    <div className="card-body space-y-3 sm:space-y-0 p-2 sm:p-4 sm:flex">
                                        <h2 className="card-title text-center flex-initial w-full justify-center">Bu Bölümün Yıldızları 💫</h2>
                                        {Array.from({ length: 3 }).map((x, index) => (
                                            <div className='flex flex-row items-center gap-4 justify-start'>
                                                <h3 className='font-bold'>
                                                    {index + 1}.
                                                </h3>
                                                <div className='flex items-center gap-4'>
                                                    <div className="avatar">
                                                        <div className="w-20 rounded-full">
                                                            <img src="https://placeimg.com/192/192/people" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4>RaSGooL</h4>
                                                        <p className='badge badge-accent'>Skor: <strong>1075</strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </KcLayout >
    )
}

export default TrackSlug