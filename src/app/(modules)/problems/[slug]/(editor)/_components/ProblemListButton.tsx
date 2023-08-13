import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { CaretSortIcon, CheckIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import React from 'react'
const badgeColors = {
    easy: "bg-teal-500 hover:bg-teal-600",
    medium: "bg-indigo-500 hover:bg-indigo-600",
    hard: "bg-rose-500 hover:bg-rose-600",
}
const ProblemListButton = () => {
    const [problems, setProblems] = React.useState([
        { title: 'Merhaba KodChallenge', difficulty: "easy", image: "https://dg8krxphbh767.cloudfront.net/exercises/hello-world.svg", description: 'Klasik programlama başlangıç sorusudur.' },
        { title: 'Problem 2 lorem ipsum sit amet dolor amhis osho', difficulty: "medium", image: "https://dg8krxphbh767.cloudfront.net/exercises/armstrong-numbers.svg", description: 'Problem 2 açıklaması' },
        { title: 'Problem 3', difficulty: "easy", image: "https://dg8krxphbh767.cloudfront.net/exercises/hamming.svg", description: 'Problem 3 açıklaması' },
        { title: 'Problem 4', difficulty: "hard", image: "https://dg8krxphbh767.cloudfront.net/exercises/isogram.svg", description: 'Problem 4 açıklaması' },
        { title: 'Problem 5', difficulty: "medium", image: "https://dg8krxphbh767.cloudfront.net/exercises/circular-buffer.svg", description: 'Problem 5 açıklaması' },
    ])
    const [open, setOpen] = React.useState(false)
    const [selectedDifficulty, setSelectedDifficulty] = React.useState<string | null>(null)
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant={"ghost"}>
                    <HamburgerMenuIcon className='mr-2' />
                    Problem Listesi
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="w-[400px] sm:w-[740px] sm:!max-w-xl h-full overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>Problem Listesi</SheetTitle>
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
                                            <span className="truncate">{!!selectedDifficulty && selectedDifficulty != "Tümü" ? selectedDifficulty : "Zorluk Seçiniz"}</span>
                                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                            {/* <CommandInput placeholder="Search framework..." />
                            <CommandEmpty>No framework found.</CommandEmpty> */}
                                            <CommandGroup>
                                                {["Tümü", "Kolay", "Orta", "Zor"].map(difficult => (
                                                    <CommandItem
                                                        key={difficult}
                                                        onSelect={() => {
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
                                                        {difficult}
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
                    {[...problems, ...problems, ...problems, ...problems, ...problems, ...problems, ...problems].map((problem) => (
                        <div className='border-b hover:bg-slate-50 dark:hover:bg-slate-700'>
                            <div className="flex px-2 py-4 justify-between items-center space-x-2">
                                <Avatar className='w-10 h-10'>
                                    <AvatarImage src={problem.image} />
                                    <AvatarFallback>VC</AvatarFallback>
                                </Avatar>
                                <div className='pb-1 flex flex-1 flex-row items-center justify-between space-y-1'>
                                    <h2 className='text-md font-medium'>{problem.title}</h2>
                                    <div>
                                        <Badge
                                            variant={"secondary"}
                                            // @ts-ignore
                                            className={cn('text-white', badgeColors[problem.difficulty])}
                                        >
                                            {problem.difficulty}
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default ProblemListButton