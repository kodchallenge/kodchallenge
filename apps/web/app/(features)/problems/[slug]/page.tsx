import { KodEditor } from '@kod/editor'
import React from 'react'

type Props = {
    params: {
        slug: string
    }
}

const page = ({ params }: Props) => {
    return (
        <KodEditor slug={params.slug} />
    )
}

export default page