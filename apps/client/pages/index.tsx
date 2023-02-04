import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import s from '@/assets/styles/main.module.css'
import KcLayout from '@/layouts/KcLayout';

export function Index() {
  return (
    <Fragment>
      <Head>
        <title>KodChallenge - Türkçe Programlama Platformu ⚡</title>
        <meta name="description" content="Türkçe programlama soruları çözebileceğiniz, projelerinizi tanıtabileceğiniz, kodlama yarışmaları ve etkinliklerine katılabileceğiniz ve bunları yaparken eğleneceğiniz Türkçe programlama platformu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <KcLayout overlay={(
          <div className={clsx(s.dotPointBg, "full-screen")}></div>
      )}>
        <div className="vh-80 flex items-center tails-selected-element">
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
            <Link href={"/signup"} className="btn btn-primary">👉 Bize Katıl</Link>
          </div>
        </div>
        <section className="px-2 z-10 py-32 md:px-0 tails-selected-element">
          <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
            <div className="flex flex-wrap items-center sm:-mx-3">
              <div className="w-full md:w-1/2 md:px-3">
                <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="block xl:inline">Programlama dillerine göre ayrılmış</span>
                    <span className="block text-primary xl:inline">Problemler!</span>
                  </h1>
                  <p className="mx-auto opacity-60 sm:max-w-md lg:text-xl md:max-w-3xl">Şuan da aktif olarak C, C++, C#, Java, JavaScript, Python gibi dillerde kodlama yapabilir, kendinizi daha da geliştirebilirsiniz.</p>
                  <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                    <a href="#_" className="btn flex items-center px-6 py-3">
                      Problemler
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:px-3 ">
                <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                  <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" className="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-2 z-10 py-32 md:px-0 tails-selected-element">
          <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
            <div className="flex flex-wrap items-center sm:-mx-3">
              <div className="w-full md:w-1/2 md:px-3">
                <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                  <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" className="" />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:px-3">
                <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="block xl:inline">Ücretsiz Kodlama</span>
                    <span className="block text-primary">Yarışmalarına Katıl</span>
                  </h1>
                  <p className="mx-auto text-base opacity-60 sm:max-w-md lg:text-xl md:max-w-3xl">Ödüllü ve ücretsiz kodlama yarışmalarına katıl. Rozet ve gerçek ödül sahibi ol.</p>
                  <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                    <a href="/contests" className="btn flex items-center px-6 py-3">
                      Yarışmalar
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </KcLayout>
    </Fragment>
  );
}

export default Index;
