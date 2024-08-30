import LoginComponent from "../components/input/LoginComponent";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="h-screen w-full grid grid-cols-1 md:grid-cols-12 bg-[url(/assets/loginBackground.webp)] bg-no-repeat bg-center bg-cover">
      {/* Left Side: Hidden on mobile */}
      <div className="hidden md:flex col-span-6 px-10 flex-col justify-center items-center bg-black bg-opacity-50">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-semibold text-center">
            <span className="text-5xl md:text-8xl text-yellow-400">"</span>
            Your <span className="text-5xl md:text-8xl">Dream</span>
          </h1>
          <h1 className="text-4xl md:text-6xl font-semibold text-center">
            Our{" "}
            <span className="text-6xl md:text-9xl text-yellow-400">Goal</span>
          </h1>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <Link to={"/"}>
            <img
              className="object-fill h-16 w-16 md:h-20 md:w-20"
              src="/assets/company-logo.webp"
              alt="company logo"
            />
          </Link>
          <h1 className="text-xl md:text-2xl text-white mt-2">Job Genie</h1>
        </div>
      </div>

      {/* Right Side: Form Section */}
      <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center bg-white/90 rounded-t-3xl md:rounded-l-3xl shadow-2xl">
        <div className="px-6 md:px-10 w-full max-w-sm md:max-w-md">
          <div className="mb-5 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-[--color-text]">
              Welcome
            </h1>
            <p className="text-gray-500">Login to your account to continue</p>
          </div>
          <div className="mb-6">
            <LoginComponent placeholder="Username" />
            <LoginComponent placeholder="Password" type="password" />
          </div>
          <div className="flex gap-4 justify-center md:justify-between flex-wrap">
            <div className="flex items-center">
              <input className="bg-white" type="checkbox" id="rememberMe" />
              <label className="text-black ml-2" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
            <div className="text-right">
              <Link
                to={"/forgotPassword"}
                className="underline text-[--color-text]"
              >
                Forget Password?
              </Link>
            </div>
          </div>
          <div className="transition-all mt-6 flex items-center justify-center border border-[--color-text] hover:bg-[--color-text] text-[--color-text] hover:text-white w-full py-1 rounded-3xl">
            <button className="font-semibold text-xl md:text-3xl px-6 md:px-10 rounded-3xl">
              Login
            </button>
          </div>
          <div className="text-center mt-6">
            <span className="text-sm">Don't have an account yet?</span>
            <Link
              className="ml-2 underline text-[--color-text] font-semibold"
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
        <div className="block md:hidden mt-10">
          <Link
            to={"/"}
            className="bg-black/90 text-white py-2 px-4 rounded-full text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

