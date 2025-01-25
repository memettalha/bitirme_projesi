import Protein from "../assets/Images/Categories/protein.png";
import Saglik from "../assets/Images/Categories/saglik.png";
import Vitaminler from "../assets/Images/Categories/vitaminler.png";
import Sporgidalari from "../assets/Images/Categories/SporGidalari.png";
import Gida from "../assets/Images/Categories/Gida.png";
import TumUrunler from "../assets/Images/Categories/tumUrunler.jpg";
import nutrition from "../assets/Images/OJS nutrition slider banner 2.png";
import { useLoaderData } from "react-router-dom";
import { CategoryProps } from "./Betseller";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface product {
  name: string;
  path: string;
  img: string;
}

// Categoryleri fetch ile postmanden aldık
const productsCard = async () => {
  const response = await fetch(
    `https://fe1111.projects.academy.onlyjs.com/api/v1/categories`
  );
  const responseJson = await response.json();
  console.log(responseJson);
};

productsCard();

const MainSection = () => {
  const [SelectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    navigate(`/ProductList/${categoryId}`); // Kategoriye göre yönlendirme
  };

  const { category } = useLoaderData() as { category: CategoryProps[] };
  const products: product[] = [
    {
      name: "PROTEİN",
      path: "/ProductList/38fb5754-3068-4490-a12a-169fa564c675",
      img: Protein,
    },
    {
      name: "VİTA-MİNLER",
      path: "/ProductList/d3cdcefe-eedd-4ee0-a254-b821ed4e2b8c",
      img: Vitaminler,
    },
    {
      name: "SAĞLIK",
      path: "/ProductList/cae64711-98b9-48f4-82b4-c5d460718dcf",
      img: Saglik,
    },
    {
      name: "SPOR GIDALARI",
      path: "/ProductList/8eaeff30-3138-49ac-b120-0eac18866190",
      img: Sporgidalari,
    },
    { name: "GIDA", path: "/ProductList/${gidaParams}", img: Gida },
    { name: "TÜM ÜRÜNLER", path: "/ProductList/${all}", img: TumUrunler },
  ];

  useEffect(() => {
    console.log(category);
  }, [category]);
  return (
    <div>
      <div className="">
        <img src={nutrition} alt="" />
      </div>

      <div className="categories  flex justify-center items-center">
        <div className="w-full lg:max-w-4xl xl:max-w-6xl flex flex-wrap">
          {category.map((cate, index) => {
            const product = products[index];
            return (
              <div className="w-1/2 md:w-1/3 p-4 relative" key={cate.id}>
                <img
                  className="w-80 h-24  sm:h-28 md:h-32 lg:w-full lg:h-40 rounded-lg"
                  src={product?.img}
                  alt=""
                />
                <div className="w-20 h-12 flex items-center justify-center text-sm md:text-lg font-black absolute top-8 right-8 md:right-8 md:top-10 lg:right-16 lg:top-12 lg:text-3xl">
                  <span className="">{cate.name}</span>
                </div>
                <Link
                  to={product.path}
                  className={
                    "absolute bottom-8 right-12 text-center  md:text-sm  sm:w-20 lg:w-28 xl:w-36 h-4 font-black bg-[#222222] text-white rounded-full md:w-24 md:h-7 md:right-8 lg:right-8 lg:rounded-lg "
                  }
                >
                  İNCELE
                </Link>
              </div>
            );
          })}

          <div className="w-1/2 md:w-1/3 p-4 relative">
            <img
              className="w-80 h-24 sm:h-28 md:h-32 lg:w-full lg:h-40 rounded-lg"
              src={products[5]?.img}
              alt=""
            />
            <div className="w-20 h-12 flex items-center justify-center text-sm md:text-lg font-black absolute top-8 right-8 md:right-8 md:top-10 lg:right-16 lg:top-12 lg:text-3xl">
              <span className="">{products[5].name}</span>
            </div>
            <Link
              to=""
              className={
                "absolute bottom-8 right-12 text-xs text-center  md:text-sm w-16 sm:w-20 lg:w-28 xl:w-36 h-4 font-black bg-[#222222] text-white rounded-full md:w-24 md:h-7 md:right-8 lg:right-8 lg:rounded-lg lg:h-8 xl:right-6"
              }
            >
              İNCELE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
