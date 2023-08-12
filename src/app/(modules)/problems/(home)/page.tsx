import React, { useEffect } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import problemService from '@/services/problemService'

const badgeColors = {
    easy: "bg-teal-500 hover:bg-teal-600",
    normal: "bg-indigo-500 hover:bg-indigo-600",
    hard: "bg-rose-500 hover:bg-rose-600",
}

const ProblemsPage = async () => {
    const problems = await problemService.getProblems()
    console.log(problems)
    return (
        <main className='mt-32'>
            <div className='container'>
                <div className=''>
                    <h1 className='text-4xl font-bold text-center'>Problemler</h1>
                    <div className='my-12 grid grid-cols-2 grid-flow-row gap-4 w-full'>
                        {problems.map((problem) => (
                            <Link className='no-underline hover:no-underline' href={`/problems/${problem.title.trim()}`} key={problem.title}>
                                <Card key={problem.title} className='bg-background z-10 cursor-pointer hover:shadow-lg'>
                                    <div className="flex justify-between items-center px-2 space-x-4">
                                        <Avatar className='w-16 h-16'>
                                            {/* <AvatarImage src={problem.image} /> */}
                                            <AvatarFallback>{problem.title.split(" ").map(x => x.charAt(0)).join("")}</AvatarFallback>
                                        </Avatar>
                                        <div className='flex flex-1 flex-col space-y-1'>
                                            <CardHeader className='pb-1'>
                                                <CardTitle className='text-xl'>{problem.title}</CardTitle>
                                                <CardDescription>
                                                    <Badge
                                                        variant={"secondary"}
                                                        // @ts-ignore
                                                        className={cn('text-white', badgeColors[problem.difficulty])}
                                                    >
                                                        {problem.difficulty}
                                                    </Badge>
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className='opacity-70'>
                                                    {problem.introduction}
                                                </p>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProblemsPage