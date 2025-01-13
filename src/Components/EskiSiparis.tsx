import React from 'react'
import melatonin from "../assets/Images/Old Order/bromelain.png"
import bromelain from "../assets/Images/Old Order/bromelain.png"
import Cream from "../assets/Images/Betseller/CreamofRice.png"
import { nanoid } from 'nanoid'



const addressUrl = "https://www.google.com/maps/place/ONLYJS+TEKNOLOJ%C4%B0+A.%C5%9E/@40.9993483,29.0965699,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabbd1e4fd28f7:0xee8b200b0bbcfe0a!8m2!3d40.9993483!4d29.0965699!16s%2Fg%2F11l2_ck48g?entry=ttu"

interface siparis {
    name:string,
    total:number,
    price:number,
    size:string,
    photoSrc:string,
    id:string
}
const carts = [ {
    name:"Melatonin",
    total:2,
    price:62,
    size:"1 Kutu",
    photoSrc:melatonin,
    id:nanoid()
}, {
    name:"Günlük Vitamin Paketi",
    total:1,
    price:449,
    size:"1 Paket x 2 Adet",
    photoSrc:bromelain,
    id:nanoid()

},
{
    name:"BROMELAIN",
    total:1,
    price:197,
    size:"1 Kutu X 2 Adet",
    photoSrc:Cream,
    id:nanoid()

},
]

const EskiSiparis = () => {
  return (
    <div className='mt-6 mb-16'>
           <div className='text-left pb-5 mb-5'>
            <h1 className='text-lg font-bold '>Sipariş Teslim Edildi</h1>
            <p className='text-fs13'>14 Aralık 2022 tarihinde sipariş verildi -  290405 numaralı sipariş</p>
        </div>
      <div className='flex flex-col lg:flex lg:flex-row lg:space-x-24 '>
        <div  className='lg:w-4/6'>
            <div className='border-y-[1px]  border-black  py-8 '>
              {carts.map((cart) => 
                <div key={cart.id} className='flex flex-row mb-5 '>
                  <div className=''>
                    <img className='object-cover w-[100px] h-[100px] md:w-[130px] md:h-[130px] lg:w-44 ' src={cart.photoSrc} alt={cart.name}/>
                  </div>
                  <div className='text-left mt-5 ml-12'>
                      <h1 className='font-bold'>{cart.name} x {cart.total}</h1>
                      <h1>{cart.price} TL</h1>
                      <h1>Boyut: {cart.size}</h1>
                  </div>
                </div>
              )}
            </div>
            <div className='flex flex-row mt-3 mb-3'>
              <h1 className='mr-4'>hepsiJet</h1>
              <h1>Takip Numarası: HJ2192904051</h1>
            </div>

        </div>
        <div className='text-left mt-20 lg:mt-0 lg:w-2/6'>
          <div className='text-left pt-4 pb-2  border-y-[1px] border-black  '>
            <h1 className='font-bold text-sm'>Adres</h1>
            <p className='text-sm '>İsim Soyisim</p>
            <a href={addressUrl} target="_blank" rel="noopener noreferrer" className='text-fs13 underline'>Barbaros, Nidakule Ataşehir Batı, Begonya Sk. No:1/2, 34746  Ataşehir/İstanbul</a>
          </div>
          <div className='pt-4 pb-2  border-b-[1px] border-black '>
            <h1 className='font-bold text-sm mb-2 '>Ödeme</h1>
            <p>Kredi Kartı - 770 TL</p>
            <p>**** **** **** **61</p>
          </div>
          <div className='pt-4 pb-2  border-b-[1px] border-black text-sm'>
            <p className='font-bold '>Özet</p>
            <div className='flex flex-row justify-between leading-8	'>
              <p>Ara Toplam</p>
              <p>856 TL</p>
            </div>
            <div className='flex flex-row justify-between leading-8	'>
              <p>Kargo</p>
              <p>0 TL</p>
            </div>
            <div className='flex flex-row justify-between leading-8	'>
              <p>Toplam Vergi</p>
              <p>8 TL</p>
            </div>
            <div className='flex flex-row justify-between leading-8	'>
              <p>Yüzde 10 İndirim!</p>
              <p>-86 TL</p>
            </div>
            <div className='flex flex-row justify-between leading-8	'>
              <p>Toplam</p>
              <p>770 TL</p>
            </div>
          </div>
          <div className='pt-4 pb-2  border-b-[1px] border-black text-sm '>
              <p className='font-bold leading-8'>Yardıma mı ihtiyacın var?</p>
              <a href="" className='text-sm leading-8 block'>Sıkça Sorulan Sorular</a>
              <a href="" className='text-sm leading-8 block'>Satış Sözleşmesi</a>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default EskiSiparis
