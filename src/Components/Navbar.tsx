import { MdOutlineAccountBox, MdArrowDropDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import LogoSiyah from "../assets/Images/LOGO_Siyah.png";
import koli from "../assets/Images/Navbar/koli.png";
import smileMan from "../assets/Images/Navbar/smileMan.png";
import guven from "../assets/Images/Navbar/guven.png";
import { useEffect, useRef, useState } from "react";
import searchIcon from "../assets/Images/search-icon.svg.png";
import { IoIosArrowForward } from "react-icons/io";
import rightarrow from "../assets/Images/Cart/rightarrow.png";
import trash from "../assets/Images/Cart/trash.png";
import plus from "../assets/Images/Cart/plus.png";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useBearStore } from "../Components/counter-store";
import ButtonComponent from "./Component/Button";
import { BASE_URL } from "../Routes/SingUpPage";
import Dropdown from "./Component/Dropdown";
import { AddProduct } from "../Routes/ProductDetails";

export interface DropdownItem {
  label: string;
  link: string;
  reviews?: string;
}

export interface DropdownSection {
  title: string;
  items: DropdownItem[];
}



const Navbar = ({cartItems, setCartItems}:{cartItems:AddProduct[],
  setCartItems: React.Dispatch<React.SetStateAction<AddProduct[]>>
}) => {
  const bears = useBearStore((state) => state.bears);

  const increasePopulation = useBearStore((state) => state.increasePopulation);

  const removeAllBears = useBearStore((state) => state.removeAllBears);

 

  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState<Boolean>(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState<Boolean>(false);

  const deleteToCart = (parameter:string) => {
    const NewCart = cartItems.filter((item) => item.id !== parameter)
    setCartItems(NewCart)
  }

 const handleIncreaseProduct = (id:string) => {
  setCartItems((prevItems) =>
    prevItems.map((item) =>
    item.id === id ? {...item, quantity:item.quantity +1} : item)
  )
 }

 
  const handleAccountToggle = () => {
    setIsAccountOpen(!isAccountOpen);
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };
  const handleNavbarToggle = () => {
    setIsNavbarOpen((prev) => !prev);
  };

 
  const calculateTotalPrice = (items:AddProduct[]) => {
      if(!items ||items.length === 0){
        return 0
      }
        return items.reduce((total,item) => total + item.price * item.quantity, 0)

  }
  const totalPrice = calculateTotalPrice(cartItems)

  const sections: DropdownSection[] = [
    {
      title: "EN ÇOK SATANLAR",
      items: [
        { label: "Whey Protein", link: "#", reviews: "14474" },
        { label: "Whey Isolate", link: "#", reviews: "1193" },
        { label: "Mass Gainer", link: "#", reviews: "1247" },
        { label: "Protein Bar", link: "#", reviews: "1335" },
      ],
    },
    {
      title: "PROTEİNLER",
      items: [
        { label: "Whey Protein", link: "#" },
        { label: "Whey İzole", link: "#" },
        { label: "Kolajen Proteini", link: "#" },
        { label: "Bezelye Proteini", link: "#" },
        { label: "Yumurta Akı Proteini", link: "#" },
        { label: "Süt Proteini", link: "#" },
        { label: "Soya Proteini", link: "#" },
      ],
    },
    {
      title: "PROTEİNLİ ÜRÜNLER",
      items: [
        { label: "Mass Gainer", link: "#" },
        { label: "Protein Bar", link: "#" },
        { label: "Protein Meal (Öğün Tozu)", link: "#" },
        { label: "Protein Coffee", link: "#" },
        { label: "Collagen Coffee", link: "#" },
        { label: "Vegan Gainer", link: "#" },
      ],
    },
  ];
  const navbarRef = useRef<HTMLDivElement>(null);


  // useRef ile  sepet menüsünü açılır kapanır hale getirme
  const cartRef = useRef<HTMLDivElement>(null);

  //Product Details için query string etiketi
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    // Belirtilen kategori ID'si ile ProductList sayfasına yönlendir
    navigate(`/ProductList/${categoryId}`);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const isNavbarOpen = navbarRef.current && navbarRef.current.contains(event.target as Node);
      const isCartOpen = cartRef.current && cartRef.current.contains(event.target as HTMLDivElement);
  
      if (!isNavbarOpen && !isCartOpen) {
        // Neither navbar nor cart is open, close both
        setIsNavbarOpen(false);
        setIsCartOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleOutsideClick);
  
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [navbarRef, cartRef, setIsNavbarOpen, setIsCartOpen]);

  return (
    <div className="w-full sticky top-0 z-50 bg-white">
      <nav className="border-gray-200  w-12/12 mx-auto">
        {/*Web Bölümü*/}
        <div className="hidden w-full md:max-w-4xl lg:max-w-5xl xl:max-w-7xl  mx-auto md:flex flex-wrap items-center justify-between lg:justify-around py-4">
          <div className="">
            <Link to="/" className="flex items-center ">
              <img
                src={LogoSiyah}
                className="lg:h-11 md:w-36 lg:w-[170px]"
                alt="Logo"
              />
            </Link>
          </div>
          <div
            className={`${
              isCartOpen ? "block" : "hidden"
            } w-full  px-5 md:flex md:items-center md:w-auto md:ml-auto lg:mx-2`}
            id="navbar-default"
          >
            <div className="flex md:flex-row items-center md:space-x-1 lg:space-x-4">
              <div className="relative flex items-center">
                <input
                  className="border-2 border-gray-300 h-12 md:w-60 lg:w-80 xl:w-96 pl-4 text-left rounded-l-md"
                  type="text"
                  placeholder="Aradığınız ürünü yazınız"
                />
                <ButtonComponent
                  className={
                    "bg-[#919191] w-20 h-12 text-white absolute right-0 top-0 rounded-r-md"
                  }
                >
                  ARA
                </ButtonComponent>
              </div>
              <div className="relative">
                <button
                  className="flex items-center justify-around border-2 border-gray-300 h-12 text-gray-500 px-2 mx-2 rounded-md"
                  onClick={handleAccountToggle}
                >
                  <MdOutlineAccountBox fontSize="1.2rem" />
                  <p className="text-xs ml-2 mr-2">HESAP</p>
                  <MdArrowDropDown fontSize="1.5rem" />
                </button>
                {isAccountOpen ? (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10 flex flex-col items-center justify-center text-center">
                    <Link to="/account/login"
                      className="block py-2 px-4 text-blue-500 hover:bg-slate-200"
                    >
                      ÜYE GİRİŞİ
                    </Link>
                    <Link
                      to="/account/register"
                      className="block py-2 px-4 text-blue-500  hover:bg-slate-200"
                    >
                      ÜYE OL
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="">
                <button
                  className="flex items-center justify-center relative border-2 bg-[#919191] text-white h-12 border-gray-300 px-8 py-2 lg:mx-2 lg:w-48 rounded-md"
                  onClick={handleCartToggle}
                >
                  <span
                    className="bg-kirmizi rounded-full text-xs w-4 h-4 flex items-center justify-center"
                    style={{ position: "absolute", top: "3px", right: "100px" }}
                  >
                    {cartItems && cartItems.length}
                  </span>
                  <FaShoppingCart className="w-6 h-6" />
                  <span className="ml-3 text-xs">SEPET</span>
                </button>

                {/* Sepet Alanı */}
                {isCartOpen === true ? (
                  <div
                    ref={cartRef}
                    className="fixed right-0 top-0 w-[500px] h-screen bg-white flex flex-col justify-around z-40 "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div>
                      <h2 className="text-xl font-bold text-center">SEPETİM</h2>
                    </div>
                    <div className="bg-beyazF7 h-96">
                      <div className="productx">
                        <ul>
                          {cartItems && cartItems.length === 0 ? (
                            <li className="flex justify-center items-center text-center">
                              Sepetinizde Ürün Bulunmamaktadır
                            </li>
                          ) : (
                            cartItems.map((item, index) => (
                              <li
                                key={index}
                                className="flex py-4 border-b bg-beyazF7 "
                              >
                                <div className="flex flex-row">
                                  <div className="ml-6">
                                    <img
                                      className="w-24 h-24"
                                      src={item.image}
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-4 w-80 ">
                                    <div className="flex flex-row  justify-between">
                                      <p className="font-bold">{item.title}</p>
                                      <p className="">{item.price} TL</p>
                                    </div>
                                    <div className="flex flex-start">
                                      <p className="text-fs15 text-[#919191]">
                                        {item.name}
                                      </p>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                      <p>{item.weight} g</p>
                                      <div className="flex flex-row justify-around items-center bg-white">
                                        <button
                                          onClick={() => deleteToCart(item.id)}
                                          className="w-8 text-center flex justify-center"
                                        >
                                          <img src={trash} alt={trash} />
                                        </button>
                                        <p className="w-16">{item.quantity}</p>
                                        <button
                                          onClick={() =>
                                            handleIncreaseProduct(item.id)
                                          }
                                          className="w-8"
                                        >
                                          <img src={plus} alt="" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col bg-white mb-12">
                      <ul>
                        <li></li>
                      </ul>
                      <p className="ml-auto font-bold mb-2 mx-10">
                        TOPLAM {totalPrice} TL
                      </p>
                      <button className="flex flex-row mx-10 max-w-lg h-16 text-center justify-center items-center bg-black text-white rounded-md">
                        <span className="text-lg mr-3">DEVAM ET</span>{" "}
                        <img src={rightarrow} alt="" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/*Mobil Bölümü */}
      <div className="flex flex-row justify-between mb-5 ">
        <button
          onClick={handleNavbarToggle}
          data-collapse-toggle="navbar-default"
          type="button"
          className={`flex items-center p-2 w-10 h-10 justify-start text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
          aria-controls="navbar-default"
          aria-expanded={isNavbarOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {isNavbarOpen ? (
          <div
            ref={navbarRef}
            className="fixed w-[450px] sm:w-[600px]  md:hidden z-20 top-0 "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col text-left bg-white pl-16 h-80">
              <button
                onClick={() =>
                  handleCategoryClick("38fb5754-3068-4490-a12a-169fa564c675")
                }
                className="flex flex-row items-center h-12 font-semibold mt-5"
              >
                PROTEİN <IoIosArrowForward className="ml-auto text-2xl" />
              </button>
              <button
                onClick={() =>
                  handleCategoryClick("d3cdcefe-eedd-4ee0-a254-b821ed4e2b8c")
                }
                className="flex flex-row items-center h-12 font-semibold mt-5"
              >
                SPOR GIDALARI <IoIosArrowForward className="ml-auto text-2xl" />
              </button>
              <button
                onClick={() =>
                  handleCategoryClick("cae64711-98b9-48f4-82b4-c5d460718dcf")
                }
                className="flex flex-row items-center h-12 font-semibold mt-5"
              >
                SAĞLIK <IoIosArrowForward className="ml-auto text-2xl" />
              </button>
              <button
                onClick={() =>
                  handleCategoryClick("8eaeff30-3138-49ac-b120-0eac18866190")
                }
                className="flex flex-row items-center h-12 font-semibold mt-5"
              >
                GIDA <IoIosArrowForward className="ml-auto text-2xl" />
              </button>
              <button
                onClick={() =>
                  handleCategoryClick("84229f35-1b8a-4e02-9688-245c39c8ec42")
                }
                className="flex flex-row items-center h-12 font-semibold mt-5"
              >
                VİTAMİN <IoIosArrowForward className="ml-auto text-2xl" />
              </button>
              <button
                onClick={() => handleCategoryClick("all")}
                className="flex flex-row items-center h-12 font-semibold mt-5"
              >
                TÜM ÜRÜNLER <IoIosArrowForward className="ml-auto text-2xl" />
              </button>
            </div>
            <div className="flex flex-col text-left bg-beyazE5 text-fs13 h-96 pt-5 pl-16">
              <Link to="" className="h-10 font-semibold">
                HESABIM
              </Link>
              <Link to="" className="h-10 font-semibold">
                MÜŞTERİ YORUMLARI
              </Link>
              <Link to="" className="h-10 font-semibold">
                İLETİŞİM
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* Logo */}
        <Link to="/">
          <img src={LogoSiyah} alt="" className="block md:hidden" />
        </Link>

        {/* Sepet */}
        <button
          className="grid place-items-center md:hidden relative"
          onClick={handleCartToggle}
        >
          <span className="absolute top-0 right-0 bg-kirmizi px-1 rounded-full text-xs w-4 h-4 "></span>
          <FaShoppingCart className="w-8 h-8  #2126AB" />
        </button>
        {isCartOpen === true ? (
          <div
            ref={cartRef}
            className="fixed right-0 top-0 w-[500px] h-screen bg-white flex flex-col justify-around z-40"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h2 className="text-xl font-bold text-center">SEPETİM</h2>
            </div>
            <div className="bg-beyazF7 h-96">
              <div className="productx">
                <ul className="overflow-y-auto h-96">
                  {cartItems.length === 0 ? (
                    <li className="flex justify-center items-center text-center">
                      Sepetinizde Ürün Bulunmamaktadır
                    </li>
                  ) : (
                    cartItems.map((item, index) => (
                      <li
                        key={index}
                        className="flex py-4 border-b bg-beyazF7 "
                      >
                        <div className="flex flex-row">
                          <div className="ml-6">
                            <img
                              className="w-24 h-24"
                              src={item.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4 w-80 ">
                            <div className="flex flex-row  justify-between">
                              <p className="font-bold">{item.title}</p>
                              <p className="">{item.price} TL</p>
                            </div>
                            <div className="flex flex-start">
                              <p className="text-fs15 text-[#919191]">
                                {item.name}
                              </p>
                            </div>
                            <div className="flex flex-row justify-between">
                              <p>{item.weight} g</p>
                              <div className="flex flex-row justify-around items-center bg-white">
                                <button
                                  onClick={() => deleteToCart(item.id)}
                                  className="w-8 text-center flex justify-center"
                                >
                                  <img src={trash} alt={trash} />
                                </button>
                                <p className="w-16">{item.quantity}</p>
                                <button
                                  onClick={() => handleIncreaseProduct(item.id)}
                                  className="w-8"
                                >
                                  <img src={plus} alt="" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
            <div className="flex flex-col bg-white mb-12">
              <p className="ml-auto font-bold mb-2 mx-10">TOPLAM {totalPrice} TL</p>
              <Link
                to="/OldOrder"
                className="flex flex-row mx-10 max-w-lg h-16 text-center justify-center items-center bg-black text-white rounded-md"
              >
                <span className="text-lg mr-3">DEVAM ET</span>{" "}
                <img src={rightarrow} alt="" />
              </Link>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {/* Input */}
      <div className="relative md:hidden mb-5 mx-5">
        <input
          className="w-full bg-beyazF3 rounded-full text-left text-[13px] px-10 font-bold text-[#333333] "
          type="text"
          placeholder="ARADIĞINIZ ÜRÜNÜ YAZINIZ."
        />
        <img
          src={searchIcon}
          className="absolute top-3 left-3"
          alt="Search Icon"
        />
      </div>

      <div className="hidden w-full md:flex flex-row md:justify-between lg:flex lg:justify-around bg-[#222222] text-white mt-4 py-1">
        <div className="flex md:justify-around md:w-full lg:w-9/12">
          <Dropdown
            title="PROTEİN"
            sections={sections}
            handleClick={(event) =>
              handleCategoryClick("38fb5754-3068-4490-a12a-169fa564c675")
            }
          />
          <Dropdown
            title="SPOR GIDALARI"
            sections={sections}
            handleClick={(event) =>
              handleCategoryClick("d3cdcefe-eedd-4ee0-a254-b821ed4e2b8c")
            }
          />
          <Dropdown
            title="SAĞLIK"
            sections={sections}
            handleClick={(event) =>
              handleCategoryClick("8eaeff30-3138-49ac-b120-0eac18866190")
            }
          />
          <Dropdown
            title="GIDA"
            sections={sections}
            handleClick={(event) =>
              handleCategoryClick("cae64711-98b9-48f4-82b4-c5d460718dcf")
            }
          />

          <Dropdown
            title="VİTAMİNLER"
            sections={sections}
            handleClick={(event) =>
              handleCategoryClick("84229f35-1b8a-4e02-9688-245c39c8ec42")
            }
          />
          <Dropdown
            title="TÜM ÜRÜNLER"
            sections={sections}
            handleClick={(event) =>
              handleCategoryClick("all")
            }
          />
        </div>
      </div>
      <div className="hidden lg:w-8/12 mx-auto  md:flex text-xs justify-around mt-2">
        <div className="flex flex-row justify-center md:items-start xl:items-center ">
          <img src={koli} alt="Koli" className="m-2" />
          <p className="md:w-12 lg:w-28">
            <b>AYNI GÜN KARGO</b>
          </p>
          <p className="mx-2 lg:mx-0">-</p>
          <p className="md:w-28 lg:w-36 xl:w-52 ml-2">
            16.00'DAN ÖNCEKİ SİPARİŞLERDE
          </p>
        </div>

        <div className="flex md:items-start xl:items-center">
          <img src={smileMan} alt="Smile Man" className="m-2" />
          <p className="md:w-16 lg:w-28">
            <b>ÜCRETSİZ KARGO</b>
          </p>
          <p className="mx-2 lg:mx-0">-</p>
          <p className="md:w-28 lg:w-44 xl:w-52 ml-2">
            100 TL ÜZERİ SİPARİŞLERDE
          </p>
        </div>
        <div className="flex md:items-start xl:items-center">
          <img src={guven} alt="Güven" className="m-2" />
          <p className="md:w-16 lg:w-32">
            <b>GÜVENLİ ALIŞVERİŞ</b>
          </p>
          <p className="mx-2 lg:mx-0">-</p>
          <p className="md:w-28 lg:w-44 xl:w-52 ml-2">
            1.000.000 TL+ MUTLU MÜŞTERİ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
