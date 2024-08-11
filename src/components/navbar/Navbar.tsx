import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar col-span-12 flex items-center h-16 justify-between px-3 border-b-2 container mx-auto">
        <div className="logo_section flex col-span-3">
          <img
            className="object-fill h-10 w-10"
            src="/assets/favicon.ico"
            alt="company logo"
          />
          <div className="">
            <h1 className="font-bold pl-2">JobGenie</h1>
            <p className="text-xs pl-2 text-gray-400">
              The Ultimate for Job Seekers
            </p>
          </div>
        </div>
        <div className="nav-main col-span-6">
          <ul className="flex gap-12 items-center justify-center">
            <li>
              <Link to={"/"}>Find Jobs</Link>
            </li>
            <li>
              <Link to={"/"}>For Recuiters</Link>
            </li>
            <li>
              <Link to={"/"}>Blogs</Link>
            </li>
            <li>
              <Link to={"/"}>Career tips</Link>
            </li>
          </ul>
        </div>
        <div className="nav-login col-span-3">
          <button className="pr-8 font-semibold">Login</button>
          <button className="px-5 border-2 py-2 rounded-3xl text-blue-600 font-semibold border-blue-500">
            Register Now
          </button>
        </div>
      </div>
    </>
  );
}
