import { useEffect, useState } from "react";
import Product, {products} from "../Components/Betseller";
import Rating from "../Components/Rating";
import cart from "../assets/Images/ProductList/cart.png"
import AccordionElement from "../Components/Component/Accordion";
import truck from "../assets/Images/ProductList/truck.png";
import safe from "../assets/Images/ProductList/safe.png";
import hundred from "../assets/Images/ProductList/hundred.png";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import trash from "../assets/Images/Cart/trash.png";
import plus from "../assets/Images/Cart/plus.png";
import { AddProduct } from "./ProductDetails";
import { ProductDetails } from "./Product";
import { newProducts , Variant, Ingredient,NutritionFact,AminoAcidFact  } from "./Product";

const ProductDetailsComponent = ({cartItems, setCartItems }:{cartItems:AddProduct[],
    setCartItems: React.Dispatch<React.SetStateAction<AddProduct[]>>
}) => {

  const [sayi, setsayi] = useState<number>(0);
  const handleAddCart = () => {
      if(product && variants && sayi >= 0){
        const newProduct : AddProduct = {
          id:nanoid(),
          title: product.data.name,
          name:variants.aroma,
          weight:variants.size.gram,
          price:variants.price.total_price,
          image:`https://fe1111.projects.academy.onlyjs.com/${variants.photo_src}`,
          quantity:sayi
        }
        setCartItems([...cartItems, newProduct])
      }
  }

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

  const handleIncrease = () => {
    setsayi(sayi + 1);
  };

  const handleDecrease = () => {
    setsayi((prevSayi) => (prevSayi > 0 ? prevSayi - 1 : 0));
  };

  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState<newProducts[]>([]);

  const [productName, setProductName] = useState<string>("");
  const [productPhoto, setPhoto] = useState<any>("");
  const [shortExplanation, setShortExplanation] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [productUsage, setUsages] = useState<string>("");
  const [productFeatures, setFeatures] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productNutrionalContent, setNutriontionalContent] =
    useState<string>("");
  const [productNutrionalFact, setNutrionalFact] = useState<string>("");
  const [variants, setVariants] = useState<Variant | null>(null);
  const [ingredient, setIngredient] = useState<Ingredient | null>(null);
  const [ntrfact, setntrfact] = useState<NutritionFact | null>(null);
  const [amino, setAmino] = useState<AminoAcidFact | null>(null);

  const handleAddProduct = () => {
    const newProduct = {
      name: productName,
      photo: product?.data.variants.map((variant) => (
        <div>{variant.photo_src}</div>
      )),
      shortExplanation: product?.data.short_explanation,
      price: product?.data.variants.map((variant) => (
        <div>{variant.price.total_price}</div>
      )),
    };
    console.log("newProduct", newProduct);
    setProductList([...productList, newProduct]);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fe1111.projects.academy.onlyjs.com/api/v1/products/${id}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const responseJson = await response.json();
        setProduct(responseJson);
        setVariants(responseJson.data.variants[0]);
        setProductName(responseJson.data.name);
        setProductDescription(responseJson.data.explanation.description);
        setShortExplanation(responseJson.data.short_explanation);
      } catch (error) {
        console.log("Error fetching product", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }
  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }

  return (
    <div className="">
      <div className="relative mt-8">
        <div className="flex flex-col max-w-7xl  mx-auto md:flex md:flex-row">
          <div className="w-full md:w-1/2 px-5 md:ml-12 lg:ml-20 flex flex-col justify-start">
            <img
              src={`https://fe1111.projects.academy.onlyjs.com/${variants?.photo_src}`}
              className="lg:w-[full] h-[full]"
            ></img>

            {/* ACCORDION */}
            <div className="hidden md:block lg:hidden">
              <div>
                <p className="mt-3 text-[11px] text-left pt-5 border-t-2 border-beyazF3font-medium">
                  Son Kullanma Tarihi: <span className="ml-1"> 07.2025</span>
                </p>
              </div>
              <div className="mt-5">
                <AccordionElement
                  id={0}
                  className="font-bold bg-white text-black "
                  title={
                    <span style={{ color: "#000000", fontWeight: "bold" }}>
                      ÖZELLİKLER
                    </span>
                  }
                  children={<ul></ul>}
                />
                <AccordionElement
                  id={0}
                  className="font-bold bg-white text-black border-b-2"
                  title={
                    <span style={{ color: "#000000", fontWeight: "bold" }}>
                      BESİN İÇERİĞİ
                    </span>
                  }
                  children={<ul></ul>}
                />
                <AccordionElement
                  id={0}
                  className="font-bold bg-white text-black"
                  title={
                    <span style={{ color: "#000000", fontWeight: "bold" }}>
                      KULLANIM ŞEKLİ
                    </span>
                  }
                  children={<ul></ul>}
                />
              </div>
            </div>
          </div>
          <div className="pb-5 text-left w-full md:w-1/2  flex flex-col">
            {/* İSİM */}
            <div className="ml-6 md:md-0">
              <h1 className="font-bold text-[27px]">{product.data.name}</h1>
              <p className="text-sm text-[#636363]">
                {product.data.short_explanation}
              </p>
              <div className="flex flex-row justify-start  text-fs15">
                <p>{product.data.average_star}</p>
                <p className="text-[#333333] font-bold text-[15px] ml-2">
                  {product.data.comment_count} Yorum
                </p>
              </div>
              <div className="text-[10px] mt-4 pb-4 border-b-[1px] border-[#DDDDDD]">
                <button className="h-9 w-[88px] bg-[#F1F1F1] mr-2  rounded-full">
                  {product.data.tags[0]}
                </button>
                <button className="h-9 w-[88px] bg-[#F1F1F1] rounded-full">
                  {product.data.tags[1]}
                </button>
              </div>
            </div>
            {/*  AROMA ve BOYUT */}
            <div>
              {/* AROMA */}
              <div className="text-left ml-6 md:md-0  lg:w-7/12">
                <h1 className="font-bold mt-3 mb-3">
                  AROMA<span>:</span>
                </h1>
                <div className="flex flex-wrap gap-3">
                  <div>
                    {product.data.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setVariants(variant)}
                        className={`px-5 h-9 text-center text-xs w-auto border-[#E5E5E5] border-[3px]`}
                      >
                        {variant.aroma}
                      </button>
                    ))}
                  </div>
                </div>

                {/* BOYUT */}
                <div></div>
                <div className="">
                  <h1 className="text-[15px] font-bold text-left">BOYUT:</h1>
                  <div className="flex flex-wrap">
                    <div className="relative flex flex-wrap">
                      {product.data.variants.map((variant) => (
                        <button
                          className="border-[3px] border-[#E5E5E5] w-full px-2 h-[64px] flex flex-col justify-center items-center mb-4 mr-3 mt-3"
                          key={variants?.id}
                        >
                          <span className="text-fs15 font-bold">
                            {variants?.size.gram}G {variants?.size.pieces} Adet
                          </span>{" "}
                          <span className="text-fs10">
                            {variants?.size.total_services} Servis{" "}
                          </span>
                        </button>
                      ))}
                      {variants?.price.discount_percentage !== 0 ? (
                        <span className="text-xs bg-kirmizi absolute top-1 right-8  text-white px-2 ">
                          %{variants?.price.discount_percentage} İNDİRİM
                        </span>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FİYAT */}
            <div className="md:hidden lg:block ml-6 md:md-0">
              <div className="flex flex-row justify-between items-center mt-6">
                <p className="text-[17px] text-[#333333] font-bold">
                  {variants?.price.total_price}TL/Servis
                </p>
                <p className="text-[17px] text-[#333333] font-bold">
                  {variants?.price.discounted_price}TL/Servis
                </p>
              </div>
              <div className="flex flex-row gap-8 mt-3 ">
                <div className="flex flex-row justify-center items-center">
                  <button
                    onClick={handleDecrease}
                    className="text-2xl h-[54px] w-8 bg-[#F7F7F7] border-[1px] border-[#DDDDDD]"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={sayi}
                    readOnly
                    className="w-[75px] h-[54px] border-[1px] border-[#DDDDDD] text-center text-xl"
                  />
                  <button
                    onClick={handleIncrease}
                    className="text-2xl h-[54px] w-8 bg-[#F7F7F7] border-[1px] border-[#DDDDDD]"
                  >
                    +
                  </button>
                </div>
                <div className="ml-auto ">
                  <button
                    onClick={handleAddCart}
                    className="bg-black flex items-center justify-center text-white w-full md:w-[350px] h-[55px] rounded-md px-16 md:p-0"
                  >
                    <img src={cart} alt={cart} />
                    <span className="ml-3" onClick={handleAddCart}>Sepete Ekle</span>
                  </button>
                </div>
              </div>
              {
                <div className="flex flex-row  border-[#DDDDDD] mt-5 mb-3 pb-5 border-b-[1px] ">
                  <div className="flex flex-row justify-center items-center text-center mr-8">
                    <img className="" src={truck} alt={truck} />
                    <p className="text-[11px] w-[80px]  ml-2">
                      Aynı Gün Ücretsiz Kargo
                    </p>
                  </div>
                  <div className="flex flex-row justify-center items-center text-center mr-8">
                    <img src={safe} alt={safe} />
                    <p className="text-[11px] w-[80px]  ml-2">
                      750.000+ Mutlu Müşteri
                    </p>
                  </div>
                  <div className="flex flex-row justify-center items-center text-center ">
                    <img src={hundred} alt={hundred} />
                    <p className="text-[11px] w-[80px]  ml-2">
                      Memnuniyet Garantisi
                    </p>
                  </div>
                </div>
              }
            </div>
            {/* ACCORDION */}
            <div></div>

            <div className="flex flex-col md:hidden lg:block ml-6 md:md-0">
              <div>
                <p className="mt-3 text-[11px] font-medium">
                  Son Kullanma Tarihi:<span className="ml-1"> 07.2025</span>
                </p>
              </div>
              <div className="mt-5">
                <AccordionElement
                  id={"0"}
                  className="font-bold bg-white text-black border-0"
                  title={
                    <span style={{ color: "#000000", fontWeight: "bold" }}>
                      ÖZELLİKLER
                    </span>
                  }
                  children={<ul>{product.data.explanation.features}</ul>}
                />
                <AccordionElement
                  id={"0"}
                  className="font-bold bg-white text-black"
                  title={
                    <span style={{ color: "#000000", fontWeight: "bold" }}>
                      BESİN İÇERİĞİ
                    </span>
                  }
                  children={
                    <ul>
                      <div>
                        <table>
                          <tr>
                            <th >BESİN DEĞERLERİ</th>
                            <th >25 g servis için</th>
                          </tr>
                         {/* 
                         <tr>
                            {product.data.explanation.nutritional_content.nutrition_facts.ingredients.map(
                              (ingredients:any) => (
                                <div >
                                  <td >{ingredients.name}</td>
                                  <td >{ingredients.amounts}</td>
                                </div>
                              )
                            )}
                          </tr>
                         */} 
                        </table>
                      </div>
                      <h1>İÇİNDEKİLER</h1>
                      {product.data.explanation.nutritional_content.ingredients.map(
                        (fact) => (
                          <div>
                            <p
                              className="justify-start"
                              onClick={() => setIngredient(fact)}
                            >
                              <span className="font-bold text-lg">
                                {fact.aroma}:
                              </span>
                              <span className="font-normal">{fact.value}</span>
                            </p>
                          </div>
                        )
                      )}

                      <table>
                        <tr>
                          <th>AMİNO ASİT DEĞERLERİ</th>
                          <th>100 G</th>
                        </tr>
                        {
                          /*
                        <tr className="font-normal">
                          {product.data.explanation.nutritional_content.amino_acid_facts.ingredients.map(
                            (ingredients:IngredientAroma) => (
                              <div>
                                <td>{ingredients.name}</td>
                                <td>{ingredients.amounts}</td>
                              </div>
                            )
                          )}
                        </tr>
                          */
                        }
                        <hr />
                      </table>
                    </ul>
                  }
                />
                <AccordionElement
                  id={0}
                  className="font-bold bg-white text-black"
                  title={
                    <span style={{ color: "#000000", fontWeight: "bold" }}>
                      KULLANIM ŞEKLİ
                    </span>
                  }
                  children={<ul>{product.data.explanation.usage}</ul>}
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        {/* FİYAT */}
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-row justify-between items-center mt-6 mr-12">
            <p className="text-[17px] text-[#333333] ml-auto">
              {variants?.price.price_per_servings}TL/Servis
            </p>
          </div>
          <div className="flex flex-row gap-8 mt-3 mr-12 ml-16">
            <div className="flex flex-row justify-center items-center">
              <button
                onClick={handleDecrease}
                className="text-2xl h-[54px] w-8 bg-[#F7F7F7] border-[1px] border-[#DDDDDD]"
              >
                -
              </button>
              <input
                type="number"
                value={sayi}
                readOnly
                className="w-[72px] h-[54px] border-[1px] border-[#DDDDDD] text-center text-xl"
              />
              <button
                onClick={handleIncrease}
                className="text-2xl h-[54px] w-8 bg-[#F7F7F7] border-[1px] border-[#DDDDDD]"
              >
                +
              </button>
              <p className="text-4xl font-bold ml-5">
                {variants?.price.total_price} TL
              </p>
            </div>
            <div className="ml-auto">
              <button
                className="bg-black flex items-center justify-center text-white w-full px-16 sm:px-10 h-[55px] rounded-md"
                onClick={handleAddCart}
              >
                <img src={cart} alt={cart} />
                <span className="ml-3">Sepete Ekle</span>
              </button>
            </div>
          </div>
          {
            <div className="flex flex-row  border-[#DDDDDD] mt-5 mb-3 pb-5 border-b-[1px] ml-16 ">
              <div className="flex flex-row justify-center items-center text-center mr-8">
                <img className="h-16" src={truck} alt={truck} />
                <p className="text-[12px] w-[80px] ml-2">
                  Aynı Gün Ücretsiz Kargo
                </p>
              </div>
              <div className="flex flex-row justify-center items-center text-center mr-8 ">
                <img className="h-12" src={safe} alt={safe} />
                <p className="text-[12px] w-[80px] ml-2">
                  750.000+ Mutlu Müşteri
                </p>
              </div>
              <div className="flex flex-row justify-center items-center text-center h-28">
                <img className="h-12" src={hundred} alt={hundred} />
                <p className="text-[12px] w-[80px] ml-2">
                  Memnuniyet Garantisi
                </p>
              </div>
            </div>
          }
        </div>

        <h1 className="font-bold mt-28 mb-8 text-center">
          SON GÖRÜNTÜLENEN ÜRÜNLER
        </h1>
        <div className="flex items-center justify-center mx-auto">
          <div className="flex flex-wrap max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl ">
            {products.map((product) => (
              <div className="relative w-1/2 md:w-1/3 lg:w-1/6 p-4 text-center">
                <div className=" relative ">
                  <div className="">
                    <img
                      className="w-44 lg:w-36 xl:w-44  mx-auto"
                      src={product.ImgSrc}
                      alt=""
                    />
                    <a href="" className="font-bold w-24">
                      {product.name}
                    </a>
                    <br />
                    <a href="" className="font-light text-b88 text-fs11">
                      {product.description}
                    </a>
                    <p>{product.rate}</p>

                    {product.indYuzd !== "" ? (
                      <p
                        className="absolute  w-16 h-12 -top-4 -right-4 text-xs text-white text-center"
                        style={{ background: "#ED2727" }}
                      >
                        <span className="text-xl text-white">
                          %{product.indYuzd}
                        </span>
                        <br />
                        İNDİRİM
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <p className="text-xs">{product.comments} Yorum</p>
                    <div className="flex flex-row justify-center items-end">
                      <p className="text-xl">{product.price} TL</p>
                      {product.DiscountedPrice !== 0 ? (
                        <p
                          className="line-through font-bold"
                          style={{ color: "#ED2727" }}
                        >
                          {product.DiscountedPrice} TL
                        </p>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Rating />
      <div className="flex justify-center items-center mt-3 mb-4"></div>
      <div>
        <Product />
        <div className="text-center">
          <button className="bg-darkblue w-full ml-5 mr-5 md:w-72 h-12 text-white mt-4 mb-4">
            TÜMÜNÜ GÖR
          </button>
        </div>
      </div>

      <div className="text-left mt-5 mb-24 flex flex-col md:flex md:flex-row justify-normal pl-5 xl:max-w-6xl xl:mx-auto">
        <div>
          <a className="text-[#202AA4]" href="">
            OJS Nutrition
          </a>{" "}
          <span className="mx-1">&gt;</span>
          <a className="text-[#202AA4]" href="">
            Protein
          </a>{" "}
          <span className="mx-1">&gt;</span>
          <a className="text-[#202AA4]" href="">
            PROTEİNLER
          </a>{" "}
          <span className="mx-1">&gt;</span>
        </div>
        <div>
          <a className="text-[#202AA4]" href="">
            WHEY PROTEİNLER
          </a>
        </div>
      </div>
      <div>
        <h1>SEPET</h1>
        <div className="productx">
                        <ul>
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
    </div>
  );
};
export default ProductDetailsComponent;