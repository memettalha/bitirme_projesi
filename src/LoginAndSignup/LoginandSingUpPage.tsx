import { useState } from "react"
import Navbar from "../Components/Component/Navbar/Navbar"
import Login from "../Components/Login";
import { SignupPage } from "../Routes";
import Footer from "../Components/Footer";
import FooterAccordion from "../Components/FooterAccordion";
import { Link, useLocation, useNavigate } from "react-router-dom";


const LoginandSingUpPage = () => {
  const [isOpen, SetIsOpen] = useState("true");

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div>
      <Navbar/>
      <div className=" flex flex-col mt-12">
            <div className="max-w-lg mx-auto flex flex-col p-4 ">
              <div className="flex flex-row justify-center">
                <button  onClick={() => navigate("/account/login")} className={`border-b1 w-full py-2 flex flex-row justify-center items-center   ${isOpen=="Login"  ? ("text-[#2126ab], bg-beyazF3") : ("text-black,bg-[#FFFFFF]")}`}>Giriş Yap</button>
                <button  onClick={() => navigate("/account/register")} className={`border-b1 w-full py-2 flex flex-row justify-center items-center  ${isOpen=="Signup" ? ("text-[#2126ab], bg-beyazF3") : ("text-black,bg-[#FFFFFF]")}`}>Üye Ol</button>
              </div>
                {location.pathname === '/account/login' && <Login/>}
                {location.pathname === '/account/register' && <SignupPage/>}
            </div>
        </div>
      <div>

      </div>
     <Footer/>
     <FooterAccordion/>
    </div>
  )
}

export default LoginandSingUpPage
