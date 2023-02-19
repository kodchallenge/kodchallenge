import { RootState } from '@/store';
import React from 'react'
import { useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export type Props = {
    runCode: () => void;
}

const Output = ({
    runCode
}: Props) => {
    const { output } = useSelector((state: RootState) => state.editor)

    console.log(output)
    return (
        <div className='card'>
            <Tabs>
                <TabList className={"tabs tabs-boxed justify-between items-center shadow-md"}>
                    <div>
                        <Tab selectedClassName="tab-active" className={"tab"}>Konsol</Tab>
                        <Tab selectedClassName="tab-active" className={"tab"}>Test Case</Tab>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <button className='btn btn-sm' onClick={runCode}>Çalıştır</button>
                        <button className='btn btn-sm btn-primary'>Testleri Başlat</button>
                        <button className='btn btn-success btn-sm' disabled>Gönder</button>
                    </div>
                </TabList>

                <TabPanel>
                    <p dangerouslySetInnerHTML={{__html: output.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;")}}></p>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Output