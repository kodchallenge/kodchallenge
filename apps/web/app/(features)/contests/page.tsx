import React from 'react'
import { ContestLandingPage } from '@kod/features/contests/views'
import { KodMainLayout } from '@/components/layouts'

const page = () => {
    return (
        <KodMainLayout>
            <ContestLandingPage />
        </KodMainLayout>
    )
}

export default page