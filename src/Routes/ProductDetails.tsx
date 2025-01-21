import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FooterAccordion from "../Components/FooterAccordion";
import Product, { products } from "../Components/Betseller";
import Rating from "../Components/Rating";
import cart from "../assets/Images/ProductList/cart.png";
import AccordionElement from "../Components/Component/Accordion";
import truck from "../assets/Images/ProductList/truck.png";
import safe from "../assets/Images/ProductList/safe.png";
import hundred from "../assets/Images/ProductList/hundred.png";
import { useParams } from "react-router-dom";
import { useUserStore } from "../Components/user-store";
import { BiExport, BiTrash } from "react-icons/bi";
import { nanoid } from "nanoid";
import ProductDetailsLoader from "../Components/ProductDetailsLoader";
import trash from "../assets/Images/Cart/trash.png";
import plus from "../assets/Images/Cart/plus.png";
import ProductDetailsComponent from "../Components/Component/ProductDetailsComponent";

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
