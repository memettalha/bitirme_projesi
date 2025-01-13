

interface product{
    name:string,
    description:string,
    comments:string,
    rate:string,
    price:number,
    DiscountedPrice:number,
    ImgSrc:string,
  }


const ProductCard = ({name,ImgSrc,description,comments,rate,price,DiscountedPrice}:product) => {
  return (
    <div className="border-8 w-[200px]">
      <img src={ImgSrc} alt="" />
      <p className="">Ürün ismi: {name}</p>
      <p>Kısa Açıklama: {description}</p>
      <p>Yorum Sayısı: {comments}</p>
      <p>Kaç yıldız {rate}</p>
      <p>Fiyat: {price}</p>
      <p>İndirimli Fiyat: {DiscountedPrice}</p>
    </div>
  )
}

export default ProductCard