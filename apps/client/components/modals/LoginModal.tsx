import { setShowLoginModalAction } from '@/store/appStore'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { KcBrandButton } from '../buttons'
export type LoginModalProps = {
    callbackUrl?: string
}
const LoginModal = ({
    callbackUrl
}: LoginModalProps) => {
    const email = React.useRef("")
    const password = React.useRef("")
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()
    const router = useRouter()

    const handleDismissModal = (e: React.MouseEvent<any, MouseEvent>) => {
        dispatch(setShowLoginModalAction(false))
    }
    const handleSignin = async () => {
        if (loading || !email.current || !password.current) return;
        setLoading(true)
        signIn("credentials", {
            email: email.current,
            password: password.current,
            // callbackUrl: callbackUrl ?? router.query.callbackUrl as string ?? "/"
        }).finally(() => setLoading(false))
    }
    return (
        <div className="modal modal-open cursor-pointer">
            <div className="modal-box relative">
                <div className="flex justify-center align-center">
                    <KcBrandButton />
                </div>
                <label onClick={handleDismissModal} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <p className="py-4 font-bold text-lg">Devam edebilmek için lütfen giriş yapınız.</p>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Kullanıcı Adı veya E-posta</span>
                        </label>
                        <input type="text" className="input input-bordered" onChange={(e) => email.current = e.target.value} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Parola</span>
                        </label>
                        <input type="text" className="input input-bordered" onChange={(e) => password.current = e.target.value} />
                    </div>
                    <div className="form-control mt-6">
                        <button
                            className="btn btn-primary"
                            onClick={() => handleSignin()}
                            disabled={loading}
                        >
                            {!loading ? "Giriş Yap" : "Giriş Yapılıyor..."}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal