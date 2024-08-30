import { Link } from "react-router-dom";
import RegisterCompoent from "../components/input/RegisterCompoent";

export default function RegistrationPage() {
  return (
    <div className="relative h-screen w-full bg-[url(/assets/loginBackground.webp)] bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Form Section */}
        <div className="bg-white/80 flex flex-col justify-center items-center p-1 md:p-0 shadow-2xl rounded-md md:rounded-r-3xl">
          <div className="w-full max-w-md">
            <div className="mb-6 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-[--color-text]">
                Employee Registration
              </h1>
              <p className="text-gray-500 text-xs md:text-sm mt-2">
                Register to find a job and get access to all services for
                employees.
              </p>
            </div>
            <RegisterCompoent />
            <div className="flex items-center justify-center mt-4 font-normal text-sm lg:text-base">
              <span>Already have an account?</span>
              <Link
                className="ml-2 underline text-[--color-text] font-semibold"
                to="/login"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Background Image and Company Info */}
        <div className="hidden md:flex flex-col justify-center items-center p-6 md:px-12 bg-transparent">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-semibold">
              <span className="text-5xl md:text-8xl text-yellow-400">"</span>
              Your <span className="text-5xl md:text-8xl">Dream</span>
            </h1>
            <div className="flex justify-center mt-2">
              <h1 className="text-4xl md:text-6xl font-semibold">
                Our{" "}
                <span className="text-5xl md:text-9xl text-yellow-400">
                  Goal
                </span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center mt-12">
            <Link to={"/"}>
              <img
                className="object-fill h-16 w-16 md:h-20 md:w-20"
                src="/assets/company-logo.webp"
                alt="company logo"
              />
            </Link>
            <h1 className="font-semibold text-xl md:text-2xl text-white mt-2">
              Job Genie
            </h1>
          </div>
        </div>
        <div className=" block md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <Link
            to={"/"}
            className="bg-black/90 text-white py-2 px-4 rounded-full text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Back to Home Button: Visible only on mobile */}
    </div>
  );
}
