import { MainFooter } from '@/components/footer'
import { MainHeader } from '@/components/header'
import { cn } from '@/lib/utils'
import HomeHeroTitleSection from '@/views/home/HomeHeroTitleSection'

export default function Home() {
    return (
        <>
            <div className={cn("dot-points", "full-screen")}></div>
            <MainHeader />
            <main>
                <HomeHeroTitleSection />
            </main>
            <MainFooter />
        </>
    )
}
