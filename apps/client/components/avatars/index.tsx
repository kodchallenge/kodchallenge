import clsx from 'clsx'
import { FC } from 'react';
type Props = React.HTMLAttributes<HTMLDivElement> & {
    src: string;
    className?: string;
    imgClassName?: string;
}

export const Avatar: FC<Props> = ({
    src,
    className = "",
    imgClassName = "",
    ...rest
}: Props) => {
    return (
        <div className="avatar">
            <div {...rest} className={clsx("w-12 h-12 mask mask-squircle", className)}>
                <img src={src} className={imgClassName} />
            </div>
        </div>
    )
} 