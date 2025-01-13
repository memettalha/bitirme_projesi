import React from "react";
import ButtonComponent from "./Component/Button";

const Form = () => {
  const handleSubmit = () => {
    console.log("Form gönderildi");
  };
  return (
    <div>
      <form className="md:max-w-2xl lg:max-w-3xl mx-auto mt-12 px-5 ">
        <h1 className="text-5xl text-bold">Bize Ulaşın</h1>
        <p className="mt-5 mb-5 text-left">
          Bize aşağıdaki iletişim ulaşabilirsiniz.
        </p>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0  mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block bg-beyazF7  border-b1 border-beyazE5 rounded  px-0 w-full h-12 text-sm "
              placeholder="İsim *"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block bg-beyazF7  border-b1 border-beyazE5 rounded  px-0 w-full h-12 text-sm "
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
            className="block bg-beyazF7  border-b1 border-beyazE5 rounded  px-0 w-full h-12 text-sm "
            placeholder="E-Posta"
            required
          />
        </div>
        <div>
          <textarea
            className="w-full h-[180px] block bg-beyazF7  border-b1 border-beyazE5 rounded  px-0  text-sm placeholder-small"
            name=""
            id=""
            placeholder="Mesaj"
          ></textarea>
        </div>
        <div className="flex justify-center mt-3">
          <ButtonComponent
            onClick={handleSubmit}
            className="bg-zinc-900 p-3 mt-2 mb-6 text-white rounded-md"
            type="submit"
          >
            GÖNDER
          </ButtonComponent>
        </div>
        <div className="mb-24">
          <p className="text-xs mb-5 font-medium text-center">
            *Aynı gün kargo hafta içi 16:00, Cumartesi ise 11:00' a kadar
            verilen siparişler icin geçerlidir.
            <br /> Siparişler kargoya verilince e-posta ve sms ile bilgilendirme
            yapılır.
          </p>
          <p className="text-xs font-medium text-center">
            Telefon ile 0850 303 29 89 numarasını arayarak da bizlere sesli
            mesaj bırakabilirsiniz . Sesli mesajlarınıza hafta içi saat <br />{" "}
            09:00-17:00 arasında dönüş sağlanmaktadır.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
