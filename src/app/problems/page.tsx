"use client"
import React from 'react'
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

const badgeColors = {
    easy: "bg-teal-500 hover:bg-teal-600",
    medium: "bg-indigo-500 hover:bg-indigo-600",
    hard: "bg-rose-500 hover:bg-rose-600",
}

const ProblemsPage = () => {
    const [problems, setProblems] = React.useState([
        { title: 'Merhaba KodChallenge', difficulty: "easy", image: "https://dg8krxphbh767.cloudfront.net/exercises/hello-world.svg", description: 'Klasik programlama başlangıç sorusudur.' },
        { title: 'Problem 2', difficulty: "medium", image: "https://dg8krxphbh767.cloudfront.net/exercises/armstrong-numbers.svg", description: 'Problem 2 açıklaması' },
        { title: 'Problem 3', difficulty: "easy", image: "https://dg8krxphbh767.cloudfront.net/exercises/hamming.svg", description: 'Problem 3 açıklaması' },
        { title: 'Problem 4', difficulty: "hard", image: "https://dg8krxphbh767.cloudfront.net/exercises/isogram.svg", description: 'Problem 4 açıklaması' },
        { title: 'Problem 5', difficulty: "medium", image: "https://dg8krxphbh767.cloudfront.net/exercises/circular-buffer.svg", description: 'Problem 5 açıklaması' },
    ])

    return (
        <main className='mt-32'>
            <div className='container'>
                <div className=''>
                    <h1 className='text-4xl font-bold text-center'>Problemler</h1>
                    <div className='my-12 grid grid-cols-2 grid-flow-row gap-4 w-full'>
                        {problems.map((problem) => (
                            <Card key={problem.title} className='bg-background z-10 cursor-pointer hover:shadow-lg'>
                                <div className="flex justify-between items-center px-2 space-x-4">
                                    <Avatar className='w-16 h-16'>
                                        <AvatarImage src={problem.image} />
                                        <AvatarFallback>VC</AvatarFallback>
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
                                                {problem.description}
                                            </p>
                                        </CardContent>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProblemsPage