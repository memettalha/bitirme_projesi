import sertifika1 from "../assets/Images/Sertifikalarımız/sertifika1.png"
import sertifika2 from "../assets/Images/Sertifikalarımız/sertifika2.png"
import sertifika3 from "../assets/Images/Sertifikalarımız/sertifika3.png"
import sertifika4 from "../assets/Images/Sertifikalarımız/sertifika4.png"
import sertifika5 from "../assets/Images/Sertifikalarımız/sertifika5.png"
import sertifika6 from "../assets/Images/Sertifikalarımız/sertifika6.png"

interface certifica {
    id:number,
    src:string,
    alt:string
}

const certificated:certifica[] = [
    {id:1, src:sertifika1, alt:sertifika1},
    {id:2, src:sertifika2, alt:sertifika2},
    {id:3, src:sertifika3, alt:sertifika3},
    {id:4, src:sertifika4, alt:sertifika4},
    {id:5, src:sertifika5, alt:sertifika5},
    {id:6, src:sertifika6, alt:sertifika6},
]

interface cstmr {
    name:string,
    title:string,
    star:string,
    comment:string,
    verified:string,
    about:string,
    date:Date,
}

const customers:cstmr[]= [
    {
        name:"Mustafa Ü",
        title:"L carnitine",
        star:"⭐⭐⭐⭐⭐",
        comment:"Gayet şeffaf ve güzel kargoyla geldi çok memnun kaldım",
        verified:"DOĞRULANMIŞ MÜŞTERİ",
        about:"L-CARNITINE",
        date:new Date("2024-06-05")
    },
    {
        name:"Erol Ş",
        title:"Muhteşem tad",
        star:"⭐⭐⭐⭐⭐",
        comment:"Tadı çok iyi. Faydasını da gördüm",
        verified:"DOĞRULANMIŞ MÜŞTERİ",
        about:"CREATINE LIMITED EDITION",
        date:new Date("2024-06-05")
    },
    {
        name:"Erol Ş",
        title:"Muhteşem tad",
        star:"⭐⭐⭐⭐⭐",
        comment:"Vitaminlerden çok memnunum tekrar sipariş vereceğim",
        verified:"DOĞRULANMIŞ MÜŞTERİ",
        about:"GÜNLÜK VİTAMİN PAKETİ",
        date:new Date("2024-06-05")
    },
    {
        name:"Bahadır Y",
        title:"Muhteşem tad",
        star:"⭐⭐⭐⭐✰",
        comment:"Antreman öncesi isteksizliği yorgunluğu ve gideriyor ve saglam bi antreman yapmanız konusunda istek sagliyor. Muthıs terleme, benim biraz kulaklarım yandı ve alnım kasındı ama bu yan etkilerin normal oldugunu okudum. bilmiyorum.",
        verified:"DOĞRULANMIŞ MÜŞTERİ",
        about:"PRE-WORKOUT SUPREME",
        date:new Date("2024-06-05")
    },
    {
        name:"Bahadır Y",
        title:"Muhteşem tad",
        star:"⭐⭐⭐⭐✰",
        comment:"Antreman öncesi isteksizliği yorgunluğu ve gideriyor ve saglam bi antreman yapmanız konusunda istek sagliyor. Muthıs terleme, benim biraz kulaklarım yandı ve alnım kasındı ama bu yan etkilerin normal oldugunu okudum. bilmiyorum.",
        verified:"DOĞRULANMIŞ MÜŞTERİ",
        about:"PRE-WORKOUT SUPREME",
        date:new Date("2024-06-05")
    },
    {
        name:"Bahadır Y",
        title:"Muhteşem tad",
        star:"⭐⭐⭐⭐✰",
        comment:"Antreman öncesi isteksizliği yorgunluğu ve gideriyor ve saglam bi antreman yapmanız konusunda istek sagliyor. Muthıs terleme, benim biraz kulaklarım yandı ve alnım kasındı ama bu yan etkilerin normal oldugunu okudum. bilmiyorum.",
        verified:"DOĞRULANMIŞ MÜŞTERİ",
        about:"PRE-WORKOUT SUPREME",
        date:new Date("2024-06-05")
    },
    {
        name:"Bahadır Y",
        title:"Muhteşem tad",
        star:"⭐⭐⭐⭐✰",
        comment:"Antreman öncesi isteksizliği yorgunluğu ve gideriyor ve saglam bi antreman yapmanız konusunda istek sagliyor. Muthıs terleme, benim biraz kulaklarım yandı ve alnım kasındı ama bu yan etkilerin normal oldugunu okudum. bilmiyorum.",
        verified:"DOĞRULANMIŞ MÜŞTERİ",
        about:"PRE-WORKOUT SUPREME",
        date:new Date("2024-06-05")
    },
    {
        name:"Bahadır Y",
        title:"Muhteşem tad",
        star:"⭐⭐⭐⭐✰",
        comment:"Antreman öncesi isteksizliği yorgunluğu ve gideriyor ve saglam bi antreman yapmanız konusunda istek sagliyor. Muthıs terleme, benim biraz kulaklarım yandı ve alnım kasındı ama bu yan etkilerin normal oldugunu okudum. bilmiyorum.",
        verified:"DOĞRULANMIŞ MÜŞTERİ",
        about:"PRE-WORKOUT SUPREME",
        date:new Date("2024-06-05")
    },
    {
        name:"Bahadır Y",
        title:"Muhteşem tad",
        star:"⭐⭐⭐⭐✰",
        comment:"Antreman öncesi isteksizliği yorgunluğu ve gideriyor ve saglam bi antreman yapmanız konusunda istek sagliyor. Muthıs terleme, benim biraz kulaklarım yandı ve alnım kasındı ama bu yan etkilerin normal oldugunu okudum. bilmiyorum.",
        verified:"DOĞRULANMIŞ MÜŞTERİ",
        about:"PRE-WORKOUT SUPREME",
        date:new Date("2024-06-05")
    },
    {
        name:"Bahadır Y",
        title:"Muhteşem tad",
        star:"⭐⭐⭐⭐✰",
        comment:"Antreman öncesi isteksizliği yorgunluğu ve gideriyor ve saglam bi antreman yapmanız konusunda istek sagliyor. Muthıs terleme, benim biraz kulaklarım yandı ve alnım kasındı ama bu yan etkilerin normal oldugunu okudum. bilmiyorum.",
        verified:"DOĞRULANMIŞ MÜŞTERİ",
        about:"PRE-WORKOUT SUPREME",
        date:new Date("2024-06-05")
    },
]
   

const AboutContent = () => {
  return (
    <div className="mx-auto md:max-w-3xl ml-5 mr-5 md:ml-10 md:mr-10 lg:max-w-4xl lg:ml-16 lg:mr-16 xl:max-w-6xl xl:mx-auto">
      <h1 className="text-3xl text-left font-bold mt-5 leading-10 ">Sağlıklı ve Fit Yaşamayı Zevkli ve Kolay Hale Getirmek İçin Varız</h1>
      <div className='text-left leading-6 '>
      <p className='mt-3 mb-6'>2016 yılından beri sporcu gıdaları, takviye edici gıdalar ve fonksiyonel gıdaları üreten bir firma olarak;
         müşterilerimize en kaliteli, lezzetli, tüketilmesi kolay ürünleri sunuyoruz.</p>
      <p className='mt-6'>Müşteri memnuniyeti ve sağlığı her zaman önceliğimiz olmuştur. Ürünlerimizde, yüksek kalite standartlarına bağlı 
        olarak,  sporcuların ve sağlıklı yaşam tutkunlarının ihtiyaçlarına yönelik besleyici çözümler sunuyoruz. Ürün yelpazemizdeki protein
           tozları, aminoasitler, vitamin ve mineral takviyeleri ile spor performansınızı d"esteklemek için ideal besin 
           değerlerini sunuyoruz.</p>   
           
        <p className="mt-6">Sizin için sadece en iyisinin yeterli olduğunu biliyoruz. Bu nedenle, inovasyon,
            kalite, sağlık ve güvenlik ilkelerimizi korurken, sürekli olarak ürünlerimizi geliştirmeye ve yenilikçi 
            beslenme çözümleri sunmaya devam ediyoruz.</p>
        <p className="mt-6">Sporcu gıdaları konusunda lider bir marka olarak, sizin sağlığınıza ve performansınıza değer veriyoruz.
             Siz de spor performansınızı en üst seviyeye çıkarmak ve sağlıklı yaşam tarzınızı desteklemek
             istiyorsanız, bize katılın ve en besleyici çözümlerimizle tanışın. Sağlıklı ve aktif bir yaşam için biz her zaman yanınızdayız.
             </p>
        <h1 className="text-3xl text-left font-bold mt-6 b-5 md:mb-2">1.000.000+ den Fazla Mutlu Müşteri</h1>
        <p>Sanatçılardan profesyonel sporculara, doktordan öğrencilere hayatın her alanında sağlıklı 
            yaşamı ve beslenmeyi hedefleyen 1.000.000'den fazla kişiye ulaştık.</p>
      </div>
      <h1 className="text-3xl text-left font-bold mb-2 mt-7 ">Sertifikalarımız</h1>
      <div className='flex flex-wrap max-w-sm md:max-w-2xl '>
        {certificated.map((certifica) => <div className='flex pr-1 mb-3'>
            <img className="h-24 w-24" src={certifica.src} alt={certifica.alt}/>
        </div>)}
      </div>
      <div className="flex flex-row mt-20 border-b-2 border-t-2 py-2">
        <p className='text-left w-7 h-7 mr-24'>⭐⭐⭐⭐⭐</p>
        <p>196900 Yorum</p>
      </div>
      <div className='text-left'>
      <button className='rounded-full text-xs h-12 text-white px-10 mt-4' style={{background: "linear-gradient(82.82deg, #387EC7 0%, #1F23AA 100%"
        }}>ÜRÜN İNCELEMELERİ</button>
        
      </div>
       <div className=''>
        {customers.map((customer,index) =>
        <div key={index} className="mt-5 bg-beyazF7 py-5 px-10 relative rounded-xl">
            <div className='flex flex-col md:flex md:flex-row text-left ' >
                <div className="flex flex-col md:flex md:flex-row w-full  ">
                    <p className='mr-5'>{customer.star}</p>
                    <p className='mr-5 text-lg font-bold w-32'>{customer.name}</p>
                    <p className='mr-24 text-fs9 h-6 flex items-center text-yesil bg-strMavi rounded-full absolute px-3 top-5 md:top-0 right-0 md:relative font-semibold'>{customer.verified}</p>
                </div>
                <div className='text-left md:text-right  font-bold'>
                    <p>{customer.date.toLocaleDateString("tr")}</p>
                </div>
            </div>
            <div className='text-left'>
                <p className='font-bold text-xl'>{customer.title}</p>
                <p className="text-fs15">{customer.comment}</p>
                <p className='text-fs9 flex justify-center  pt-3'>Hakkında {customer.about}</p>
            </div>
        </div>
        )}
       </div>
    </div>
  )
}

export default AboutContent
