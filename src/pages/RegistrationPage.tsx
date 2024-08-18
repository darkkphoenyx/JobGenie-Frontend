import { Link } from "react-router-dom";
import RegisterCompoent from "../components/input/RegisterCompoent";

export default function RegistrationPage() {
  return (
    <div className="h-[100vh] w-full grid grid-flow-col grid-cols-12 bg-[url(/assets/loginBackground.png)] bg-no-repeat bg-center bg-contain]">
      <div className="bg-white/80 col-span-6 h-full flex justify-center items-center shadow-2xl rounded-r-3xl">
        <div className="px-20 col-span-6 mt-3">
          <div className="mb-3 text-center">
            <h1 className="text-center text-4xl font-bold text-[--color-text]">
              Employee Registration
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Register to find a job and get access to all services for
              employees.
            </p>
          </div>
          <RegisterCompoent />
          <div className="flex items-center justify-center mt-3 font-normal">
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
    </div>
  );
}
