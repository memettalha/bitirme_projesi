import React from 'react'
import logo from "../assets/Images/LOGO_Siyah.png"
import MyOrders, { myOrders } from './MyOrders'
import questionmark from "../assets/Images/Payment/questionmark.png"

const Payment = () => {
  return (
    <div className='flex flex-col md:flex-row mt-12 mb-24  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto'>
      <div className="w-full md:-1/2 px-5">
        <div className='flex flex-row justify-between mb-12'>
            <div className="">
                <img src={logo} alt={logo} />
            </div>
            <div className='text-right'>
                <p className='text-xl text-[#222222] font-bold'>İsim Soyisim</p>
                <p className='text-sm text-[#8A8B94]'>isimsoyisim@mail.com</p>
            </div>

        </div>
        <div className="phase text-left">
            <div className="phase_1 ">
                <div className='flex flex-row '>
                    <p className='text-xl bg-black rounded-full text-white px-2'>1</p>
                    <p className='text-[22px] ml-10'>Adres</p>
                </div>
                <p className='text-[19px] ml-16 mt-5'>Teslimat Adresi</p>
                <div className='ml-16  pr-5'>
                <div className='relative flex'>
                <div className='flex items-center'>
                <input type="radio" name="" value="" className="absolute top-8 left-4"/>
                <label htmlFor="new_address" className="text-sm absolute top-8 left-12">
                <a href="" className="text-sm absolute top-0 left-64">Düzenle</a>
                Ev</label>
                </div>
                <textarea className="w-full h-[130px] bg-beyazF7  border-b1 border-beyazE5 rounded  px-0  text-sm placeholder-small mt-5" name="" id="" ></textarea>      
                </div>
                    {/* Burda ev ofis tüm adresler maplenecek ayrı ayrı textarea içinde gösterilecek */}
                    <div className='relative flex'>
                <div className='flex items-center'>
                <input type="radio" name="" value="" className="absolute top-10 left-4"/>
                <label htmlFor="new_address" className="text-sm absolute top-10 left-12">
                <a href="" className="text-sm absolute top-0 left-64">Düzenle</a>
                Ofis</label>
                </div>
                <textarea className="w-full  h-[100px] block bg-beyazF7  border-b1 border-beyazE5 rounded  px-0  text-sm placeholder-small  mt-8" name="" id="" ></textarea>
                </div>
                <div className='relative mt-3'>
                <input type="radio" name="" value="" className='absolute top-4 left-4 '/>
                <label htmlFor="new_address" className="text-sm absolute top-4 left-12">
                Yeni Adres</label>
                <textarea className="w-full  h-[80px] block bg-beyazF7  border-b1 border-beyazE5 rounded  px-0  text-sm placeholder-small  mt-8" name="" id=""></textarea>             
                </div>
                <button className='w-full bg-[#222222] text-white h-14 rounded-md  mt-5 mb-5'>Kargo ile Devam Et</button>
                </div>
            </div>
            <div className='phase_2 mt-8 mb-8'>
                <div className='flex flex-row '>
                    <p className='text-xl border-2 border-black rounded-full px-2'>2</p>
                    <p className='text-[22px] ml-10 text-[#8A8B94]'>Kargo</p>
                </div>
            </div>
            <div className='phase_3 mt-8 mb-8'>
                <div className='flex flex-row '>
                    <p className='text-xl border-2 border-black rounded-full px-2'>3</p>
                    <p className='text-[22px] ml-10 text-[#8A8B94]'>Ödeme</p>
                </div>
            </div>
        </div>
      </div>
      {/* İkinci Kısım */}
      <div className='bg-[#F7F7F9] w-full md:-1/2 px-5'>
        {myOrders.map((order) => 
        <div id={order.id} className='flex flex-row mt-16'>
            <div>
                <img className='w-20 h-[74px] ml-8' src={order.photoSrc} alt="" />
            </div>
            <div className="ml-12  mr-8 w-full">
                <div className='flex flex-row justify-between items-end'>
                    <p className='text-sm font-bold'>{order.name}</p>
                    <p>{order.price} TL</p>
                </div>
                <div className='text-xs flex flex-row'>
                    <p>{order.aroma}</p>
                    <span>/</span>
                    <p>{order.weight} G</p>
                </div>
            </div>
        </div>)}
        <div className="aratoplam flex flex-row justify-between items-start mr-8 mt-5 border-t-2 border-b-2 border-[#E5E4E9] py-4">
            <div className='flex flex-row ml-8 items-center  '>
                    <p className='text-[#8A8B94]'>Ara Toplam </p>
                    <img className='w-4 h-4 ml-4' src={questionmark} alt={questionmark}/>
            </div>
            <div>
                <p>1650 TL</p>
            </div>
        </div>
        <div className="toplam flex flex-row justify-between items-center mr-8 ml-8 mt-5">
            <p className='text-lg font-bold'>Toplam</p>
            <p className='font-bold'>1556 TL</p>
        </div>
      </div>
    </div>
  )
}

export default Payment
