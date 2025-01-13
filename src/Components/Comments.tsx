import previous from "../assets/Images/Button - Previous Page.png"
import next from "../assets/Images/Button - Next Page.png"
import { Swiper,SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/free-mode"
import "swiper/css/pagination";
import { FreeMode,Pagination,Navigation } from "swiper/modules"
import { RxArrowTopRight,RxArrowTopLeft } from "react-icons/rx"

interface comment {
    star:string,
    totalComments:number,
    title:string,
    yorum:string,
    date:string
}

const comment1 =  [
  { 
  name:"Berke Ç.", 
  star:"⭐⭐⭐⭐⭐",
  totalComments:198453,
  title:"Beğendim gayet güzeldi",
  yorum:"Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
  date:"03/05/24",
  }
]

const comment2 =  [
  {
  name:"Berke Ç.",     
  star:"⭐⭐⭐⭐⭐",
  totalComments:198453,
  title:"Beğendim gayet güzeldi",
  yorum:"Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
  date:"03/05/24",
  }
]

const comment3 =  [
  {
  name:"Berke Ç.",   
  star:"⭐⭐⭐⭐⭐",
  totalComments:198453,
  title:"Beğendim gayet güzeldi",
  yorum:"Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
  date:"03/05/24",
  }
]

const comment4 =  [
  {
  name:"Berke Ç.",     
  star:"⭐⭐⭐⭐⭐",
  totalComments:198453,
  title:"Beğendim gayet güzeldi",
  yorum:"Ürün gayet güzel ama ekşiliği bi  süreden sonra bayabiliyor insanı teşekkürler.",
  date:"03/05/24",
  }
]


const comments = [...comment1,...comment2,...comment3,...comment4]
console.log(comments)  

const Comments = () => {
  return (
    <div className="lg:max-w-5xl xl:max-w-6xl mx-auto">
          <div className='border-b-2 justify-center p-2'>
            <div className='border-b-2 flex flex-row justify-between p-2'>
              <h1 className="ml-4">GERÇEK MÜŞTERİ YORUMLARI</h1>
              <div className="flex flex-row">
                <p>⭐⭐⭐⭐⭐</p>
                <p className="underline ml-2" style={{color:"#6A6C77"}}>198453{} Yorum</p>
                <button className="swiper-button-prev ml-2"><img src={previous} alt="" /></button>
                <button className="swiper-button-next"><img src={next} alt="" /></button>
              </div>
            </div>
            <Swiper  breakpoints={{
              340:{
                slidesPerView:2,
                spaceBetween:15
              },
              700:{
                slidesPerView:3,
                spaceBetween:15
              }
            }}
            freeMode={true}
            pagination={{
              clickable:true
            }}
            navigation={true}
            modules={[FreeMode,Pagination,Navigation]}
            >
            <div className="flex flex-row">{comments.map((comment,index) => (
            <SwiperSlide key={index}>
            <div className=" text-left mt-5 mb-2 ml-5 w-96 h-48">
              <div className="flex">
                  <p className="font-light text-xs leading-7">{comment.date}</p>
                  <p className="ml-3">{comment.star}</p>
              </div>
              <p style={{color:"#4F4F4F"}} className="text-lg font-semibold leading-6">{comment.title}</p>
              <p  style={{color:"#6A6C77"}} className="w-64 text-sm">{comment.yorum}</p>
              <p className="text-sm text-[#737373]" >{comment.name}</p>
            </div> 
            </SwiperSlide>
              ))}
            </div>
            </Swiper>
        </div>

        
    </div>
  )
}

export default Comments

