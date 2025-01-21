import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './App';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { LoginPage,ProductList,ContactPage,SSSPage, SignupPage,AccountPage, AboutUs, OldOrder,category} from './Routes';
import ProductDetails from "./Routes/ProductDetails"
import PaymentPage from './Routes/PaymentPage.js';
import { betseller } from './Routes';
import { ProfilePage } from './Routes/profile/page';
import { UsersPage } from './Routes/Users';
import { UsersLoader } from './Routes/Users/loader';
import LoginandSingUpPage from './Routes/LoginPage';
import Login from './Components/Login';
import { CartProvider } from './Components/Component/CartContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    loader:betseller,
  },
  {
    path: "/ProductList/:categoryId",
    element: <ProductList  />,
    loader:category,
  },
  {
    path:"Contact",
    element: <ContactPage/>

  },  
  {
    path:"SSS",
    element: <SSSPage/>
  },
  {
    path:"account",
    element: <LoginandSingUpPage/>,
    children : [
      {
        path:"login",
        element: <Login />
      },
      {
        path:"register",
        element: <SignupPage />
      }
    ]
  },
  {
    path:"Singup",
    element: <SignupPage/>
  },{
    path:"Account",
    element:<AccountPage/>
  },{
    path:"ProductDetails/:id",
    element:<ProductDetails/>,
    loader:betseller
  },{
    path:"About",
    element:<AboutUs/>
  },{
    path:"OldOrder",
    element:<OldOrder/>
  },
  {
    path:"Payment",
    element:<PaymentPage/>
  },{
    path:"/profile",
    element: <ProfilePage/>
  },{
    path:"/users",
    element:<UsersPage/>,
    loader: UsersLoader
  }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartProvider> 
  <RouterProvider router={router} />
</CartProvider>
);
