import React from 'react'

const infos = [
    { title: "Yarışmalar Nedir?", description: "Belli bir süre içerisinde size verilen algoritma sorularını çözerek puan kazanabileceğiniz yarışmalardır.", icon: "🇹" },
    { title: "Ödül", description: "Yarışmalar sonunda en çok puanı toplayan kişiler ödül kazanır. Ödüller, yarışmaya göre değişkenlik gösterir.", icon: "🏆" },
    { title: "Açık Platform", description: "Dileyen herkes ücretsiz bir şekilde yarışma oluşturabilir ve katılabilir. Kendi algoritmalarınızı tasarlayın veya diğer kullanıcılarımızın hazırladığı zorlu sorunları çözerek becerilerinizi test edin.", icon: "🌐" },
    { title: "Katılım Şartları", description: "Yarışmalara katılmak için sadece platformumuza üye olmanız yeterli! Yarışmaların kurallarını ve şartlarını yarışmayı düzenleyen kişinin belirlediğini unutmayın.", icon: "📝" },
]

const Landing = () => {
    return (
        <div>
            <div className="container relative md:mt-24 mt-16 my-32">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="md:text-4xl text-2xl md:leading-normal leading-normal font-semibold">Yarışmalar 🚀</h3>
                    <h6 className='font-extrabold text-xs text-primary'>YAKINDA</h6>
                    <p className="mt-6 text-slate-400 max-w-xl mx-auto">
                        Algoritmik becerilerinizi geliştirin, puan kazanın ve ödüller kazanma şansı yakalayın!
                    </p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[100px]">
                    {infos.map((info, index) => (
                        <div key={index} className="flex gap-8">
                            <div className="w-20 h-20 bg-primary/5 text-primary  rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                {info.icon}
                                {/* <i className="uil uil-question-circle"></i> */}
                            </div>
                            <div className="flex-1">
                                <h5 className="mb-2 text-xl font-semibold">{info.title}</h5>
                                <p className="text-slate-400">
                                    {info.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Landing