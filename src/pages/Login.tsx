import LoginComponent from "../components/input/LoginComponent";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="h-[100vh] w-full grid grid-flow-col grid-cols-12 bg-[url(/assets/loginBackground.png)] bg-no-repeat bg-center bg-contain]">
      <div className="proverb-section w-full col-span-6 px-10 flex justify-center items-center flex-col">
        <div className="proverbs-section">
          <div className=" text-white">
            <h1 className="text-6xl font-semibold">
              <span className="text-8xl text-yellow-400">"</span>Your{" "}
              <span className="text-8xl ">Dream</span>
            </h1>
            <div className="flex justify-center">
              <h1 className="text-6xl font-semibold">
                Our <span className="text-9xl text-yellow-400">Goal</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="logo_section grid grid-flow-row row-span-12 mt-20">
          <div className="row-span-6 flex justify-center items-center">
            <Link to={"/"}>
              <img
                className="object-fill h-20 w-20"
                src="/assets/company-logo.png"
                alt="company logo"
              />
            </Link>
          </div>
          <div className="company-name row-span-6 flex justify-center items-center ">
            <Link to={"/"}>
              <h1 className="font-semibold text-2xl text-white mt-2">
                Job Genie
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white/90 col-span-6 h-full flex justify-center items-center shadow-2xl rounded-l-3xl">
        <div className="px-20 w-[600px] col-span-6">
          <div className="mb-5 text-center">
            <h1 className="text-center text-5xl font-bold text-[--color-text]">
              Welcome
            </h1>
            <p className="text-gray-500">
              Login in to your account to continue
            </p>
          </div>
          <div>
            <LoginComponent placeholder="Username"></LoginComponent>
            <LoginComponent
              placeholder="Password"
              type="password"
            ></LoginComponent>
          </div>
          <div className="w-full flex column gap-5">
            <div className=" w-full">
              <input className="bg-white" type="checkbox" />
              <label className="text-black p-1" htmlFor="#">
                Remember Me
              </label>
            </div>
            <div className="w-full ">
              <Link
                to={"/forgotPassword"}
                className="underline float-right text-[--color-text]"
              >
                Forget Password?
              </Link>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center border border-[--color-text] hover:bg-[--color-text] text-[--color-text] hover:text-white w-full py-1 rounded-3xl">
            <a href="#">
              <button className=" font-semibold hover:font-semibold text-3xl px-10 rounded-xl ">
                Login
              </button>
            </a>
          </div>
          <div className="flex items-center justify-center mt-6 font-normal">
            <span>Don't have an account yet?</span>
            <Link
              className="ml-2 underline text-[--color-text] font-semibold"
              to="/registrationPage"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
