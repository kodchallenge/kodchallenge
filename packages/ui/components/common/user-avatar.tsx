import { cn } from '@ui/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Skeleton } from '../ui/skeleton'

type Props = {
    avatar: string
    username: string
    loading?: boolean
    className?: string
    avatarClassName?: string
    labelClassName?: string
}

const UserAvatar = ({
    avatar,
    username,
    loading = false,
    className,
    avatarClassName,
    labelClassName,
}: Props) => {
    return loading ? (
        <div className='flex items-center space-x-1'>
            <Skeleton className='w-6 h-6 rounded-full' />
            <Skeleton className='w-10 h-5' />
        </div>
    ) : (
        <div className={cn('flex items-center space-x-1', className)}>
            <Avatar className={cn('h-6 w-6', avatarClassName)}>
                <AvatarImage src={avatar} alt={"@" + username} />
                <AvatarFallback>{username}</AvatarFallback>,
            </Avatar>
            <h2 className={cn('text-sm font-medium', labelClassName)}>{username}</h2>
        </div>
    )
}

export default UserAvatar