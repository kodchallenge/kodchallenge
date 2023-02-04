import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Output = () => {
    return (
        <div className='card'>
            <Tabs>
                <TabList className={"tabs tabs-boxed justify-between items-center shadow-md"}>
                    <div>
                        <Tab selectedClassName="tab-active" className={"tab"}>Konsol</Tab>
                        <Tab selectedClassName="tab-active" className={"tab"}>Test Case</Tab>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <button className='btn btn-sm'>Çalıştır</button>
                        <button className='btn btn-sm btn-primary'>Testleri Başlat</button>
                        <button className='btn btn-success btn-sm' disabled>Gönder</button>
                    </div>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Output