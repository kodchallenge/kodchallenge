import { Avatar, AvatarFallback, Badge, Card, CardContent, CardDescription, CardHeader, CardTitle, cn } from '@kod/ui'
import Link from 'next/link'
import { problemDifficulty } from '../lib/problemDifficulty'

type Props = {
    problem: any
}

const ProblemListItem = ({ problem }: Props) => {
    return (
        <Link className='no-underline hover:no-underline' href={`/problems/${problem.slug}`} key={problem.id}>
            <Card key={problem.title} className='bg-background z-10 cursor-pointer hover:shadow-lg'>
                <div className="flex justify-between items-center px-2 space-x-4">
                    <Avatar className='w-16 h-16'>
                        {/* <AvatarImage src={problem.image} /> */}
                        <AvatarFallback>{problem.title.split(" ").map((x: any) => x.charAt(0)).join("")}</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-1 flex-col space-y-1'>
                        <CardHeader className='pb-1'>
                            <CardTitle className='text-xl'>{problem.title}</CardTitle>
                            <CardDescription>
                                <Badge
                                    variant={"secondary"}
                                    className={cn('text-white', problemDifficulty[problem.difficulty].badgeColor)}
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
    )
}

export default ProblemListItem