import { problemDifficulty } from '@kod/lib/common/problem-difficulty'
import { KodServerTrpc } from '@kod/server/next'
import { Badge, ProblemAvatar, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@kod/ui'
import Link from 'next/link'
import React from 'react'

type Props = {
  trigger: React.ReactNode
}

const ProblemList = async ({ trigger }: Props) => {
  const problems = await KodServerTrpc.problem.getAll()

  return (
    <Sheet>
      <SheetTrigger>
        {trigger}
      </SheetTrigger>

      <SheetContent side={"left"} className="w-[400px] sm:w-[740px] sm:!max-w-xl h-full overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            <Link href={"/problems"}>
              Problem Listesi
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className='my-2 flex border last:border-b-0 flex-col rounded'>
          {problems?.map((problem) => (
              <Link href={"/problems/" + problem.slug} className='border-b hover:bg-accent hover:no-underline duration-200'>
                <div className="flex px-2 py-4 justify-between items-center space-x-2">
                  <ProblemAvatar title={problem.title} icon={problem.icon} className="w-10 h-10" />
                  <div className='pb-1 flex flex-1 flex-row items-center justify-between space-y-1'>
                    <h2 className='text-md font-medium'>{problem.title}</h2>
                    <div>
                      <Badge
                        variant={"secondary"}
                      >
                        {problemDifficulty[problem.difficulty].name}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default ProblemList