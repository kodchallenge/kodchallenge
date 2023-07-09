import React from 'react'
import { Logo } from './logo';
import { cn } from '@/lib/utils';

type Props = {
    className?: string;
    labelClassName?: string;
    size?: "sm" | "md" | "lg";
}

export const LogoWithLabel = ({
    className,
    labelClassName,
    size = "md"
}: Props) => {
    const sizes = {
        "sm": {
            logo: 6,
            label: "text-base",
        },
        "md": {
            logo: 8,
            label: "text-2xl",
        },
        "lg": {
            logo: 10,
            label: "text-4xl",
        }
    }

    const activeSize = sizes[size];

    return (
        <div className="flex items-center space-x-1">
            <Logo size={activeSize.logo} />
            <span className={cn("font-bold", activeSize.label)}>
                <span className="text-primary">Kod</span>Challenge
            </span>
        </div>
    )
}