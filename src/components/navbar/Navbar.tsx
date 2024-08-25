import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="shadow-md sticky top-0 bg-white/90">
      <div className="navbar flex items-center h-[12vh] justify-between px-3 container mx-auto">
        <div className="logo_section flex items-center space-x-2">
          <img
            className="object-fill h-12 w-12"
            src="/assets/company-logo.png"
            alt="company logo"
          />
          <Link to={"/"}>
            <div className="company-name">
              <h1 className="font-semibold">Job Genie</h1>
              <p className="text-xs text-gray-400">
                The Ultimate for Job Seekers
              </p>
            </div>
          </Link>
        </div>
        <div className="nav-main">
          <ul className="flex gap-12 items-center">
            <li>
              <Link to={"/"}>Find Jobs</Link>
            </li>
            <li>
              <Link to={"/recruiter"}>For Recruiters</Link>
            </li>
            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link to={"/careertips"}>Career tips</Link>
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
  );
}
