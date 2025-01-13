import { FormEvent } from "react";
import { BASE_URL } from "../Routes/SingUpPage";
import { setTokensAndAuthUser } from "../Services/api/storage";
import ButtonComponent from "./Component/Button";

interface LoginPayLoad {
  username: string;
  password: string;
  api_key: string;
}

const Login = () => {
  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    const formEl = e.target as HTMLFormElement;

    const formData = new FormData(formEl);

    const data = Object.fromEntries(formData) as unknown as LoginPayLoad;

    data.api_key = "718555";

 

    const response = await fetch(BASE_URL + "/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJson = (await response.json()) as {
      access_token: string ;
      refresh_token: string;
    };
    console.log("responseJson:",responseJson);
    console.log("accessToken:",responseJson.access_token);
    console.log("refreshToken:",responseJson.refresh_token);
  
    console.log("data",data);
    setTokensAndAuthUser(
      responseJson.access_token,
      responseJson.refresh_token
    )

  }
  
  return (
    <div className=" border-beyazF3 border-b ">
      <form
        onSubmit={handleLogin}
        className=" mx-auto border-solid border-2 pt-5 pb-5 mb-5 px-8"
      >
        <div className="relative z-0 w-full mb-3 mt-5 group ">
          <label
            htmlFor="floating_email"
            className=" text-sm  flex justify-start mb-"
          >
            * E-posta
          </label>
          <input
            type="email"
            name="username"
            id="floating_email"
            className="block bg-beyazF7  border-b1 border-beyazE5 rounded px-5 w-full h-12 text-sm "
            placeholder=" "
            required
          />
        </div>
        <div className="relative z-0  mb-3 group">
          <label
            htmlFor="floating_password"
            className=" text-sm flex justify-start mb-3   "
          >
            * Password
          </label>
          <input
            type="password"
            name="password"
            id="floating_password"
            className="block bg-beyazF7 border-b1 border-beyazE5 rounded h-12 py-2.5 px-5 w-full text-sm "
            placeholder=" "
            required
          />
        </div>
        <div className="mb-3 mt-3">
          <a href="" className="ml-72 underline text-sm ">
            Şifremi Unuttum?
          </a>
        </div>

        <div></div>
        <ButtonComponent 
        type="submit"
        className={"bg-zinc-900 p-3 mb-5 text-white w-full text-sm rounded-md"}
         > GİRİŞ YAP</ButtonComponent>
      </form>
    </div>
  );
};

export default Login;
