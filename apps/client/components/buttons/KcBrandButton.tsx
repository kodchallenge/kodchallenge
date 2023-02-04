import Link from 'next/link'
import React from 'react'

const KcBrandButton = () => {
    return (
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
            <span className='text-[color:var(--brand-color)]'>Kod</span>Challenge
        </Link>
    )
}

export default KcBrandButton