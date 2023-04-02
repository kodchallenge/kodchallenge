import React, { useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Description from './Description'
import UserSolutions from './UserSolutions'
import { useRouter } from 'next/router'

const InfoTabs = () => {
    const router = useRouter()
    const [tabs] = useState([
        { name: 'Açıklama', tab: 'description' },
        { name: 'Çözümler', tab: 'solutions' },
        { name: 'Kaydettiklerin', tab: 'submissions' },
    ])

    const handleSelectTab = (index: number) => {
        router.query.tab = tabs[index].tab
        router.push(router)
    }

    return (
        <Tabs onSelect={handleSelectTab} selectedIndex={Math.max(0, tabs.findIndex(x => x.tab == router.query?.tab))} selectedTabClassName='tab-active' className={"h-full relative flex flex-col flex-1"}>
            <TabList className={"tabs bg-base-200 space-x-5"}>
                {tabs.map((tab, index) => (
                    <Tab key={index} className={"tab tab-lifted"}>
                        {tab.name}
                    </Tab>
                ))}
            </TabList>
            <div className='h-full overflow-auto p-4'>
                <TabPanel>
                    <Description />
                </TabPanel>
                <TabPanel>
                    <h1>Çözümler</h1>
                </TabPanel>
                <TabPanel>
                    <UserSolutions />
                </TabPanel>
            </div>
        </Tabs>
    )
}

export default InfoTabs