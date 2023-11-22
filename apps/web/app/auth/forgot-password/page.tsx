"use client"

import AuthCard from "@/components/auth/auth-card"
import { LINKS } from "@/utils/constants"
import { Button, Input } from "@kod/ui"
import Link from "next/link"

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
                        <Input tabIndex={1} id="username" placeholder="E-posta adresinizi giriniz" />
                    </div>
                </div>

                <div className='mt-8 flex flex-col space-y-3'>
                    <Button type="submit" tabIndex={2} className='w-full'>
                        Bağlantı Linki Gönder
                    </Button>
                </div>
            </form>
            <div className="text-center">
                <Link href={LINKS.login}>
                    <Button variant='link' className='text-primary'>Giriş Yap</Button>
                </Link>
            </div>
        </AuthCard>
    )
}

export default page