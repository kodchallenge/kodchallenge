import Landing from "@/components/landing";
import { KodMainLayout } from "@/components/layouts";
import { GitHubLogoIcon } from "@kod/icons";
import { cn, Button } from "@kod/ui";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const editorFeatures = [
    { title: "Türkçe Sorular", description: "Sorular Türkçe olarak hazırlanmıştır.", icon: "🇹🇷" },
    { title: "Programlama Dilleri", description: "Soruları birden fazla dilde çözebilirsiniz.", icon: "👨‍💻" },
    { title: "Editor", description: "Özelleştirilebilir editör, hızlı adapte olma, esneklik", icon: "📝" },
  ]
  return (
    <KodMainLayout>
      <main>
        <section className={cn("relative h-[calc(100vh-80px)] md:py-0 py-36 overflow-hidden flex items-center ")}>
          <div className="absolute -z-[1] inset-0 bg-[url('/assets/images/home-bg.png')] bg-center bg-no-repeat bg-cover opacity-10"></div>
          <div className='container relative'>
            <div className="w-full mx-auto text-center md:text-center">
              {/* <h3 className="px-0 mb-6 text-lg md:text-xl">Öğrenirken eğlenmeye hazır mısın? 🎉</h3> */}
              <h1 className="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">
                <span className="w-full text-primary lg:inline">Türkçe</span> Programlama Platformu
                <br />
              </h1>
              <p className="px-0 mb-6 text-lg opacity-70 md:text-xl lg:px-24 md:container">
                Ücretsiz ve Türkçe sorular ile programlama yeteneğini geliştir.
              </p>
              <Link href={"/problems"}>
                <Button>👉 Problemler</Button>
              </Link>
              <div className="overflow-hidden after:content-[''] after:absolute after:h-14 after:w-14 after:bg-white/20 after:-top-[40px] after:start-[30%] after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

              <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-white/20 after:top-[80%] after:end-[20%] after:rounded-full after:animate-ping"></div>
            </div>
          </div>
        </section>

        <section className="py-6 border-t border-b border-gray-700">
          <div className="container relative text-center">
            <a href='https://github.com/kodchallenge/kodchallenge' target='_blank' className='hover:underline hover:text-blue-400'>
              <label className='flex justify-center items-center gap-2 cursor-pointer'>
                <span>
                  Açık Kaynak Kodlu
                </span>
                <GitHubLogoIcon />
              </label>
            </a>
          </div>
        </section>

        <section className="relative md:py-24 py-16 overflow-hidden">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">KodChallenge Nedir?</h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              KodChallenge, yazılım geliştirme alanında kendini geliştirmek isteyenler için oluşturulmuş bir platformdur.
            </p>
          </div>
          <div className="container relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
              <div className="relative">
                <img src="assets/home-editor-preview.png" className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-secondary/5 bottom-0 start-0 rotate-45 -z-100 rounded-3xl"></div>
              </div>

              <div className="lg:ms-8">
                <div className="grid grid-cols-1 gap-[30px]">
                  {editorFeatures.map((feature, index) => (
                    <div key={index} className="group flex items-center relative overflow-hidden p-6 rounded-md shadow shadow-gray-800 bg-slate-800 hover:bg-primary/50 transition-all duration-500 ease-in-out">
                      <span className="group-hover:scale-110 text-5xl transition-all duration-500 ease-in-out">
                        {feature.icon}
                      </span>
                      <div className="flex-1 ms-3">
                        <h5 className="group-hover:text-white text-xl font-semibold transition-all duration-500 ease-in-out">{feature.title}</h5>
                        <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-2">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </KodMainLayout>
  );
}
