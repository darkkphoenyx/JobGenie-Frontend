import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className=" md:block hidden ">
          <div className="shadow-md w-full  bg-white/90 z-50 flex items-center justify-between px-5 gap-5">
            <div className="logo_section flex items-center space-x-2">
              <img
                className="object-fill h-12 w-12"
                src="/assets/company-logo.webp"
                alt="company logo"
              />
              <Link to={"/"}>
                <div className="company-name text-xs sm:text-base">
                  <h1 className="font-semibold">Job Genie</h1>
                  <p className="text-xs text-gray-400">
                    The Ultimate for Job Seekers
                  </p>
                </div>
              </Link>
            </div>
            <div className="navbar flex">
              <div className="flex items-center h-[12vh] justify-between px-3 container mx-auto">
                <div className="nav-main h-max font-medium">
                  <ul className="flex gap-12 items-center my-9">
                    <li className="h-6">
                      <Link to={"/"}>
                        {" "}
                        {location.pathname == "/" ? (
                          <p className="border-b-2 border-[--color-text] text-[--color-text]">
                            Find Job
                          </p>
                        ) : (
                          "Find Job"
                        )}
                      </Link>
                    </li>
                    <li className="h-6">
                      <Link to={"/recruiter"}>
                        {location.pathname == "/recruiter" ? (
                          <p className="border-b-2 border-[--color-text] text-[--color-text]">
                            For Recruiters
                          </p>
                        ) : (
                          "For Recruiters"
                        )}
                      </Link>
                    </li>
                    <li className="h-6">
                      <Link to={"/blogs"}>
                        {location.pathname == "/blogs" ? (
                          <p className="border-b-2 border-[--color-text] text-[--color-text]">
                            Blogs
                          </p>
                        ) : (
                          "Blogs"
                        )}
                      </Link>
                    </li>
                    <li className="h-6">
                      <Link to={"/careertips"}>
                        {location.pathname == "/careertips" ? (
                          <p className="border-b-2 border-[--color-text] text-[--color-text]">
                            Career tips
                          </p>
                        ) : (
                          "Career tips"
                        )}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="nav-login">
                  <Link to={"/login"}>
                    <button className="px-4 mr-2 font-semibold transition-all rounded-3xl py-2 hover:bg-gray-400/70">
                      Login
                    </button>
                  </Link>
                  <Link to={"/register"}>
                    <button className="hover:text-white transition-all hover:bg-[--color-text] px-5 border py-2 rounded-3xl text-[--color-text] font-semibold border-[--color-text]">
                      Register Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:hidden hamburger-menu z-50 bg-white flex-col justify-center">
          <div className="logo_section flex items-center space-x-2 w-[50%]">
            <img
              className="object-fill h-12 w-12"
              src="/assets/company-logo.webp"
              alt="company logo"
            />
            <Link to={"/"}>
              <div className="company-name text-xs sm:text-base">
                <h1 className="font-semibold">Job Genie</h1>
                <p className="text-xs text-gray-400">
                  The Ultimate for Job Seekers
                </p>
              </div>
            </Link>
          </div>
          <button onClick={() => setVisible(!visible)}>
            <div>
              <img
                className="pl-3"
                src="/assets/menu.svg"
                alt="hamburger menu"
              />
            </div>
            {visible ? (
              <div className="menu">
                <ul className="flex flex-col items-center">
                  <li>
                    <Link to={"/"}>
                      {" "}
                      {location.pathname == "/" ? (
                        <p className="border-b-2 border-[--color-text] text-[--color-text]">
                          Find Job
                        </p>
                      ) : (
                        "Find Job"
                      )}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/recruiter"}>
                      {" "}
                      {location.pathname == "/recruiter" ? (
                        <p className="border-b-2 border-[--color-text] text-[--color-text]">
                          For Recruiters
                        </p>
                      ) : (
                        "For Recruiters"
                      )}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/blogs"}>
                      {location.pathname == "/blogs" ? (
                        <p className="border-b-2 border-[--color-text] text-[--color-text]">
                          Blogs
                        </p>
                      ) : (
                        "Blogs"
                      )}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/careertips"}>
                      {location.pathname == "/careertips" ? (
                        <p className="border-b-2 border-[--color-text] text-[--color-text]">
                          Career tips
                        </p>
                      ) : (
                        "Career tips"
                      )}
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </button>
        </div>
      </div>
    </>
  );
}
