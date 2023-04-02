import { SolutionState, SolutionStateInfos } from '@/constants'
import { UserSolutionDetail } from '@/models/UserSolutionDetail'
import { SolutionService } from '@/services'
import { randomEnumValue } from '@/utils/utils'
import clsx from 'clsx'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

const UserSolutions = () => {
    const [solutions, setSolutions] = React.useState<UserSolutionDetail[]>([])

    useEffect(() => {
        SolutionService.getSolutionsByUserId(1).then(res => {
            console.log(res.data)
            const s = res.data.solutions.map(x => ({ ...x, state: randomEnumValue(SolutionState) })) // TODO: remove this line because [state] is get from backend
            setSolutions(s.map(x => ({ ...x, stateInfo: SolutionStateInfos[x.state] }))) // Initialize stateInfo by state because stateInfo was not received from the backend
        })
    }, [])

    return (
        <div>
            {solutions.length === 0 && <div className='text-center text-gray-500'>Henüz çözüm bulunmamaktadır.</div>}
            {solutions.map(solution => (
                <div className='hover:bg-base-200'>
                    <div className='p-5 flex cursor-pointer items-center justify-between'>
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
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UserSolutions