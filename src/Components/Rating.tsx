import React, { useState } from 'react'
import 'blaze-slider/dist/blaze.css';


interface rate{
    name:string,
    star:string,
    title:string,
    comment:string,
    date:Date
}

const Rates:rate[] = [{
    name:"Eren U.",
    star:"⭐⭐⭐⭐⭐",
    title:"Her zamanki kalite. Teşekkürler",
    comment:"Her zamanki kalite. Teşekkürler",
    date:new Date("2024-05-06")
},{
    name:"Eren U.",
    star:"⭐⭐⭐⭐⭐",
    title:"Her zamanki kalite. Teşekkürler",
    comment:"Her zamanki kalite. Teşekkürler",
    date:new Date("2024-05-06")
},{
    name:"Eren U.",
    star:"⭐⭐⭐⭐",
    title:"Her zamanki kalite. Teşekkürler",
    comment:"Her zamanki kalite. Teşekkürler",
    date:new Date("2024-05-06")
},{
    name:"Eren U.",
    star:"⭐⭐⭐",
    title:"Her zamanki kalite. Teşekkürler",
    comment:"Her zamanki kalite. Teşekkürler",
    date:new Date("2024-05-06")
},{
    name:"Eren U.",
    star:"⭐⭐",
    title:"Her zamanki kalite. Teşekkürler",
    comment:"Her zamanki kalite. Teşekkürler",
    date:new Date("2024-05-06")
},{
    name:"Eren U.",
    star:"⭐",
    title:"Her zamanki kalite. Teşekkürler",
    comment:"Her zamanki kalite. Teşekkürler",
    date:new Date("2024-05-06")
},
/// Other Comments
]

export {Rates}

const Rating = () => {
    {/*BlazeSlider */}
    

    {/* Pagination */}
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 10
    const lastIndex = currentPage * recordsPerPage  
    const firstIndex = lastIndex - recordsPerPage
    const records = Rates.slice(firstIndex , lastIndex)
    const npages = Math.ceil(Rates.length / recordsPerPage)
    const numbers = [...Array(npages+1).keys()].slice(1)

        const changeCPage = (id:number)  => {
            setCurrentPage(id)
        }

      const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

      const nextPage = () => {
    if (currentPage < npages) {
      setCurrentPage(currentPage + 1);
    }
  };

    {/* Yıldızları rakama çevirme */}
    const totalStars = Rates.reduce((sum,rate) => sum + Number(rate.star.length),0) 
    const numberOfRewievs = Rates.length
    const avarageRates = numberOfRewievs > 0 ? totalStars / numberOfRewievs : 0
    {/* */}
    {/* Rakama göre yıldız verme */}
    const starElements = Array.from({ length: Math.floor(avarageRates) }).map((_, index) => (
        <span key={index}>⭐</span>
      ));
    {/* */}
    
    const number = [5,4,3,2,1]

   
   

  return (
    <div>
        <div className='lg:max-w-4xl xl:max-w-6xl lg:mx-auto md:ml-12 md:mr-24 '>
        <div className='flex flex-col md:flex md:flex-row justify-between mt-44 '>
            <div className='text-center ml-10 mb-5'>
                <p className='text-5xl md:text-4xl mb-3'>{avarageRates.toFixed(1)}</p>
                <p className='text-xl'>{starElements}</p>
                <p className='text-[17px]'>{Rates.length} YORUM</p>
            </div>
            <div className='lg:mr-36'>
                {number.map((no) => {
                const starCount = Rates.filter((rate) => rate.star.length === no).length;
                const percent = ((starCount/Rates.length) *100).toFixed(1)
                return(
                    <div key={no} className='flex mx-auto justify-center'>
                        <div className='flex flex-row items-center'>
                            <div className='text-left mr-3 w-24 ml-6'>
                            {[...Array(no)].map((_, index) => (
                                <span key={index} className='text-sm '>⭐</span>
                            ))}
                            </div>
                            <div className="h-4 relative w-[300px] text-left" style={{background:"#EDEDED"}}>
                                <p className='h-4 mb-2 text-[10px]' style={{width:`${percent}%`,background:"#2126AB"}}></p>
                            </div>
                            <div>
                                <p className="w-10 ml-2 text-blue-600">({starCount})</p>
                            </div>
                    </div>
                </div>
            )
        })}
      </div>
        
            
        </div>
        <div className='text-left mt-5'>
            <p className='w-[145px] h-[47px] flex justify-center items-center text-center text-sm text-white rounded-full ml-8 md:ml-8 mt-7' style={{background:"linear-gradient(81.44deg, #387EC7 0%, #1F23AA 100%)"}}  
            >YORUM ({Rates.length})</p>
        </div>
        </div>
           
      <div className='mb-12 lg:max-w-4xl xl:max-w-6xl flex flex-col mx-6 lg:mx-auto '>
        {records.map((rate,index) =>
        <div key={index} className="mt-6 bg-beyazF7 pt-6 pb-5 pl-10 pr-10 rounded-2xl">
            <div className='flex flex-col  md:flex md:flex-row text-left ' >
                <div className="flex flex-col md:flex md:flex-row w-full   rounded-md ">
                    <p className='mr-5'>{rate.star}</p>
                    <p className='mr-5 text-lg font-bold w-32'>{rate.name}</p>
                </div>
                <div className='text-left md:text-right lg:mr-12 font-bold'>
                    <p className='text-[16px] text-[#333333] mb-3'>{rate.date.toLocaleDateString("tr")}</p>
                </div>
            </div>
            <div className='text-left'>
                <p className='font-bold text-xl'>{rate.title}</p>
                <p className="text-fs15">{rate.comment}</p>
            </div>
        </div>
        )}
       </div>
       <nav className='text-center'>
            <ul className='pagination'>
                <li className='page-item'>
                    <a href="" className='page-link' onClick={prePage}>Prev</a>
                </li>
                <li className='page-item'>
                    {numbers.map((number, index) => (
                        <li key={index} className={`page-item ${currentPage === number ? "active" : ""}`}>
                            <a href="" className='page-item' onClick={() => changeCPage(number)}>{number}</a>
                        </li>
                    ))}
                </li>
                <li className='page-item'>
                    <a href=""  className='page-link' onClick={nextPage}>Next</a>
                </li>
            </ul>
       </nav>
    </div>
  )
}

export default Rating
