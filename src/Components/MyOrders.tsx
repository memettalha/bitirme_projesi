import React from "react";
import Gunluk from "../assets/Images/Betseller/Gunlukvitamin.png";
import Creatine from "../assets/Images/Betseller/creatine.png";
import Gida from "../assets/Images/Categories/Gida.png";
import Saglik from "../assets/Images/Categories/saglik.png";
import { nanoid } from "nanoid";
import ButtonComponent from "./Component/Button";

interface Siparis {
  name: string;
  photoSrc: string;
  delivery: string;
  orderDate: Date;
  orderNumber: string;
  id: string;
  price: number;
  aroma: string;
  weight: number;
}

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const myOrders: Siparis[] = [
  {
    id: nanoid(),
    name: "DEEP SLEEP",
    photoSrc: Gunluk,
    delivery: "Teslim edildi",
    orderDate: new Date("2023-03-31"),
    orderNumber: "427795",
    price: 1000,
    aroma: "Çilekli",
    weight: 400,
  },
  {
    id: nanoid(),
    name: "MELATONIN",
    photoSrc: Creatine,
    delivery: "Teslim edildi",
    orderDate: new Date("2022-12-14"),
    orderNumber: "290405",
    price: 300,
    aroma: "Meyveli",
    weight: 500,
  },
  {
    id: nanoid(),
    name: "GAMER HACK - DETOX PAKETİ",
    photoSrc: Gida,
    delivery: "Teslim edildi",
    orderDate: new Date("2022-11-19"),
    orderNumber: "255564",
    price: 500,
    aroma: "Armutlu",
    weight: 300,
  },
  {
    id: nanoid(),
    name: "CREAM OF RICE",
    photoSrc: Saglik,
    delivery: "Teslim edildi",
    orderDate: new Date("2022-10-01"),
    orderNumber: "190462",
    price: 750,
    aroma: "Bergamotlu",
    weight: 100,
  },
];
export { myOrders };

const totalOrders = myOrders.length;

const MyOrders = () => {
  return (
    <div className="w-full mb-36 md:ml-20">
      <h1 className="font-bold mb-5">Siparişlerim({totalOrders})</h1>
      {myOrders.map((order) => (
        <div
          key={order.id}
          className="flex flex-col md:flex md:flex-row justify-between border-b-2 border-black mb-4"
        >
          <div className="flex ">
            <div className="">
              <img src={order.photoSrc} alt="" className="w-12 h-12 mt-2" />
            </div>
            <div className="text-left ml-10 text-fs13 pb-4 ">
              <p className="text-lightgreen ">{order.delivery}</p>
              <p className="font-bold">{order.name}</p>
              <p>{formatDate(order.orderDate)} Tarihinde Sipariş Verildi.</p>
              <p>{order.orderNumber} numaralı sipariş</p>
            </div>
          </div>
          <div className="flex items-center md:mr-12 lg:mr-24 xl:mr-44 ml-auto">
            <ButtonComponent
              type={"button"}
              className={
                "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              }
            >
              Detayı Görüntüle
            </ButtonComponent>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
