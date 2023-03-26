import KcLayout from '@/layouts/KcLayout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { GetServerSideProps } from 'next'
import { Problem } from '@/models'
import { ProblemService } from '@/services'

export type Props = {
    problems: Problem[]
}

const ProblemIndex = ({
    problems
}: Props) => {
    return (
        <KcLayout>
            <Head>
                <title>Tüm Programlama Soruları | KodChallenge</title>
                <meta name="description" content={`Kendinizi geliştirebileceğiniz farklı türden programlama sorularını burada bulabilirsiniz.`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='lg:w-8/9 md:w-11/12 m-auto'>
                <section className="py-20 tails-selected-element">
                    <div className="tails-hover-element">
                        <h1 className='font-bold tracking-tight my-6'>Tüm Problemler</h1>
                        <div className='lg:grid grid-cols-12 gap-4 lg:gap-10 space-y-6 md:space-y-0 pt-8 sm:pt-0'>
                            <div className="overflow-x-auto col-span-8 space-y-4">
                                <table className="table  table-zebra w-full">
                                    <thead>
                                        <tr>
                                            <th>Durum</th>
                                            <th>Başlık</th>
                                            <th>Başarı Oranı</th>
                                            <th>Skor</th>
                                            <th>Zorluk</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {problems.map((problem, i) => (
                                            <tr className='hover'>
                                                <td>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="mr-1 h-[18px] w-[18px] text-yellow dark:text-dark-yellow"><path fill-rule="evenodd" d="M8.972 3a1 1 0 01.964.649l4.978 13.274 1.632-5.221A1 1 0 0117.5 11H21a1 1 0 110 2h-2.765l-2.28 7.298a1 1 0 01-1.891.053L9.086 7.077l-1.632 5.221A1 1 0 016.5 13H3a1 1 0 110-2h2.765l2.28-7.298A1 1 0 018.973 3z" clip-rule="evenodd"></path></svg>
                                                </td>
                                                <td>
                                                    <Link href={`/problems/${problem.slug}`} className="">{i + 1}. {problem.title}</Link>
                                                </td>
                                                <td>%{85}</td>
                                                <td>{problem.score}</td>
                                                <td>{problem.difficulty}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='col-span-4'>
                                <div className='md:sticky md:top-3'>
                                    <div className="card w-full bg-base-100 shadow">
                                        <div className="card-body space-y-3 sm:space-y-0 p-2 sm:p-4 sm:flex">
                                            <h2 className="card-title text-center flex-initial w-full justify-center">KodChallenge Yıldızları 💫</h2>
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
                                                            <h4 className='font-bold'>RaSGooL</h4>
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
                    </div>
                </section>
            </div >
        </KcLayout >
    )
}

export const getServerSideProps: GetServerSideProps<{ problems: Problem[] }> = async (context) => {
    const res = await ProblemService.getList();
    return {
        props: {
            problems: res.data,
        },
    }
}
export default ProblemIndex