"use client"

import AuthCard from "@/components/auth/auth-card"
import { Button, Input } from "@kod/ui"

const page = () => {
    return (
        <AuthCard
            description='Doğrulama Kodu'
            info='Lütfen e-posta adresinize gönderilen doğrulama kodunu giriniz.'
        >
            <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <div className="flex justify-between items-center">
                            <label htmlFor="code">Doğrulama Kodu</label>
                            <div className="text-center">
                                <Button variant='ghost' className='text-primary hover:bg-transparent hover:text-primary/75'>Tekrar gönder</Button>
                            </div>
                        </div>
                        <Input id="code" placeholder="Doğrulama kodunu giriniz" />
                    </div>
                </div>
                <div className='mt-5'>
                    <Button className='w-full'>
                        Doğrula
                    </Button>
                </div>
            </form>
        </AuthCard>
    )
}

export default page