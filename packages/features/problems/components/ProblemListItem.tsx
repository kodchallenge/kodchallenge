import { Avatar, AvatarFallback, Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, cn } from '@kod/ui'
import Link from 'next/link'
import { RouterOutputs } from '@kod/server/trpc'
import { CheckCircledIcon, PlayIcon, RulerSquareIcon } from '@kod/icons'
import { problemDifficulty } from '@kod/lib/common'

type Props = {
    problem: RouterOutputs["problem"]["getAll"][number]
}

const ProblemListItem = ({ problem }: Props) => {
    return (
        <Link className='no-underline hover:no-underline' href={`/problems/${problem.slug}`} key={problem.id}>
            <Card key={problem.title} className='bg-card z-10 cursor-pointer hover:shadow-xl hover:scale-102 ease-in-out duration-200'>
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
                                    className={cn('text-white', problemDifficulty[problem.difficulty]?.badgeColor)}
                                >
                                    {problemDifficulty[problem.difficulty].name}
                                </Badge>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className='opacity-70'>
                                {problem.subtitle}
                            </p>
                        </CardContent>
                    </div>
                    <div className='flex text-start'>
                        <Button
                            variant={'secondary'}
                            disabled={problem.is_deleted}
                            className='flex items-center gap-2 mr-12'
                        >
                            {problem.is_deleted
                            ? (
                                <>
                                    Çözüldü
                                    <CheckCircledIcon />
                                </>
                            ) : (
                                <>
                                    Çöz
                                    <PlayIcon />
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </Card>
        </Link>
    )
}

export default ProblemListItem