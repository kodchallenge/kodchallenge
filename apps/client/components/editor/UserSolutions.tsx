import { SolutionStateInfos } from '@/constants'
import { SolutionService } from '@/services'
import { RootState } from '@/store'
import { setUserSolutionsAction } from '@/store/solutionStore'
import clsx from 'clsx'
import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserSolutions = () => {
    const {userSolutions} = useSelector((state: RootState) => state.solution)
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
        SolutionService.getSolutionsByUserId(1).then(res => {
            const solutions = res.data.solutions.map(x => ({ 
                ...x, 
                stateInfo: SolutionStateInfos[x.state], 
                cases: x.cases.map(c => {
                    let stateInfo = SolutionStateInfos.success
                    if(c.build) stateInfo = SolutionStateInfos['build-error']
                    else if(c.timeout) stateInfo = SolutionStateInfos.timeout
                    else if(!c.status) stateInfo = SolutionStateInfos.failed
                    return {...c, stateInfo}
                } ) 
            }))
            dispatch(setUserSolutionsAction(solutions))
        })
    }, [])

    return (
        <div>
            {userSolutions.length === 0 && <div className='text-center text-gray-500'>Henüz çözüm bulunmamaktadır.</div>}
            {userSolutions.map(solution => (
                <div className='hover:bg-base-200'>
                    <Link
                        href={{
                            pathname: router.pathname,
                            query: { ...router.query, solution: solution.id },
                        }}
                        className='p-5 flex cursor-pointer items-center justify-between'
                    >
                        <div className='flex items-center gap-10'>
                            <div className='flex flex-col md:min-w-[10rem]'>
                                <div
                                    className={clsx('font-bold tooltip tooltip-right text-left before:text-center', solution.stateInfo?.cn)}
                                    data-tip={solution.stateInfo?.description ?? ""}
                                >
                                    {solution.stateInfo?.name}
                                </div>
                                <div
                                    className='text-sm text-gray-500 tooltip tooltip-bottom text-left before:text-center'
                                    data-tip={moment(solution.createdAt).format('LLL')}
                                >
                                    {moment(solution.createdAt).locale("tr").fromNow()}
                                </div>
                            </div>
                            <div className='flex-col'>
                                <div className='badge'>{solution.language.name}</div>
                            </div>
                        </div>
                        <div>
                            <i className='fas fa-chevron-right text-gray-500'></i>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default UserSolutions