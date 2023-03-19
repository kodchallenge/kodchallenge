import { RootState } from '@/store';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export type Props = {
    runCode: () => Promise<void>;
}

const Output = ({
    runCode
}: Props) => {
    const { output, isError } = useSelector((state: RootState) => state.editor)
    const [isRunning, setIsRunning] = useState(false)
    const { data: session } = useSession()
    const handleRunCodeClick = () => {
        if(!session) {
            return;
        }
        setIsRunning(true)
        runCode().finally(() => {
            setIsRunning(false)
        })
    }

    return (
        <div className='card h-full'>
            <Tabs className={"h-full flex flex-col flex-1"}>
                <TabList className={"tabs tabs-boxed justify-between items-center shadow-md"}>
                    <div>
                        <Tab selectedClassName="tab-active" className={"tab"}>Konsol</Tab>
                        <Tab selectedClassName="tab-active" className={"tab"}>Test Case</Tab>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <button className='btn btn-sm' onClick={handleRunCodeClick}>Çalıştır</button>
                        <button className='btn btn-sm btn-primary'>Testleri Başlat</button>
                        <button className='btn btn-success btn-sm' disabled>Gönder</button>
                    </div>
                </TabList>

                <TabPanel className={"flex-1 flex flex-col"}>
                    <div className="mockup-code p-2 rounded h-full">
                        {isRunning ? (
                            <pre data-prefix='> Çalıştırılıyor..' className="text-success"></pre>
                        ) : (
                            <pre data-prefix="> Çıktı" > <br />
                                <code className={isError ? "text-error" : "asd"} dangerouslySetInnerHTML={{ __html: output.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;") }} />
                            </pre>
                        )}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Output