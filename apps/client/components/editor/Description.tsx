import React from 'react'
import KodMarkdown from 'kod-markdown'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

const Description = () => {
    const { currentProblem } = useSelector((state: RootState) => state.problem)
    return (
        <>
            <div className='md'>
                {/* <KodMarkdown fromUrl={"/assets/dump/sample.md"} theme='light' /> */}
                <KodMarkdown markdown={currentProblem.description} theme='light' />
            </div>
        </>
    )
}

export default Description