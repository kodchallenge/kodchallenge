import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger } from '@kod/ui'
import dynamic from 'next/dynamic'
import React, { useMemo } from 'react'

const ProblemIntroductionTab = dynamic(() => import('./introduction'), {
    loading: () => <p>Yükleniyor...</p>,
})

const UserSolutionTab = dynamic(() => import('./submissions'), {
    loading: () => <p>Yükleniyor...</p>,
})

const ProblemPanel = () => {
    const tabs = useMemo(() => [
        {
            value: "description",
            label: "Açıklama",
            content: ProblemIntroductionTab,
            props: { markdown: "Hello from markdown" }
        },
        {
            value: "solutions",
            label: "Çözümlerim",
            content: UserSolutionTab,
            props: {}
        },
    ], [])

    return (
        <Tabs defaultValue={tabs[0].value} className="w-[50%] h-full flex-col flex e-side-info border bg-background">
            <TabsList defaultValue={tabs[0].value} className='h-10 border-b bg-transparent justify-start rounded-none text-left'>
                {tabs.map((tab, i) => (
                    <TabsTrigger key={i} value={tab.value}>{tab.label}</TabsTrigger>
                ))}
            </TabsList>
            {tabs.map((tab, i) => (
                <TabsContent key={i} value={tab.value} className="h-0 flex-auto overflow-auto p-2">
                    {/* @ts-ignore */}
                    <tab.content {...tab.props} />
                </TabsContent>
            ))}
        </Tabs>
    )
}

export default ProblemPanel