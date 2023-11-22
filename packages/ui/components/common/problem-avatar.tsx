import { Avatar, AvatarFallback } from '../ui'
import { cn } from '@ui/lib/utils'
import { AvatarImage } from '../ui/avatar'

type Props = {
    title: string
    icon?: string
    className?: string
}

const ProblemAvatar = ({
    title,
    className,
    icon
}: Props) => {
    return (
        <Avatar className={cn('w-10 h-10', className)}>
            <AvatarImage src={icon} />
            <AvatarFallback>{title.split(" ").map(x => x.charAt(0)).join("")}</AvatarFallback>
        </Avatar>
    )
}

export default ProblemAvatar