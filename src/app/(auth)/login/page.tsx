"use client"
import AuthCard from '@/components/auth/AuthCard'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/core/auth-provider'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

const page = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const { login } = useAuth()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (loading) return

        const formData = new FormData(event.target as HTMLFormElement);
        const usernameOrEmail = formData.get('username') as string
        const password = formData.get('password') as string
        setLoading(true)
        login({ usernameOrEmail, password }, (err) => {
            setLoading(false)
            console.error(err)
            setError(err.message)
        })
    }

    return (
        <>
            <AuthCard description="KodChallenge'a Hoşgeldin!">
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="username">Kullanıcı Adı veya Eposta</label>
                            <Input id="username" name='username' placeholder="Kullanıcı Adı veya E-posta adresinizi giriniz" />
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
                            <Input id="password" name='password' type='password' placeholder="Şifrenizi giriniz" />
                        </div>
                    </div>
                    {error && <p className='text-red-500 text-sm my-3'>{error}</p>}
                    <div className='mt-8 flex flex-col space-y-3'>
                        <Button type='submit' className='w-full' disabled={loading}>
                            {loading ? "Giriş Yapılıyor.." : "Giriş Yap"}
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