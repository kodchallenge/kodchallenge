import { RootState } from '@/store'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { UserDropdownAvatar } from '../avatars/UserDropdownAvatar'
import { Avatar } from '../avatars'
import { useSession } from 'next-auth/react'
import moment from 'moment'
const UserSolutionDetail = () => {
    const { data: session } = useSession()
    const { userSolutions } = useSelector((state: RootState) => state.solution)
    const router = useRouter()
    const { solution: currentSolutionId } = router.query
    const solution = useMemo(() => userSolutions.find((s) => currentSolutionId == s.id.toString()), [userSolutions, currentSolutionId])

    const handleClosePress = () => {
        delete router.query.solution
        router.push(router, undefined, { shallow: true })
    }

    return solution && (
        <div>
            <div className='h-8 flex items-center justify-start bg-base-200'>
                <button
                    className='btn btn-xs btn-error'
                    onClick={handleClosePress}
                >
                    Kapat
                </button>
            </div>
            <div className='p-5'>
                <div className='flex gap-2 mb-5'>
                    <Avatar src={session?.user.avatar} tabIndex={0} />
                    <div>
                        <h1 className='text-lg'>{session.user.username}</h1>
                        <p className='text-xs'>{moment(solution.createdAt).format('LLL')}</p>
                    </div>
                </div>
                <div>
                    <div className='flex gap-2 items-center'>
                        <h1 className=''>Durum:</h1>
                        <div className={clsx('badge rounded-md', solution.stateInfo.badgeCN)}>{solution?.stateInfo?.name}</div>
                    </div>
                    <p className={solution.stateInfo.cn}>{solution.stateInfo.description}</p>
                    <div className='my-5'>
                        {solution.cases.map((c, i) => (
                            <div key={i} className='flex gap-2 items-center'>
                                <h1 className='min-w-[60px]'>Test {i + 1}:</h1>
                                <div className={clsx('badge rounded-md', c.stateInfo?.badgeCN)}>{c?.stateInfo?.name}</div>
                            </div>
                        ))}
                    </div>
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
        </div>
    )
}

export default UserSolutionDetail