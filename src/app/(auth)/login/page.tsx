"use client"
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import AuthCard from '../components/AuthCard'

const page = () => {
    return (
        <>
            <AuthCard description="KodChallenge'a Hoşgeldin!">
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="username">Kullanıcı Adı veya Eposta</label>
                            <Input id="username" placeholder="Kullanıcı Adı veya E-posta adresinizi giriniz" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <div className='flex justify-between items-center'>
                                <label htmlFor="password">Şifre</label>
                                <Link href={"/forgot-password"}>
                                    <Button size={"sm"} variant='link' className='text-primary'>
                                        Şifremi Unuttum
                                    </Button>
                                </Link>
                            </div>
                            <Input id="password" type='password' placeholder="Şifrenizi giriniz" />
                        </div>
                    </div>
                    <div className='mt-8 flex flex-col space-y-3'>
                        <Button className='w-full'>
                            Giriş Yap
                        </Button>
                        <div className='flex-1 w-full flex justify-between items-center'>
                            <div className='align-middle border-solid w-full border-t-[0.1px] border-t-foreground/10' />
                            <span className='mx-2 text-sm'>Veya</span>
                            <div className='align-middle border-solid w-full border-t-[0.1px] border-t-foreground/10' />
                        </div>
                        <Button variant={"secondary"} type='button' className='w-full'>
                            <Icons.gitHub className='mr-2 h-4 w-4' />
                            Github ile Giriş Yap
                        </Button>
                    </div>
                </form>
            </AuthCard>
            <p>
                Hesabınız yok mu?
                <Link href={"/register"}>
                    <Button variant='link' className='text-primary'>Kayıt Ol</Button>
                </Link>
            </p>
        </>
    )
}

export default page