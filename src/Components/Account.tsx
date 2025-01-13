import { useState } from "react";
import AccountInfo from "./AccountInfo";
import MyOrders from "./MyOrders";
import MyAdress from "./MyAdress";
import Hesap from "../assets/Images/Hesabım/HesapBilgilerim.png"
import Siparis from "../assets/Images/Hesabım/Siparislerim.png"
import Adres from "../assets/Images/Hesabım/Adress.png"
import ButtonComponent from "./Component/Button";

type Page = "hesapBilgilerim" | "Siparislerim" | "Adreslerim";



const Account = () => {
  const [isOpen, SetIsOpen] = useState<Page>("hesapBilgilerim")

const ChangePage = () => {
    switch(isOpen){
        case "hesapBilgilerim":
        return <AccountInfo/>
        case "Siparislerim":
        return <MyOrders/>
        case "Adreslerim":
        return <MyAdress/>
        default:
        return <AccountInfo/>
    } 
}

   
  return (
    <div>
      <nav className=" flex flex-col md:grid md:grid-cols-8 mx-5 md:mx-5 lg:mx-auto lg:max-w-4xl xl:max-w-6xl">
        <div className=" flex flex-col col-span-2 ">
            <h1 className=" text-4xl text-black text-left mb-5 mt-5">Hesabım</h1>
            <div className="flex flex-row  md:flex md:flex-col ">
                <ButtonComponent onClick={() => SetIsOpen("hesapBilgilerim")} 
                 className={"py-2 flex flex-row w-60 mb-3 mr-5 md:mr-0"} ><img src={Hesap} className="mr-2 w-6 h-6"  alt="HESAP"/> <span>Hesap Bilgilerim</span></ButtonComponent>
                <ButtonComponent 
                onClick={() => SetIsOpen("Siparislerim")}
                className={"py-2 flex flex-row w-60 mb-3"}>
                  <img src={Siparis} className="mr-2 w-6 h-6" alt=""/> Siparişlerim
                </ButtonComponent>
                <ButtonComponent
                onClick={() => SetIsOpen("Adreslerim")}
                className="py-2 flex flex-row w-60 mb-3">
                  <img src={Adres} alt=""  className="mr-2 w-6 h-6"/>Adreslerim
                </ButtonComponent>
            </div>
        </div>
        <div className="col-span-6 mt-5">
        {ChangePage()}
      </div>
        
      </nav>
    </div>
  )
}

export default Account
