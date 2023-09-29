import { Logo } from "@/components/logo"
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@kod/icons"
import { Button } from '@kod/ui'

const Footer = () => {

    const socials = [
        { name: "Twitter", url: "https://twitter.com/kodchallenge", icon: <TwitterLogoIcon /> },
        { name: "LinkedIn", url: "https://linkedin.com/in/kodchallenge", icon: <LinkedInLogoIcon /> },
        { name: "GitHub", url: "https://github.com/kodchallenge", icon: <GitHubLogoIcon /> },
    ]

    return (
        <footer className="relative order-2 border-t border-primary/50">
            <section className="">
                <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
                    <Logo />
                    <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
                        © 2023 KodChallenge - Open Source Project
                    </p>
                    <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                        {socials.map((social, index) => (
                            <a href={social.url} target="_blank" className="text-gray-400 hover:text-gray-500">
                                {social.icon}
                            </a>
                        ))}
                    </span>
                </div>
            </section>
        </footer>

    )
}
export default Footer