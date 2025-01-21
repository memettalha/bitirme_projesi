import Whey from "../assets/Images/Betseller/WHEY.png"
import Creatine from "../assets/Images/Betseller/creatine.png"
import Cream from "../assets/Images/Betseller/CreamofRice.png"
import Preworkout from "../assets/Images/Betseller/PreWorkout.png"
import Fitness from "../assets/Images/Betseller/FitnessPaketipng.png"
import Gunluk from "../assets/Images/Betseller/Gunlukvitamin.png"
import { useLoaderData } from "react-router-dom"
import StarRating from "./Component/StarRating"
import { nanoid } from "nanoid"
import {Link} from "react-router-dom"

interface PriceInfo {
  profit: number | null;
  total_price: number;
  discounted_price: number | null;
  price_per_servings: number | null;
  discount_percentage: number | null;
}

interface Product {
  name: string;
  short_explanation: string;
  price_info: PriceInfo;
  photo_src: string;
  comment_count: number;
  average_star: number;
  id:string;
}

interface ApiResponse {
  status: string;
  data: Product[];
}
export interface CategoryProps{
  id: string;
  name: string;
  slug: string;
  order: number;
  children: {
      id: string;
      name: string;
      slug: string;
      order: number;
      sub_children: {
          name: string;
          slug: string;
          order: number;
      }[];
  }[];
  top_sellers: {
      name: string;
      slug: string;
      description: string;
      picture_src: string;
  }[];
}


export async function Loader(){
  try {
    const response = await fetch("https://fe1111.projects.academy.onlyjs.com/api/v1/products/best-sellers")
    const json =( await response.json() as ApiResponse)
  
    const response1 = await fetch(`https://fe1111.projects.academy.onlyjs.com/api/v1/categories`)
    const  responseJson = await response1.json();
    return {post:json, category:responseJson.data.data}
  } catch (error) {
    console.log(error)
  }

}


interface prc {
  name:string,
  description:string,
  rate:string,
  comments:number,
  price:number,
  DiscountedPrice:number,
  ImgSrc:string,
  indYuzd:string
}

export const products:prc[] = [{ 
    name:"WHEY PROTEİN",
    description:"EN ÇOK TERCİH EDİLEN PROTEİN",
    rate:"⭐⭐⭐⭐⭐",
    comments:10869,
    price:549,
    DiscountedPrice:0,
    ImgSrc:Whey,
    indYuzd:""
  },{
    name:"FİTNESS PAKETİ",
    description:"EN POPÜLER ÜRÜNLER BİR ARADA ",
    comments:7650,
    rate:"⭐⭐⭐⭐⭐",
    price:799,
    DiscountedPrice:1256,
    ImgSrc:Fitness,
    indYuzd:"29"
  },{
    name:"GÜNLÜK VİTAMİN PAKETİ",
    description:"EN SIK TÜKETİLEN TAKVİYELER",
    comments:5013,
    rate:"⭐⭐⭐⭐⭐",
    price:549,
    DiscountedPrice:717,
    ImgSrc:Gunluk,
    indYuzd:"23"
  },{
    name:"PRE-WORKOUT SUPRIME",
    description:"Antreman Öncesi Takviye",
    comments:6738,
    rate:"⭐⭐⭐⭐⭐",
    price:399,
    DiscountedPrice:0,
    ImgSrc:Preworkout,
    indYuzd:""
  },{
    name:"CREAM OF RICE",
    description:"EN LEZZETLİ PİRİNÇ KREMASI",
    comments:5216,
    rate:"⭐⭐⭐⭐⭐",
    price:239,
    DiscountedPrice:0,
    ImgSrc:Cream,
    indYuzd:""
  },{
    name:"CREATİNE",
    description:"EN POPÜLER SPORCU TAKVİYESİ",
    comments:8558,
    rate:"⭐⭐⭐⭐⭐",
    price:239,
    DiscountedPrice:0,
    ImgSrc:Creatine,
    indYuzd:""
  },]

  

const Product = () => {


  const {post} = useLoaderData() as Awaited<ReturnType<typeof Loader>>
  const baseUrl = "https://fe1111.projects.academy.onlyjs.com"; // Burada API'nin temel URL'sini kullanın


  return (
    <div className="my-4">
      <div className="flex justify-center items-center">
         <h1 className="mb-4 mt-3 font-semibold text-[22px]">ÇOK SATANLAR</h1>
      </div>
      <div className="flex items-center justify-center mx-auto">
      <div className="flex flex-wrap max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      {post.data.map((product: Product, index: number) => (
            <div key={index} className='relative w-1/2 md:w-1/3 lg:w-1/6 p-4 text-center' >
              <div className="">
                <img className="w-44 h-44 lg:w-44 lg:h-44 xl:w-44 xl:h-44 mx-auto "   src={`${baseUrl}${product.photo_src}`} alt="" />
                <Link to="/ProductDetails/2" className="font-bold mt-4">{product.name}</Link><br/>
                <p className="font-light text-b88 text-fs10">{product.short_explanation}</p>
                <StarRating count={product.average_star} />
                {product.price_info.discount_percentage !== null ? (
                  <p className="absolute  top-0 right-2 text-xs text-white p-1 " style={{ background: "#ED2727" }}>
                    <span className="text-xl text-white">%{product.price_info.discount_percentage} <br/></span> İNDİRİM
                  </p>
                ) : ""} 
              </div>
              <div>
                <p className="text-xs">{product.comment_count} Yorum</p>
                <div className="flex flex-row justify-center items-end " >
                  <p className="text-xl">{product.price_info.total_price} TL</p>
                  <p className="line-through " style={{color:"#ED2727"}}>{product.price_info.discounted_price !== null ? (`${product.price_info.discounted_price } TL`):""}</p>
                  
                </div>
              
              </div>
        
          </div>
          ))}
        </div>
          </div>
        </div>

  )
}

export default Product 

