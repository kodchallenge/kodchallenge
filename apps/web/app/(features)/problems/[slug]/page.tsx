import { KodEditor } from '@kod/editor'
import { KodServerTrpc } from '@kod/server/next'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    params: {
        slug: string
    }
}

const page = async ({ params }: Props) => {
    const problem = await KodServerTrpc.problem.getBySlug(params.slug)

    if (!problem) {
      return redirect("/problems")
    }

    return (
        <KodEditor problem={problem} />
    )
}

export default page