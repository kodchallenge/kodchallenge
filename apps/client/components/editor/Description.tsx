import React from 'react'
import KodMarkdown from 'kod-markdown'

const Description = () => {
    return (
        <div className='p-10'>
            <KodMarkdown fromUrl='/assets/dump/sample.md' theme='light' />
        </div>
    )
}

export default Description