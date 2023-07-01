import clsx from 'clsx';
import Link from 'next/link'
import React from 'react'

type Props = {
    className?: string;
    href?: string;
}

const BrandLink = ({
    className,
    href = "/"
}: Props) => {
  return (
    <Link href={href} className={clsx("btn space-x-1 btn-ghost normal-case text-xl", className)}>
        <img src='/assets/logo-ico.svg' width={24} />
        <span className="text-[color:var(--brand-color)]">Kod</span>Challenge
    </Link>
  )
}

export default BrandLink