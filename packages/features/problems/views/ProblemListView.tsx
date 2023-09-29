import React from 'react'
import ProblemListItem from '../components/ProblemListItem'
import { KodServerTrpc, KodTrpc } from '@kod/server/next'
import { Avatar, AvatarImage, Button, Card, CardContent, CardHeader, UserAvatar } from '@kod/ui'
import Link from 'next/link'
import { ArrowTopRightIcon, GitHubLogoIcon } from '@kod/icons'
// const problems = [
//     { id: 1, title: 'Problem 1', slug: 'problem-1', difficulty: 'easy', introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nisl nisl ultricies nisl, nec ultricies nisl nisl eget nisl.' },
//     { id: 2, title: 'Problem 2', slug: 'problem-2', difficulty: 'medium', introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nisl nisl ultricies nisl, nec ultricies nisl nisl eget nisl.' },
//     { id: 3, title: 'Problem 3', slug: 'problem-3', difficulty: 'hard', introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nisl nisl ultricies nisl, nec ultricies nisl nisl eget nisl.' },
// ]

const SkeletonProblemList = () => {
    return (
        <p>Loading..</p>
    )
}

const ProblemListView = async () => {
    const problems = await KodServerTrpc.problem.getAll()
    // const { data: problems, isFetching, isLoading } = KodTrpc.problem.getAll.useQuery(undefined)

    return (
        <main className='mt-32'>
            <div className='container'>
                <div className=''>
                    <h1 className='text-4xl font-bold text-center'>Problemler</h1>
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
    )
}

export default ProblemListView