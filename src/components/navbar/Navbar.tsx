import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  return (
    <div className="navbar sticky top-0 bg-white/90 shadow-md z-50">
      <div className="flex items-center container mx-auto px-4 py-2 justify-between">
        <div className="flex items-center space-x-2">
          <img
            className="object-cover h-10 w-10"
            src="/assets/company-logo.webp"
            alt="company logo"
          />
          <Link to="/">
            <div className="text-xs sm:text-base">
              <h1 className="font-semibold text-xl">Job Genie</h1>
              <p className="text-gray-400 text-xs">The Ultimate for Job Seekers</p>
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-8 font-medium">
          <NavLink to="/" label="Find Job" currentPath={location.pathname} />
          <NavLink
            to="/recruiter"
            label="For Recruiters"
            currentPath={location.pathname}
          />
          <NavLink to="/blogs" label="Blogs" currentPath={location.pathname} />
          <NavLink
            to="/careertips"
            label="Career Tips"
            currentPath={location.pathname}
          />
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/login">
            <button className="px-4 py-2 font-semibold transition-all rounded-3xl hover:bg-gray-400/70 active:translate-y-0.5">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-5 py-2 border rounded-3xl text-[--color-text] font-semibold border-[--color-text] hover:bg-[--color-text] hover:text-white transition-all active:translate-y-0.5">
              Register Now
            </button>
          </Link>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={() => setVisible(!visible)}>
            <img className="w-6 h-6" src="/assets/menu.svg" alt="menu" />
          </button>
        </div>
      </div>
      {visible && (
        <div className="lg:hidden flex flex-col items-center bg-white shadow-md">
          <NavLinkMobile
            to="/"
            label="Find Job"
            currentPath={location.pathname}
            setVisible={setVisible}
          />
          <NavLinkMobile
            to="/recruiter"
            label="For Recruiters"
            currentPath={location.pathname}
            setVisible={setVisible}
          />
          <NavLinkMobile
            to="/blogs"
            label="Blogs"
            currentPath={location.pathname}
            setVisible={setVisible}
          />
          <NavLinkMobile
            to="/careertips"
            label="Career Tips"
            currentPath={location.pathname}
            setVisible={setVisible}
          />
          <Link to="/login" onClick={() => setVisible(false)}>
            <p className="mt-1 py-1 text-[--color-text] hover:bg-gray-200 transition-all border border-[--color-text] px-10 rounded-3xl font-medium">
              Login
            </p>
          </Link>
          <Link to="/register" onClick={() => setVisible(false)}>
            <p className="my-2 py-1 text-white hover:bg-gray-200 bg-[--color-text] transition-all border border-[--color-text] px-10 rounded-3xl font-medium">
              Register Now
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

function NavLink({
  to,
  label,
  currentPath,
}: {
  to: string;
  label: string;
  currentPath: string;
}) {
  const isActive = currentPath === to;
  return (
    <Link to={to}>
      <p
        className={`transition-all duration-300 ease-in-out ${
          isActive
            ? "border-b-2 border-[--color-text] text-[--color-text]"
            : "hover:text-[--color-text]"
        }`}
      >
        {label}
      </p>
    </Link>
  );
}

function NavLinkMobile({
  to,
  label,
  currentPath,
  setVisible,
}: {
  to: string;
  label: string;
  currentPath: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const isActive = currentPath === to;
  return (
    <Link to={to} onClick={() => setVisible(false)}>
      <p
        className={`py-2 px-4 text-sm transition-all ${
          isActive ? "bg-gray-200 text-[--color-text]" : "hover:bg-gray-200"
        }`}
      >
        {label}
      </p>
    </Link>
  );
}
