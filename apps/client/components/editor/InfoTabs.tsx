import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Description from './Description'
import UserSolutions from './UserSolutions'

const InfoTabs = () => {
    return (
        <Tabs className={"h-full relative flex flex-col flex-1"}>
            <TabList className={"tabs bg-base-200 space-x-5"}>
                <Tab selectedClassName="tab-active" className={"tab tab-lifted"}>Açıklama</Tab>
                <Tab selectedClassName="tab-active" className={"tab tab-lifted"}>Çözümler</Tab>
                <Tab selectedClassName="tab-active" className={"tab tab-lifted"}>Kaydettiklerin</Tab>
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