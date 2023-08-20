"use client"
import AuthCard from '@/components/auth/AuthCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const page = () => {
    // CSS.paintWorklet.addModule('https://unpkg.com/brand-colors/dist/brand-colors.js');
    return (
        <AuthCard
            description='Doğrulama Kodu'
            info='Lütfen e-posta adresinize (ornek@kodchallenge) gönderilen doğrulama kodunu giriniz.'
        >
            <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <label htmlFor="code">Doğrulama Kodu</label>
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