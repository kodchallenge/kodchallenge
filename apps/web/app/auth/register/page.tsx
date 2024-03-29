"use client"
import AuthCard from '@/components/auth/auth-card'
import { LINKS } from '@/utils/constants'
import { Button, Input } from '@kod/ui'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <AuthCard description="Türkçe Programlama Platformuna Hoşgeldiniz">
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="username">Kullanıcı Adı</label>
                            <Input id="username" placeholder="Kullanıcı Adınızı giriniz" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="email">E-posta Adresi</label>
                            <Input id="email" type='email' placeholder="E-posta adresinizi giriniz" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="password">Şifre</label>
                            <Input id="password" type='password' placeholder="Şifrenizi giriniz" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="password2">Şifre Tekrar</label>
                            <Input id="password2" type='password' placeholder="Şifrenizi tekrar giriniz" />
                        </div>
                    </div>

                    <div className='mt-8 flex flex-col space-y-3'>
                        <Button type='submit' className='w-full'>
                            Kayıt Ol
                        </Button>
                    </div>
                </form>
            </AuthCard>
            <p>
                Hesabınız var mı?
                <Link href={LINKS.login}>
                    <Button variant='link' className='text-primary'>Giriş Yap</Button>
                </Link>
            </p>
        </>
    )
}

export default page