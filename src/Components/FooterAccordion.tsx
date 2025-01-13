import React, { useState } from "react";
import plus from "../assets/Images/Footer/plus3.png";
import beyazLogo from "../assets/Images/LOGO_Beyaz.png";
import { Link } from "react-router-dom";

interface Acc {
  id: string;
  title: string;
  children?: JSX.Element | string;
}

export const AccordionItem = ({ id, title, children }: Acc) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="block md:hidden px-5">
      <h2 id={`accordion-collapse-heading-${id}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-3 font-medium rtl:text-center  ${
            isOpen ? "rounded-t-xl" : ""
          }  gap-3`}
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls={`accordion-collapse-body-${id}`}
          style={{ background: "#222222", color: "#999999" }}
        >
          <img src={plus} alt={plus} className="" />
          <span className="mr-auto">{title}</span>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${id}`}
        className={`${isOpen ? "" : "hidden"} `}
        aria-labelledby={`accordion-collapse-heading-${id}`}
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      style={{ background: "#222222" }}
    >
      <img className="ml-3 mb-4  md:hidden" src={beyazLogo} alt="" />
      <AccordionItem id="1" title="OJS NUTRITION">
        <ul className="text-left" style={{ background: "#222222" }}>
          <li>
            <Link to="/Contact" className="text-gray-400">
              İletişim
            </Link>
          </li>
          <li>
            <Link to="/About" className="text-gray-400">
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link to="/SSS" className="text-gray-400">
              Sıkça Sorulan Sorular
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              KVKK
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              Çalışma İlkelerimiz
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              Satış Sözleşmesi
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              Garanti ve İade Koşulları
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              Gerçek Müşteri Yorumları
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              Blog
            </Link>
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem id="2" title="KATEGORİLER">
        <ul className="text-left ">
          <li>
            <Link to="" className="text-gray-400">
              PROTEİN
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              VİTAMİNLER
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              SAĞLIK
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              SPOR GIDALARI
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              GIDA
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              TÜM ÜRÜNLER
            </Link>
          </li>
        </ul>

        
      </AccordionItem>
      <AccordionItem id="3" title="POPÜLER ÜRÜNLER">
        <ul className="text-left">
          <li>
            <Link to="" className="text-gray-400">
              Whey Protein
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              Cream of Rice
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              Creatine
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              BCAA++
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              Pre-Workout
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              Fitness Paketi
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              Collegen
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              Günlük Vitamin Paketi
            </Link>
          </li>
          <li>
            <Link to="" className="text-gray-400">
              ZMA
            </Link>
          </li>
        </ul>
      </AccordionItem>
      <div className="">
        <span
          className=" md:hidden flex justify-start ml-4 mt-24 text-xs  bg-[#222222]"
          style={{ color: "#999999" }}
        >
          Copyright © Tüm Hakları Saklıdır
        </span>
      </div>
    </div>
  );
};

export default Accordion;
