import Link from 'next/link'
import React from 'react'

const HomeHeroTitleSection = () => {
    return (
        <section className="vh-80 flex items-center tails-selected-element">
            <div className="w-full mx-auto text-center md:text-center">
                <h3 className="px-0 mb-6 text-lg md:text-xl">Öğrenirken eğlenmeye hazır mısın? 🎉</h3>
                <h1 className="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">
                    <span className="w-full text-primary lg:inline">Türkçe</span> Programlama Platformu
                    <br />
                </h1>
                <p className="px-0 mb-6 text-lg opacity-75 md:text-xl lg:px-24">
                    Ücretsiz ve Türkçe sorular ile programlama yeteneğini geliştir. Ödüllü programlama yarışmalarına katıl.
                    Her hafta birbirinden eğlenceli kodlama challenge etkinliklerinde sen de yerini al.
                </p>
                <Link href={"/auth/signup"} className="btn btn-primary">👉 Bize Katıl</Link>
            </div>
        </section>
    )
}

export default HomeHeroTitleSection