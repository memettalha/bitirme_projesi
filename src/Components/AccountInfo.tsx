import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';




const AccountInfo = () => {
    const [phone,setPhone] = useState("")
  return (
    <div>
      <form className="md:w-9/12 md:ml-20  lg:max-w-6xl lg:ml-16 ">
      <h1 className='font-bold mr-auto flex justify-start'>Hesap Bilgilerim</h1>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full  group">
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
            className="block py-2.5 pl-5 w-full text-sm text-gray-900 rounded-md h-12 border-1 border-beyazE5 bg-beyazE5"
            required
            placeholder='İsminiz'
          />
        </div>
        <div className="relative z-0 w-full group">
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
            className="block py-2.5 pl-5 w-full text-sm text-gray-900 rounded-md h-12 border-1 border-beyazE5 bg-beyazE5"
            placeholder="Telefon"
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
      <div className="relative z-0 w-full  group">
        <label
            htmlFor="floating_email"
            className="float-left mt-3 mb-2"            
            >
            *Email address
        </label>
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-5 w-full mt-5 text-sm text-gray-900 rounded-md border-1 border-beyazE5 bg-beyazE5"
          placeholder="E-mail "
          required
        />
      </div>

     
     
      <button
        type="submit"
        className="text-white mt-5 mb-36 float-right bg-black font-medium rounded-md text-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Kaydet
      </button>
    </form>
    </div>
  )
}

export default AccountInfo
