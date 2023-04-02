import { SolutionState } from '@/constants'
import { UserSolutionDetail } from '@/models/UserSolutionDetail'
import { SolutionService } from '@/services'
import { randomEnumValue } from '@/utils/utils'
import clsx from 'clsx'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

const UserSolutions = () => {
    const [solutions, setSolutions] = React.useState<UserSolutionDetail[]>([])
    const [states] = useState<{ [value in SolutionState]: { name: string, cn: string } }>({
        [SolutionState.Success]: { name: "Başarılı", cn: "text-success" },
        [SolutionState.Failed]: { name: "Testden Geçemedi", cn: "text-error" },
        [SolutionState.BuildError]: { name: "Build Hatası", cn: "text-error-content" },
        [SolutionState.Timeout]: { name: "Zaman Aşımı", cn: "text-warning" },
    })

    useEffect(() => {
        SolutionService.getSolutionsByUserId(1).then(res => {
            console.log(res.data)
            setSolutions(res.data.solutions.map(x => ({ ...x, state: randomEnumValue(SolutionState) })))
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
                                <div className={clsx('font-bold', states[solution.state].cn)}>{states[solution.state].name}</div>
                                <div className='text-sm text-gray-500'>{moment(new Date("03/29/2023")).locale("tr").fromNow()}</div>
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