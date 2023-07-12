"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AuthCard from '../components/AuthCard'

const page = () => {
    return (
        <AuthCard
            description='Şifrenizi sıfırlayın'
            info='Lütfen yeni şifrenizi giriniz'
        >
            <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <label htmlFor="password">Şifre</label>
                        <Input id="password" type='password' placeholder="Şifrenizi giriniz" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <label htmlFor="password2">Şifre Tekrar</label>
                        <Input id="password2" type='password' placeholder="Şifrenizi tekrar giriniz" />
                    </div>
                </div>
                <div className='mt-5'>
                    <Button className='w-full'>
                        Şifremi Sıfırla
                    </Button>
                </div>
            </form>
        </AuthCard>
    )
}

export default page