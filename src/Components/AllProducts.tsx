import React, { useEffect } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Footer from "../Components/Footer"
import Accordion from '../Components/FooterAccordion'
import { useState } from 'react'
import { LoaderFunction, LoaderFunctionArgs, useNavigate } from 'react-router-dom'
import StarRating from '../Components/Component/StarRating'
import {Link} from "react-router-dom"
import { useParams } from 'react-router-dom'

interface PriceInfo {
  profit: number | null;
  total_price: number;
  discounted_price: number | null;
  price_per_servings: number;
  discount_percentage: number | null;
}

interface Product {
  name: string;
  short_explanation: string;
  slug: string;
  price_info: PriceInfo;
  photo_src: string;
  comment_count: number;
  average_star: number;
  id: string;
}

interface ProductList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
}

interface ApiResponse {
  status: string;
  data: ProductList;
}

const AllProducts = () => {
  return (
    <div>
      
    </div>
  )
}

export default AllProducts
