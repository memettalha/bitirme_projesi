import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FooterAccordion from "../Components/FooterAccordion";
import EskiSiparis from "../Components/EskiSiparis";
import Hesap from "../assets/Images/Hesabım/HesapBilgilerim.png";
import Siparis from "../assets/Images/Hesabım/Siparislerim.png";
import Adres from "../assets/Images/Hesabım/Adress.png";
import ButtonComponent from "../Components/Component/Button";

const OldOrder = () => {
  return (
    <div>
      <Navbar />
      <nav className="flex flex-col md:grid md:grid-cols-8 mx-5 md:mx-5 lg:mx-auto lg:max-w-4xl xl:max-w-6xl">
        <div className=" flex flex-col col-span-2 ">
          <h1 className=" text-4xl text-black text-left mb-5 mt-5">Hesabım</h1>
          <div className="flex flex-row md:flex md:flex-col">
            <ButtonComponent className={"py-2 flex flex-row w-60 mb-3"}>
              <img src={Hesap} className="mr-2 w-6 h-6" alt="HESAP" />
              <span>Hesap Bilgilerim</span>
            </ButtonComponent>
            <ButtonComponent className={"py-2 flex flex-row w-60 mb-3"}>
              <img src={Siparis} className="mr-2 w-6 h-6" alt="" /> Siparişlerim
            </ButtonComponent>
            <ButtonComponent className={"py-2 flex flex-row w-60 mb-3"}>
              <img src={Siparis} className="mr-2 w-6 h-6" alt="" /> Adreslerim
            </ButtonComponent>
          </div>
        </div>
        <div className="col-span-6 mt-5  lg:w-full">
          <EskiSiparis />
        </div>
      </nav>
      <Footer />
      <FooterAccordion />
    </div>
  );
};

export default OldOrder;
