import { RootState } from '@/store'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const UserSolutionDetail = () => {
    const { userSolutions } = useSelector((state: RootState) => state.solution)
    const router = useRouter()
    const { solution: currentSolutionId } = router.query
    const solution = useMemo(() => userSolutions.find((s) => currentSolutionId == s.id.toString()), [userSolutions, currentSolutionId])

    console.log(userSolutions)
    return solution && (
        <div className='p-5'>
            <div>
                <div className='flex gap-2 items-center'>
                    <h1 className=''>Durum:</h1>
                    <div className={clsx('badge rounded-md', solution.stateInfo.badgeCN)}>{solution?.stateInfo?.name}</div>
                </div>
                <p className={solution.stateInfo.cn}>{solution.stateInfo.description}</p>
            </div>
            <div className='mt-5'>
                <h1 className=''>Çözümünüz:</h1>
                <SyntaxHighlighter
                    style={oneDark}
                    language={"js"}
                    PreTag="div"
                    showLineNumbers
                    lineNumberContainerStyle={{ userSelect: "none" }}
                >
                    {solution?.code}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default UserSolutionDetail