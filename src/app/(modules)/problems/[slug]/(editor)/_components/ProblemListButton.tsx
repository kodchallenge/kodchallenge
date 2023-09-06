import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn, problemDifficultyColors, problemDifficultyLabels } from '@/lib/utils'
import problemService from '@/services/problemService'
import { Problem } from '@/types/problem'
import { CaretSortIcon, CheckIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React, { useEffect } from 'react'

const ProblemListContent = () => {
    const [open, setOpen] = React.useState(false)
    const [selectedDifficulty, setSelectedDifficulty] = React.useState<keyof typeof problemDifficultyLabels | null>(null)

    useEffect(() => {
        problemService.getProblems().then(problems => {
            setProblems(problems)
        })
    }, [])
    const [problems, setProblems] = React.useState<Problem[]>([])

    return (
        <>
            <SheetHeader>
                <SheetTitle>
                    <Link href={"/problems"}>
                        Problem Listesi
                    </Link>
                </SheetTitle>
                <SheetDescription>
                    <div className='flex items-center justify-between'>
                        <div>

                        </div>
                        <div>
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        size={"sm"}
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        className="w-[150px] border-slate-300 dark:border-slate-600 justify-between"
                                    >
                                        <span className="truncate">{!!selectedDifficulty ? problemDifficultyLabels[selectedDifficulty] : "Zorluk Seçiniz"}</span>
                                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandGroup>
                                            {Object.keys(problemDifficultyLabels).map((difficult, i) => (
                                                <CommandItem
                                                    key={difficult}
                                                    onSelect={() => {
                                                        // @ts-ignore
                                                        setSelectedDifficulty(difficult)
                                                        setOpen(false)
                                                    }}
                                                >
                                                    <CheckIcon
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            difficult === selectedDifficulty ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                    {/* @ts-ignore */}
                                                    {problemDifficultyLabels[difficult]}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </SheetDescription>
            </SheetHeader>
            <div className='my-2 flex border last:border-b-0 flex-col rounded'>
                {problems.filter(x => !selectedDifficulty || x.difficulty == selectedDifficulty).map((problem) => (
                    <Link href={"/problems/" + problem.slug} className='border-b hover:bg-accent hover:no-underline'>
                        <div className="flex px-2 py-4 justify-between items-center space-x-2">
                            <Avatar className='w-10 h-10'>
                                {/* <AvatarImage src={problem.image} /> */}
                                <AvatarFallback>{problem.title.split(" ").map(x => x.charAt(0)).join("")}</AvatarFallback>
                            </Avatar>
                            <div className='pb-1 flex flex-1 flex-row items-center justify-between space-y-1'>
                                <h2 className='text-md font-medium'>{problem.title}</h2>
                                <div>
                                    <Badge
                                        variant={"secondary"}
                                        // @ts-ignore
                                        className={cn('text-white', problemDifficultyColors[problem.difficulty])}
                                    >
                                        {problemDifficultyLabels[problem.difficulty]}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}


const ProblemListButton = () => {

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant={"ghost"}>
                    <HamburgerMenuIcon className='mr-2' />
                    Problem Listesi
                </Button>
            </SheetTrigger>

            <SheetContent side={"left"} className="w-[400px] sm:w-[740px] sm:!max-w-xl h-full overflow-y-auto">
                <ProblemListContent />
            </SheetContent>
        </Sheet>
    )
}

export default ProblemListButton