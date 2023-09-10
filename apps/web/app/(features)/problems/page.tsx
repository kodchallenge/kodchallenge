import { KodMainLayout } from '@/components/layouts'
import { cn } from '@kod/ui'
import {
    Avatar, AvatarFallback,
    Badge,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@kod/ui"
import Link from 'next/link'

const getProblems = async () => {
    return [
        { id: 1, title: 'Problem 1', slug: 'problem-1', difficulty: 'easy', introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nisl nisl ultricies nisl, nec ultricies nisl nisl eget nisl.' },
        { id: 2, title: 'Problem 2', slug: 'problem-2', difficulty: 'medium', introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nisl nisl ultricies nisl, nec ultricies nisl nisl eget nisl.' },
        { id: 3, title: 'Problem 3', slug: 'problem-3', difficulty: 'hard', introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nisl nisl ultricies nisl, nec ultricies nisl nisl eget nisl.' },
    ]
}

const problemDifficultyColors = {
    easy: 'bg-green-500',
    medium: 'bg-yellow-500',
    hard: 'bg-red-500',
}

const ProblemsPage = async () => {
    const problems = await getProblems()

    return (
        <KodMainLayout>
            <main className='mt-32'>
                <div className='container'>
                    <div className=''>
                        <h1 className='text-4xl font-bold text-center'>Problemler</h1>
                        <div className='my-12 grid grid-cols-2 grid-flow-row gap-4 w-full'>
                            {problems.map((problem) => (
                                <Link className='no-underline hover:no-underline' href={`/problems/${problem.slug}`} key={problem.id}>
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
                                                            className={cn('text-white', problemDifficultyColors[problem.difficulty])}
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
        </KodMainLayout>
    )
}

export default ProblemsPage