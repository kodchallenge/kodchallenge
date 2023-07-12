"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AuthCard from '../components/AuthCard'

const page = () => {
    return (
        <AuthCard
            description='Şifrenizi sıfırlayın'
            info='Eposta adresinize şifrenizi sıfırlayacağınız bağlantı linki gönderilecektir.'
        >
            <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <label htmlFor="username">E-posta</label>
                        <Input id="username" placeholder="E-posta adresinizi giriniz" />
                    </div>
                </div>

                <div className='mt-8 flex flex-col space-y-3'>
                    <Button className='w-full'>
                        Bağlantı Linki Gönder
                    </Button>
                </div>
            </form>
        </AuthCard>
    )
}

export default page