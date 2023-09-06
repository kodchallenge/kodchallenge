import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TabsContent } from '@/components/ui/tabs'
import { ChatBubbleIcon, EyeOpenIcon, ThickArrowUpIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className='px-2 py-4 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer rounded-sm'>
          <h1 className='text-lg font-medium mb-2'>✅3 Method's || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥</h1>
          <div className='flex flex-wrap space-y-1 items-center space-x-3'>
            <Link href={"#"} className='flex items-center space-x-1'>
              <Avatar className='h-5 w-5'>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>,
              </Avatar>
              <h2 className='text-sm font-medium'>shadcn</h2>
            </Link>
            <div className='text-xs text-muted-foreground'>
              09 Temmuz 2023
            </div>
            <div className='flex space-x-1 flex-1'>
              {["C++", "Java", "Python"].map((label, i) => (
                <Badge variant={"secondary"} key={i}>{label}</Badge>
              ))}
            </div>
          </div>
          <div>
            <div className='flex space-x-2 items-center'>
              <Button className='space-x-2' variant={"ghost"} disabled>
                <ThickArrowUpIcon />
                <span className='text-xs'>682</span>
              </Button>
              <Button className='space-x-2' variant={"ghost"} disabled>
                <EyeOpenIcon />
                <span className='text-xs'>1.5K</span>
              </Button>
              <Button className='space-x-2' variant={"ghost"} disabled>
                <ChatBubbleIcon />
                <span className='text-xs'>3</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default page