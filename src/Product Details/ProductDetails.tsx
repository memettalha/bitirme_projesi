import { useEffect, useState } from "react";
import Navbar from "../Components/Component/Navbar/Navbar";
import Footer from "../Components/Footer";
import FooterAccordion from "../Components/FooterAccordion";
import ProductDetailsComponent from "./ProductDetailsComponent";

export  interface AddProduct {
  id: string;
  title: string;
  name: string;
  weight: number;
  price: number;
  image: string;
  quantity: number;
}

const ProductDetails = () => {
 

  const [cartItems, setCartItems] = useState<AddProduct[]>([]);

  return (
    <div className="">
      <Navbar cartItems={cartItems} setCartItems={setCartItems}/>
      <ProductDetailsComponent  cartItems={cartItems} setCartItems={setCartItems}/>
      <Footer />
      <FooterAccordion />
    </div>
  );
};

export default ProductDetails;
