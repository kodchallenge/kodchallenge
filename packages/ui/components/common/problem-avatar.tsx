import React from 'react'
import { Avatar, AvatarFallback } from '../ui'
import { cn } from '@ui/lib/utils'

type Props = {
    title: string
    image?: string
    className?: string
}

const ProblemAvatar = ({
    title,
    className
}: Props) => {
    return (
        <Avatar className={cn('w-10 h-10', className)}>
            {/* <AvatarImage src={problem.image} /> */}
            <AvatarFallback>{title.split(" ").map(x => x.charAt(0)).join("")}</AvatarFallback>
        </Avatar>
    )
}

export default ProblemAvatar