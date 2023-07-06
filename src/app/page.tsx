import { Button } from '@/components/ui/button'
import HomeHeroTitleSection from '@/views/home/HomeHeroTitleSection'
import HomePreviewSection from '@/views/home/HomePreviewSection'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Button variant={"ghost"}>
        Giriş Yap
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      {/* <HomeHeroTitleSection /> */}
      {/* <HomePreviewSection /> */}
    </main>
  )
}
