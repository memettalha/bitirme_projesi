import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import ButtonComponent from './Component/Button'

const MyAdress = () => {
    const [phone,setPhone] = useState("")

  return (
    <div>
      
      <form className="md:w-9/12 md:ml-20  lg:max-w-6xl lg:ml-16 ">
      <h1 className='font-bold mr-auto flex justify-start mb-3'>Adres Oluştur</h1>
      <p className="border-2 border-mavi bg-slate-300 h-14 flex items-center pl-5 rounded-md  ">Kayıtlı bir adresiniz yok.Lütfen aşağıdaki kısımdan adres oluşturunuz.</p>
      <div className="relative z-0 w-1/2  mb-5 group">
            <label
                htmlFor="floating_add"
                className="float-left mt-3 mb-2"
            >
                *Adres Başlığı
          </label>
          <input
            type="text"
            name="floating_add"
            id="floating_add"
            className="block py-2.5 pl-3 w-full text-sm text-gray-900 rounded-md h-12 border-1 border-beyazE5 bg-beyazE5"
            required
            placeholder='ev iş vb'
          />
        </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
            <label
                htmlFor="floating_first_name"
                className="float-left mt-3 mb-2"
            >
                *Ad
          </label>
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 pl-3 w-full text-sm text-gray-900 rounded-md h-12 border-1 border-beyazE5 bg-beyazE5"
            required
            placeholder='İsminiz'
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <label
                htmlFor="floating_last_name"
                className="float-left mt-3 mb-2"
            >
               *Soyad
          </label>
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className="block py-2.5 pl-3 w-full text-sm text-gray-900 rounded-md h-12 border-1 border-beyazE5 bg-beyazE5"
            placeholder="Soyadınız"
            required
          />
       
        </div>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <label
            htmlFor="floating_address"
            className="float-left mt-3 mb-2"            
            >
            *Adres
        </label>
        <input
          type="text"
          name="floating_address"
          id="floating_address"
          className="block py-2.5 pl-3 w-full text-sm text-gray-900 rounded-md border-1 border-beyazE5 bg-beyazE5"
          placeholder=""
          required
        />
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
            <label
                htmlFor="floating_city"
                className="float-left mt-3 mb-2"
            >
                *Şehir
          </label>
          <input
            type="text"
            name="floating_city"
            id="floating_city"
            className="block py-2.5 pl-3 w-full text-sm text-gray-900 rounded-md h-12 border-1 border-beyazE5 bg-beyazE5"
            required
            placeholder='Şehriniz'
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <label
                htmlFor="floating_hometown"
                className="float-left mt-3 mb-2"
            >
               *İlçe
          </label>
          <input
            type="text"
            name="floating_hometown"
            id="floating_hometown"
            className="block py-2.5 pl-3 w-full text-sm text-gray-900 rounded-md h-12 border-1 border-beyazE5 bg-beyazE5"
            placeholder="İlçeniz"
            required
          />
       
        </div>
      </div>
      <div className="phone-input-container">
      <label
        htmlFor="floating_phone"
        className='float-left mt-3 mb-2 z-100'
      >
        Telefon
      </label>
      <PhoneInput
          country={'tr'}
          value={phone}
          onChange={phone => setPhone(phone)} 
          containerStyle={{ width: '100%' }}
          inputStyle={{ width: '100%', paddingLeft: '48px', border: "1px solid #E5E5E5", background: "#E7E7E7", height: "48px" }} // Bayrağı yerleştirmek için paddingLeft ayarı
          buttonStyle={{ border: "none", background: "transparent", position: 'absolute', top: '20px', left: '0', height: '100%', padding: '0 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          dropdownStyle={{ top: '48px', position: 'absolute' }}
        />
    </div>
     
      <ButtonComponent 
      type={"submit"}
      className={"mt-5 mb-36 text-white float-right bg-black font-medium rounded-lg text-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}
      >Kaydet</ButtonComponent>
    </form>
    </div>
  )
}

export default MyAdress
