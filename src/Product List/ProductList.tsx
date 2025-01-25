import React, { useEffect } from "react";
import Navbar from "../Components/Component/Navbar/Navbar";
import Footer from "../Components/Footer";
import Accordion from "../Components/FooterAccordion";
import { useState } from "react";
import {
  LoaderFunction,
  LoaderFunctionArgs,
  useNavigate,
} from "react-router-dom";
import StarRating from "../Components/Component/StarRating";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { create } from "zustand";
import { category } from "../Routes";

export interface PriceInfo {
  profit: number | null;
  total_price: number;
  discounted_price: number | null;
  price_per_servings: number;
  discount_percentage: number | null;
}

export interface Product {
  name: string;
  short_explanation: string;
  slug: string;
  price_info: PriceInfo;
  photo_src: string;
  comment_count: number;
  average_star: number;
  id: string;
}

export interface ProductList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
}

export interface ApiResponse {
  status: string;
  data: ProductList;
}

export const Loader: LoaderFunction = async ({
  params,
  request,
}: LoaderFunctionArgs) => {
  const categoryId = params.categoryId;
  const page = Number(params.page) || 0;
  const limit = 100;
  const offset = 0;
  try {
    
    const allUrl = `https://fe1111.projects.academy.onlyjs.com/api/v1/products?limit=${limit}&offset=${offset}`
    const categoryUrl = `${allUrl}&main_category=${categoryId}`;
    const url =  categoryId === "all" ? allUrl : categoryUrl
    const response = await fetch(url);
    const json = (await response.json()) as ApiResponse;

    return { category: json.data, allProduct: json, page };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { category: null, page };
  }
};
{
  /*categorylerin id  gelen veri al boşsa json döndür --> tüm ürünler boş değilse category
      SetData içinde koşullu rendering yap varsa categoryId göster yoksa all göster
  */
}

const ProductList = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  console.log({ categoryId });
  const navigate = useNavigate();
  const baseUrl = "https://fe1111.projects.academy.onlyjs.com";

  const [data, setData] = useState<{
    category: ProductList | null;
    allProduct: ProductList | null;
    page: number;
  }>({ category: null, allProduct: null, page: 0 });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (categoryId) {
        setLoading(true);
        const loaderData = await Loader({
          params: { categoryId, page: page.toString() },
          request: new Request(""),
        }); // `loaderData` doğruluğunu kontrol ederek uyumlu türde bir değer atayın
        if (
          loaderData &&
          "category" in loaderData &&
          "page" in loaderData &&
          "allProduct" in loaderData
        ) {
          setData(
            loaderData as {
              category: ProductList | null;
              allProduct: ProductList | null;
              page: number;
            }
          );
        } else {
          setData({ category: null, allProduct: null, page: 0 });
        }
        setLoading(false);
      }
    };
    fetchData();
  }, [categoryId, page]);



  useEffect(() => {
    const fetchData = async () => {
      if (selectedCategoryId) {
        setLoading(true);
        const loaderData = await Loader({
          params: { categoryId: selectedCategoryId, page: page.toString() },
          request: new Request(""),
        });
        console.log(loaderData);
        if (
          loaderData &&
          "category" in loaderData &&
          "page" in loaderData &&
          "allProduct" in loaderData
        ) {
          setData(
            loaderData as {
              category: ProductList | null;
              allProduct: ProductList | null;
              page: number;
            }
          );
        } else {
          setData({ category: null, allProduct: null, page: 0 });
        }
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedCategoryId, page]);

  useEffect(() => {
    navigate(`?page=${page}`);
  }, [page, navigate]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data.category) {
    return <div>No products found.</div>;
  }

  const { results, count } = data.category;
  const TotalPages = Math.ceil(count / 20);

  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const handleShowText = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowFullText(!showFullText);
  };

  const text =
    "Vücudun tüm fonksiyonlarını sağlıklı bir şekilde yerine getirmesini sağlayan temel yapı taşlarından biri proteindir...";
  const shortedText = text.slice(0, 180);

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl mt-5 mb-5 font-bold text-center">PROTEİN</h1>
      <div className="flex items-center justify-center mx-auto">
        {categoryId ? (
          <div className="flex flex-wrap max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
            {data.category.results.map((product: Product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/ProductDetails/${product.id}`)}
                className="relative w-1/2 md:w-1/3 lg:w-1/4 p-4 text-center"
              >
                <div className="relative">
                  <img
                    className="mx-auto lg:w-52 lg:h-52 "
                    src={`${baseUrl}${product.photo_src}`}
                    alt={product.name}
                  />
                  <div className="">
                    <Link to="" className="font-bold text-base">
                      {product.name}
                    </Link>
                    <h1 className="text-fs11 text-[#888888]">
                      {product.short_explanation}
                    </h1>
                    {product.price_info.discount_percentage !== null && (
                      <h1 className="absolute -top-4 -right-4 xl:right-2 text-xl text-white bg-kirmizi p-1">
                        %{product.price_info.discount_percentage}
                        <br />
                        <span className="text-xs flex items-start justify-center">
                          İNDİRİM
                        </span>
                      </h1>
                    )}
                  </div>
                  <div className="">
                    <StarRating count={product.average_star} className="d-flex justify-center align-center" />
                    <h1>
                      {product.comment_count !== 0 ? (
                        `${product.comment_count} Yorum`
                      ) : (
                        <p>0 Yorum</p>
                      )}
                    </h1>
                    <div className="flex flex-row justify-center items-end ">
                      <p className="text-xl">
                        {product.price_info.total_price} TL
                      </p>
                      <p
                        className="line-through font-semibold"
                        style={{ color: "#ED2727" }}
                      >
                        {product.price_info.discounted_price !== null
                          ? `${product.price_info.discounted_price} TL`
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
            {data.allProduct?.results.map((product: Product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/ProductDetails/${product.id}`)}
                className="relative w-1/2 md:w-1/3 lg:w-1/4 p-4 text-center"
              >
                <div className="relative">
                  <img
                    className="mx-auto lg:w-52 lg:h-52"
                    src={`${baseUrl}${product.photo_src}`}
                    alt={product.name}
                  />
                  <div className="">
                    <Link to="" className="font-bold text-base">
                      {product.name}
                    </Link>
                    <h1 className="text-fs11 text-[#888888]">
                      {product.short_explanation}
                    </h1>
                    {product.price_info.discount_percentage !== null && (
                      <h1 className="absolute -top-4 -right-4 xl:right-2 text-xl text-white bg-kirmizi p-1">
                        %{product.price_info.discount_percentage}
                        <br />
                        <span className="text-xs flex items-start justify-center">
                          İNDİRİM
                        </span>
                      </h1>
                    )}
                  </div>
                  <div>
                    <StarRating count={product.average_star} />
                    <h1>
                      {product.comment_count !== 0 ? (
                        `${product.comment_count} Yorum`
                      ) : (
                        <br />
                      )}
                    </h1>
                    <div className="flex flex-row justify-center items-end ">
                      <p className="text-xl">
                        {product.price_info.total_price} TL
                      </p>
                      <p
                        className="line-through font-semibold"
                        style={{ color: "#ED2727" }}
                      >
                        {product.price_info.discounted_price !== null
                          ? `${product.price_info.discounted_price} TL`
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center mt-5 mb-12">
        <div className="flex space-x-2">
          {Array.from({ length: TotalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageClick(i)}
              className={`px-4 py-2 rounded ${
                page === i ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs text-center mt-5 mb-12">
          Toplam {data.category.results.length} ürün görüntüleniyor
        </p>
        <div className="flex justify-center">
          <div className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
            <p className="text-md mb-2">
              {showFullText ? (
                <div className="mb-20">
                  <p className="text-left">{text}</p>
                  <Link
                    to=""
                    onClick={handleShowText}
                    className=" float-start mt-5 underline text-[#059669]"
                  >
                    Daha az göster
                  </Link>
                </div>
              ) : (
                <div>
                  <p className="text-left">{shortedText}...</p>
                  <div className="mt-10">
                    <Link
                      to=""
                      onClick={handleShowText}
                      className=" float-start underline text-[#059669] text-left"
                    >
                      <span className="pb-5 mb-5 block">
                        {" "}
                        Daha fazla göster
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <Accordion />
    </div>
  );
};

export default ProductList;
