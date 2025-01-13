import Navbar from "../Components/Navbar";
import genel from "../assets/Images/genel.png";
import { useState } from "react";
import plus from "../assets/Images/Icons/plus2.png";
import FooterAccordion from "../Components/FooterAccordion";
import Footer from "../Components/Footer";
import ButtonComponent from "../Components/Component/Button";

interface Accordion {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const AccordionItem = ({ id, title, children, className }: Accordion) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`accordion-item ${className} max-w-6xl`}>
      <h2 id={`accordion-collapse-heading-${id}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-2 mb-4 font-medium rtl:text-center text-gray-500 border border-b-0 border-gray-200 ${
            isOpen ? "rounded-t-xl" : ""
          } focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls={`accordion-collapse-body-${id}`}
        >
          <span>{title}</span>
          <img src={plus} alt={plus} />
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${id}`}
        className={`${isOpen ? "" : "hidden"}`}
        aria-labelledby={`accordion-collapse-heading-${id}`}
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
};

const SSS = () => {
  type ButtonType = "genel" | "urunler" | "kargo" | null;
  const [activeButton, setActiveButton] = useState<ButtonType>(null);

  const handleColor = (parametre: ButtonType) => {
    setActiveButton(parametre);
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-row items-center mt-6 mb-5 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <ButtonComponent   type="button"
          className={`w-20 h-12 mr-5  flex justify-center items-center ${
            activeButton === "genel"
              ? "bg-zinc-900 text-white"
              : "bg-beyazE5 text-black"
          }`}
          onClick={() => handleColor("genel")}>Genel</ButtonComponent>
          <ButtonComponent  type="button"
          className={`w-20 h-12 mr-5  flex justify-center items-center ${
            activeButton === "urunler"
              ? "bg-zinc-900 text-white"
              : "bg-beyazE5 text-black"
          }`}
          onClick={() => handleColor("urunler")}>Ürünler</ButtonComponent>
          <ButtonComponent type="button"
          className={`w-20 h-12  flex justify-center items-center ${
            activeButton === "kargo"
              ? "bg-zinc-900 text-white"
              : "bg-beyazE5 text-black"
          }`}
          onClick={() => handleColor("kargo")}>Kargo</ButtonComponent>
      </div>
      <div className="flex flex-row mt-6 mb-5 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <img className="mr-2" src={genel} alt="" />
        <h1 className="">GENEL</h1>
      </div>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="md:bg-beyazE5 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto mt-10"
      >
        <AccordionItem
          id="1"
          title="OJS Nutrition ürünlerinin menşei neresi?"
          className="bg-white mb-2"
        >
          <ul className="text-left bg-white">
            <li>
              <a href="" className="text-gray-400 mb-2 bg-white">
                İletişim
              </a>
            </li>
            <li>
              <a href="" className="text-gray-400 mb-2 bg-white">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="" className="text-gray-400 mb-2 bg-white">
                Sıkça Sorulan Sorular
              </a>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          id="2"
          title="Hangi sertifikalarınız var?"
          className="bg-white"
        >
          <ul className="text-left ">
            <li>
              <a href="" className="text-gray-400">
                PROTEİN
              </a>
            </li>
            <li>
              <a href="" className="text-gray-400">
                VİTAMİNLER
              </a>
            </li>
            <li>
              <a href="" className="text-gray-400">
                SAĞLIK
              </a>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          id="3"
          title="Satılan ürünler garantili midir? Değişim var mı?"
          className="bg-white"
          children={<p>Şunlar Şunlar</p>}
        >
        </AccordionItem>
        <AccordionItem
          id="4"
          className="bg-white"
          title="Satılan ürünler garantili midir? Değişim var mı?"
          children={<p>Şunlar Şunlar</p>}
        ></AccordionItem>
        <AccordionItem
          id="5"
          className="bg-white"
          title="Sipariş verirken sorun yaşıyorum. Ne yapmalıyım?"
          children={<p>Şunlar Şunlar</p>}
        ></AccordionItem>
        <AccordionItem
          id="6"
          className="bg-white"
          title="OJS Nutrition ürünleri nerede satılıyor?"
          children={<p>Şunlar Şunlar</p>}
        ></AccordionItem>
        <AccordionItem
          id="7"
          className="bg-white"
          title="Yüksek proteinli ürünleri kimler kullanabilir?"
          children={<p>Şunlar Şunlar</p>}
        ></AccordionItem>
        <AccordionItem
          id="8"
          className="bg-white"
          title="Taksit seçeneği neden yok?"
          children={<p>Şunlar Şunlar</p>}
        ></AccordionItem>
        <AccordionItem
          id="9"
          className="bg-white"
          title="Siparişimi nasıl iptal edebilirim?"
          children={<p>Şunlar Şunlar</p>}
        ></AccordionItem>
        <AccordionItem
          id="10"
          className="bg-white"
          title="Kapağın altındaki folyo açılmış veya tam yapışmamış gibi duruyor?"
          children={<p>Şunlar Şunlar</p>}
        ></AccordionItem>
        <AccordionItem
          id="11"
          className="bg-white"
          title="Sattığınız ürünler ilaç mıdır?"
          children={<p>Şunlar Şunlar</p>}
        ></AccordionItem>
        <AccordionItem
          id="12"
          className="bg-white"
          title="Siparişimi teslim alırken nelere dikkat etmeliyim ?"
          children={<p>Şunlar Şunlar</p>}
        ></AccordionItem>
        <AccordionItem
          id="13"
          className="bg-white"
          title="Kapıda ödeme hizmetiniz var mı?"
          children={<p>Şunlar Şunlar</p>}
        ></AccordionItem>
        <AccordionItem
          id="14"
          className="bg-white"
          title="Sipariş takibimi nasıl yapabilirim ?"
          children={<p>Şunlar Şunlar</p>}
        ></AccordionItem>
        <AccordionItem
          id="14"
          className="bg-white"
          title="İptal ve İade ettiğim ürünlerin tutarı hesabıma ne zaman aktarılır ?"
          children={<p>Şunlar Şunlar</p>}
        ></AccordionItem>
      </div>
      <form className="px-5 md:max-w-2xl lg:max-w-2xl mx-auto mt-16">
        <p className="mt-5 mb-5 mx-auto text-center">
          Bize aşağıdaki iletişim ulaşabilirsiniz.
        </p>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block bg-beyazF7  border-b1 border-beyazE5 rounded h-12 py-2.5 pl-3 w-full  text-sm "
              placeholder="İsim *"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block bg-beyazF7  border-b1 border-beyazE5 rounded h-12 py-2.5 pl-3 w-full  text-sm "
              placeholder="Soyad"
              required
            />
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block bg-beyazF7  border-b1 border-beyazE5 rounded h-12 py-2.5 pl-3 w-full  text-sm "
            placeholder="E-Posta"
            required
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            className="w-full h-52 "
            name="floating_TextArea"
            id="floating_TextArea"
            placeholder="Mesaj"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-zinc-900 p-4 mb-5 text-white rounded-lg"
          >
            GÖNDER
          </button>
        </div>
      </form>
      <FooterAccordion />
      <Footer />
    </div>
  );
};

export default SSS;
