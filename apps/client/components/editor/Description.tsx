import React from 'react'
import KodMarkdown from 'kod-markdown'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

const Description = () => {
    const { currentProblem } = useSelector((state: RootState) => state.problem)
    return (
        <div className='p-10'>
            <KodMarkdown fromUrl='/assets/dump/sample.md' theme='light' />
        </div>
    )
}

export default Description