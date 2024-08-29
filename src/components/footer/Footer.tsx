import { Link } from "react-router-dom";
import { FooterNav } from "../cards/FooterNav";

export default function Footer() {
  return (
    <>
      <FooterNav />
      <div className="">
        <div className="container mx-auto py-5 bg-gray-100/70 px-10 rounded-2xl footer-start flex items-center justify-between flex-wrap gap-10">
          <div className="left-section flex flex-col flex-wrap justify-center">
            <div className="company-section flex">
              <img
                className="object-fill h-12 w-12"
                src="/assets/company-logo.webp"
                alt="company logo"
              />
              <Link to={"/"}>
                <div className="company-name">
                  <h1 className="font-semibold pl-2">Job Genie</h1>
                  <p className="text-xs pl-2 text-gray-400">
                    The Ultimate for Job Seekers
                  </p>
                </div>
              </Link>
            </div>
            <div className="company-address text-gray-400">
              <h1 className="text-gray-500 text-sm">Mitrapark-10, Chabahil</h1>
              <h1 className="text-gray-500 text-sm">Kathmandu, Nepal</h1>
            </div>
          </div>
          <div className="right-section">
            <div className="Newsletter-section flex flex-col">
              <h1 className="text-3xl font-medium">Newsletter</h1>
              <p className="text-gray-500 text-sm">
                Subscribe to our newletter to get the latest Job Genie news
              </p>
            </div>
            <div className="flex items-center flex-wrap gap-y-2 mt-1">
              <div className="mt-1 send-email-section flex bg-white border border-gray-300 rounded-3xl px-4 sm:w-[70%] w-full mr-3 items-center">
                <img className="pr-2 h-4" src="/assets/mail.svg" alt="mail icon" />
                <input
                  className="outline-none text-sm bg-white py-3 w-full"
                  type="email"
                  placeholder="Whats your work email?"
                />
              </div>
              <a href="#">
                <button className="hover:text-[--color-text] transition-all hover:bg-white border hover:border-[--color-text] text-white bg-[--color-text] px-3 py-2 rounded-3xl">
                  Subscribe
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-middle container mx-auto py-10 border-b transition-all">
          <p className="text-gray-500 px-5">
            © 2023 Job Genie Business Corporation. "Job Genie" and the Job Genie
            logo are registered trademarks of the company. *International
            payments may be subject to a currency conversion fee. Flex extended
            payment terms and other optional international payments may incur
            transactional or financing fees. Please see the
            <span className="underline px-1">
              <Link to={"/"}>Platform Agreement</Link>
            </span>
            and
            <span className="underline px-1">
              <Link to={"/"}>Payment Card Addendum</Link>
            </span>
            for additional details.
            <p className="mt-5">
              Please visit our
              <span className="underline px-1">
                <Link to={"/"}>Terms of Service</Link>
              </span>
              for more details. Read our
              <span className="underline px-1">
                <Link to={"/"}>Editorial Guidelines </Link>
              </span>
              and
              <span className="underline px-1">
                <Link to={"/"}>Privacy Policy</Link>
              </span>
            </p>
          </p>
        </div>
        <div className="footer-bottom flex justify-center md:justify-between gap-5 px-5 flex-wrap container mx-auto text-gray-500 py-5">
          <div className="social-links ">
            <ul className="flex gap-x-5 flex-wrap justify-between ">
              <li className="hover:underline">
                <a href="#">Instagram</a>
              </li>
              <li className="hover:underline">
                <a href="#">Twitter</a>
              </li>
              <li className="hover:underline">
                <a href="#">Facebook</a>
              </li>
              <li className="hover:underline">
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className="copyrights hover:underline flex flex-wrap">
            Job Genie 2024. all Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
}
