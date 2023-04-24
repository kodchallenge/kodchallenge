import Link from 'next/link'
import React from 'react'

const KcBrandButton = () => {
    return (
        <Link href={"/"} className="btn space-x-1 btn-ghost normal-case text-xl">
            <img src='/assets/logo-ico.svg' width={24} />
            <span className="text-[color:var(--brand-color)]">Kod</span>Challenge
        </Link>
    )
}

export default KcBrandButton