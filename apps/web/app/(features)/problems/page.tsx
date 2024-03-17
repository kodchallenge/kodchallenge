import { KodMainLayout } from '@/components/layouts'
import ProblemListView from '@kod/features/problems/views/ProblemListView'
import { GitHubLogoIcon } from '@kod/icons'
import { KodServerTrpc } from '@kod/server/next'
import Link from 'next/link'
import ProblemListItem from './_components/problem-list-item'

const ProblemsPage = async () => {
    const problems = await KodServerTrpc.problem.getAll()
    return (
        <KodMainLayout>
            <main className='mt-32'>
                <div className='container'>
                    <div className=''>
                        <h1 className='text-4xl font-bold text-center'>Problemler</h1>
                        <p className='text-foreground/75 text-center'>
                            KodChallenge'da yer alan problemleri çözerek kendini geliştirebilirsin.
                        </p>
                        <div className='my-12'>
                            <div className='grid grid-cols-4 grid-flow-row gap-4 w-full'>
                                <div className='col-span-3 grid grid-cols-1 gap-4'>
                                    {problems?.map((problem) => (
                                        <ProblemListItem problem={problem} />
                                    ))}
                                </div>
                                <div className='col-span-1'>
                                    <h1 className='font-bold text-3xl text-center mb-10'>
                                        <span className='text-primary'>Kod</span>Challenge
                                    </h1>
                                    <div className='text-foreground/75 text-center'>
                                        Sende bir soru eklemek ister misin? <br />
                                        <Link
                                            href={"https://github.com/kodchallenge/problems/issues"}
                                            className='hover:underline text-blue-400 hover:text-blue-500 flex items-center gap-2 justify-center'
                                            target='_blank'
                                        >
                                            O halde tıkla ve ekleyelim
                                            <GitHubLogoIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </KodMainLayout>
    )
}

export default ProblemsPage