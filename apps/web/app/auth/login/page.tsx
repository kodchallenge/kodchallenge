"use client"
import AuthCard from '@/components/auth/auth-card'
import { Button, Input } from '@kod/ui'
import { GitHubLogoIcon } from '@kod/icons'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'
import { LINKS } from '@/utils/constants'
import { AuthErrors, login } from '@kod/features/auth/next'
import { useKodAuth } from '@kod/lib/hoc'

const authErrorMessages: { [key: string]: string } = {
    [AuthErrors.MISSING_CREDENTIALS]: "Kullanıcı adı veya şifre boş bırakılamaz",
    [AuthErrors.NO_CREDENTIALS_PROVIDED]: "Kullanıcı adı veya şifre boş bırakılamaz",
    [AuthErrors.INVALID_USERNAME_PASSWORD]: "Kullanıcı adı veya şifre hatalı",
}

const page = () => {
    const { isAuthenticated } = useKodAuth()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const router = useRouter()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (loading) return

        const formData = new FormData(event.target as HTMLFormElement);
        const usernameOrEmail = formData.get('username') as string
        const password = formData.get('password') as string
        setLoading(true)
        const res = await login({ usernameOrEmail, password })
        if (!res.error) router.push("/") // TODO: add callback url
        else setError(authErrorMessages[res.error] || "Bir hata oluştu")
        setLoading(false)
    }
    const searchParams = useSearchParams()

    // useEffect(() => {
    //     if (searchParams.get('error')) setError("Kullanıcı adı veya şifre hatalı")
    // }, [searchParams])

    if(isAuthenticated) {
        router.push("/")
    }

    return (
        <>
            <AuthCard description="KodChallenge'a Hoşgeldin!">
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="username">Kullanıcı Adı veya Eposta</label>
                            <Input tabIndex={1} id="username" name='username' placeholder="Kullanıcı Adı veya E-posta adresinizi giriniz" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <div className='flex justify-between items-center'>
                                <label htmlFor="password">Şifre</label>
                                <Link href={LINKS.forgotPassword}>
                                    <Button type='button' size={"sm"} variant='link' className='text-primary'>
                                        Şifremi Unuttum
                                    </Button>
                                </Link>
                            </div>
                            <Input tabIndex={2} id="password" name='password' type='password' placeholder="Şifrenizi giriniz" />
                        </div>
                    </div>
                    {error && <p className='text-red-500 text-sm my-3'>{error}</p>}
                    <div className='mt-8 flex flex-col space-y-3'>
                        <Button tabIndex={3} type='submit' className='w-full' disabled={loading}>
                            {loading ? "Giriş Yapılıyor.." : "Giriş Yap"}
                        </Button>
                        <div className='flex-1 w-full flex justify-between items-center'>
                            <div className='align-middle border-solid w-full border-t-[0.1px] border-t-foreground/10' />
                            <span className='mx-2 text-sm'>Veya</span>
                            <div className='align-middle border-solid w-full border-t-[0.1px] border-t-foreground/10' />
                        </div>
                        <Button variant={"secondary"} type='button' className='w-full'>
                            <GitHubLogoIcon className='mr-2 h-4 w-4' />
                            Github ile Giriş Yap
                        </Button>
                    </div>
                </form>
            </AuthCard>
            <p>
                Hesabınız yok mu?
                <Link href={LINKS.register}>
                    <Button variant='link' className='text-primary'>Kayıt Ol</Button>
                </Link>
            </p>
        </>
    )
}

export default page