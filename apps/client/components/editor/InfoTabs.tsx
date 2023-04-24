import React, { useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Description from './Description'
import UserSolutions from './UserSolutions'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setPageTitleAction } from '@/store/editorStore'

const InfoTabs = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [tabs] = useState([
        { name: 'Açıklama', tab: 'description', tooltip: "Problem detayı" },
        { name: 'Çözümler', tab: 'solutions', tooltip: "Kullanıcı çözümleri" },
        { name: 'Kaydettiklerin', tab: 'submissions', tooltip: "Kaydettiğin tüm çözümler" },
    ])

    const handleSelectTab = (index: number) => {
        delete router.query.solution
        router.query.tab = tabs[index].tab
        router.push(router)
        dispatch(setPageTitleAction(tabs[index].name))
    }

    return (
        <Tabs onSelect={handleSelectTab} selectedIndex={Math.max(0, tabs.findIndex(x => x.tab == router.query?.tab))} selectedTabClassName='tab-active' className={"h-full relative flex flex-col flex-1"}>
            <TabList className={"tabs bg-base-200 space-x-5"}>
                {tabs.map((tab, index) => (
                    <Tab key={index} className={"tab tab-lifted tooltip tooltip-bottom"}>
                        <div className='tooltip tooltip-bottom' data-tip={tab.tooltip}>
                            {tab.name}
                        </div>
                    </Tab>
                ))}
            </TabList>
            <div className='h-full overflow-auto p-4'>
                <TabPanel>
                    <Description />
                </TabPanel>
                <TabPanel>
                    <p className='text-center text-gray-500'>Problemi çözmeden diğer kullanıcıların çözümlerini göremezsiniz!</p>
                </TabPanel>
                <TabPanel>
                    <UserSolutions />
                </TabPanel>
            </div>
        </Tabs>
    )
}

export default InfoTabs