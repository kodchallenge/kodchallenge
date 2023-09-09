import { Logo } from "@/components/logo"
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@kod/icons"
import { Button } from '@kod/ui'

const Footer = () => {
    return (
        <footer className="relative order-2 border-t border-primary/50">
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="px-0">
                            <div className="grid grid-cols-1 mt-12">
                                <div className="text-center flex flex-col justify-center items-center">
                                    <Logo className={"w-10 h-10"} />
                                    {/* <LogoWithLabel size='lg'/> */}
                                    <p className="max-w-xl mx-auto mt-6">
                                        KodChallenge, yazılım geliştirme alanında kendini geliştirmek isteyenler için oluşturulmuş bir topluluktur.
                                    </p>
                                </div>
                                <ul className="list-none text-center mt-6 flex items-center justify-center space-x-1">
                                    <li>
                                        <Button variant={"ghost"}>
                                            <LinkedInLogoIcon className="h-4 w-4" />
                                        </Button>
                                    </li>
                                    <li>
                                        <Button variant={"ghost"}>
                                            <TwitterLogoIcon className="h-4 w-4" />
                                        </Button>
                                    </li>
                                    <li>
                                        <Button variant={"ghost"}>
                                            <GitHubLogoIcon className="h-4 w-4" />
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[30px] px-0">
                <div className="container relative text-center">
                    <div className="grid md:grid-cols-1">
                        <p className="mb-0">© {new Date().getFullYear()} <span className='text-primary'>KodChallenge</span> Tüm hakları Saklıdır.</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer