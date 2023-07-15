import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import React from 'react'

const ProblemListButton = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant={"ghost"}>
                    <HamburgerMenuIcon className='mr-2' />
                    Problem Listesi
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                    <SheetTitle>Problem Listesi</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default ProblemListButton