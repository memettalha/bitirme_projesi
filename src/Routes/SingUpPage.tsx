import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import InputComponent from "../Components/Component/Input";
import { nanoid } from "nanoid";

interface RegisterPayLoad{
  firstName: string;
  lastName: string;
  email:string;
  password : string;
  password2:string;
  api_key:string;
}

export const BASE_URL = "https://fe1111.projects.academy.onlyjs.com/api/v1";


const SignupPage = () => {
  
  async function handleRegister(e:FormEvent){
    e.preventDefault();
  
    const formEl = e.target as HTMLFormElement;
  
    const formData = new FormData(formEl);
    
    const data = Object.fromEntries(formData) as unknown as RegisterPayLoad;
    
    data.password2 = data.password
    data.api_key = "718555";

    const response =  await fetch(BASE_URL +"/auth/register",{
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })   
    const responseJson = await response.json()
    console.log(responseJson,"responseJson")
    console.log(data,"data")

    const [inputValue, setInputValue] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value)
    }
  
  }
  return (
    <div className=" w-[460px] border-beyazF3 border-b">
      <form onSubmit={handleRegister} className=" mx-auto border-solid border-2 pt-5 pb-5 mb-5 px-8">
        <div className="flex flex-col md:flex md:flex-row">
          <div className="relative z-0 w-full mb-3 mt-5 group md:mr-5 ">
            <label
              htmlFor="email"
              className="text-sm flex justify-start mb-3 "
            >
              * Ad
            </label>
            <input
              type="text"
              name="first_name"
              id="floating_name"
              className="block bg-beyazF7  border-b1 border-beyazE5 rounded px-5 w-full h-12 text-sm "
              placeholder=" "
              required
            />

          </div>
          <div className="relative z-0 w-full mb-3 mt-5 group ">
            <label
              htmlFor="email"
              className=" text-sm  flex justify-start mb-3 "
            >
              * Soyad
            </label>
            <input
              type="text"
              name="last_name"
              id="surname"
              className="block bg-beyazF7  border-b1 border-beyazE5 rounded px-5 w-full h-12 text-sm "
              placeholder=" "
              required
            />
          </div>
        </div>
        <div className="relative z-0  mb-3 group">
          <label
            htmlFor="email"
            className=" text-sm flex justify-start mb-3   "
          >
            * Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block bg-beyazF7  border-b1 border-beyazE5 rounded h-12 py-2.5 px-5 w-full text-sm "
            placeholder=" "
            required
          />
        </div>
        <div className="relative z-0  mb-3 group">
          <label
            htmlFor="password"
            className=" text-sm flex justify-start mb-3   "
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="floating_password"
            className="block bg-beyazF7  border-b1 border-beyazE5 rounded h-12 py-2.5 px-5 w-full text-sm "
            placeholder=" "
            required
          />
        </div>
        <div></div>

        <button
          type="submit"
          className="bg-zinc-900 p-3 mt-5 mb-5 text-white w-full text-sm rounded-md"
        >
          ÜYE OL
        </button>
        <p>
          Zaten hesabınız var mı ?
          <Link to="/Login" className="text-[#2126AB]  hover:underline ">
            Giriş Yap
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
