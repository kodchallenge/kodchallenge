import React from 'react'
import Logo from './logo';
import { cn } from '@kod/ui';

type Props = {
    className?: string;
    labelClassName?: string;
    size?: "sm" | "md" | "lg";
}

const LogoWithLabel = ({
    className,
    labelClassName,
    size = "md"
}: Props) => {
    // TODO - Change pls :)
    const sizes = {
        "sm": {
            logo: "w-6 h-6",
            label: "text-base",
        },
        "md": {
            logo: "w-8 h-8",
            label: "text-2xl",
        },
        "lg": {
            logo: "w-10 h-10",
            label: "text-4xl",
        }
    }

    const activeSize = sizes[size];

    return (
        <div className="flex items-center space-x-1">
            <Logo className={activeSize.logo} />
            <span className={cn("font-bold", activeSize.label)}>
                <span className="text-primary">Kod</span>Challenge
            </span>
        </div>
    )
}

export default LogoWithLabel