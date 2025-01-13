import { useState } from "react"
import Navbar from "../Components/Navbar"
import Login from "../Components/Login";
import { SignupPage } from ".";
import Footer from "../Components/Footer";
import FooterAccordion from "../Components/FooterAccordion";

type Pages = "Login" | "Signup" ;

const LoginandSingUpPage = () => {
  const [isOpen, SetIsOpen] = useState<Pages>("Login");


const handleOpen = () => {
  switch (isOpen) {
    case "Login":
     return <Login/>
      break;
    case "Signup":
      return <SignupPage/>
    default:
      return <Login/>
      break;
  }
}



  return (
    <div>
      <Navbar/>
      <div className=" flex flex-col mt-12">
            <div className="max-w-lg mx-auto flex flex-col p-4 ">
              <div className="flex flex-row justify-center">
                <button onClick={() => SetIsOpen("Login")} className={`border-b1 w-full py-2 flex flex-row justify-center items-center   ${isOpen=="Login"  ? ("text-[#2126ab], bg-beyazF3") : ("text-black,bg-[#FFFFFF]")}`}>Giriş Yap</button>
                <button onClick={() => SetIsOpen("Signup")} className={`border-b1 w-full py-2 flex flex-row justify-center items-center  ${isOpen=="Signup" ? ("text-[#2126ab], bg-beyazF3") : ("text-black,bg-[#FFFFFF]")}`}>Üye Ol</button>
              </div>
                {handleOpen()}
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
