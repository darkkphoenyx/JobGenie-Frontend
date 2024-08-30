import { Link } from "react-router-dom";
import { FooterNav } from "../cards/FooterNav";

export default function Footer() {
  return (
    <>
      <FooterNav />
      <div className="container mx-auto py-4 bg-gray-100/70 px-10 rounded-2xl footer-start flex items-center justify-between flex-wrap gap-10">
        <div className="left-section flex flex-col flex-wrap justify-center">
          <div className="company-section flex items-center">
            <img
              className="object-fill h-12 w-12"
              src="/assets/company-logo.webp"
              alt="company logo"
            />
            <Link to="/">
              <div className="company-name pl-2">
                <h1 className="font-semibold">Job Genie</h1>
                <p className="text-xs text-gray-400">
                  The Ultimate for Job Seekers
                </p>
              </div>
            </Link>
          </div>
          <div className="company-address text-gray-400 sm:text-sm text-xs">
            <h1 className="text-gray-500">Mitrapark-10, Chabahil</h1>
            <h1 className="text-gray-500">Kathmandu, Nepal</h1>
          </div>
        </div>
        <div className="right-section flex flex-col">
          <div className="newsletter-section">
            <h1 className="sm:text-3xl text-xl font-medium">Newsletter</h1>
            <p className="text-gray-500 sm:text-sm text-xs">
              Subscribe to our newsletter to get the latest Job Genie news
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-y-2 mt-1">
            <div className="send-email-section flex bg-white border border-gray-300 rounded-3xl px-4 sm:w-[70%] w-full mr-3 items-center">
              <img
                className="pr-2 sm:h-4 h-3"
                src="/assets/mail.svg"
                alt="mail icon"
              />
              <input
                className="outline-none text-sm bg-white py-3 w-full sm:placeholder:text-sm placeholder:text-xs"
                type="email"
                placeholder="What's your work email?"
              />
            </div>
            <Link to="#">
              <button className="sm:text-base text-sm hover:text-[--color-text] transition-all hover:bg-white border hover:border-[--color-text] text-white bg-[--color-text] px-3 py-2 rounded-3xl">
                Subscribe
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-middle container mx-auto py-10 border-b transition-all">
        <p className="text-gray-500 px-5 sm:text-base text-sm">
          © 2023 Job Genie Business Corporation. "Job Genie" and the Job Genie
          logo are registered trademarks of the company. *International payments
          may be subject to a currency conversion fee. Flex extended payment
          terms and other optional international payments may incur
          transactional or financing fees. Please see the
          <span className="underline px-1">
            <Link to="/">Platform Agreement</Link>
          </span>
          and
          <span className="underline px-1">
            <Link to="/">Payment Card Addendum</Link>
          </span>
          for additional details.
          <p className="mt-5">
            Please visit our
            <span className="underline px-1">
              <Link to="/">Terms of Service</Link>
            </span>
            for more details. Read our
            <span className="underline px-1">
              <Link to="/">Editorial Guidelines</Link>
            </span>
            and
            <span className="underline px-1">
              <Link to="/">Privacy Policy</Link>
            </span>
          </p>
        </p>
      </div>
      <div className="footer-bottom flex justify-center md:justify-between gap-5 px-5 flex-wrap container mx-auto text-gray-500 py-5">
        <div className="social-links">
          <ul className="flex gap-x-5 flex-wrap justify-between">
            <li className="hover:underline hover:text-gray-500/70">
              <a href="#">Instagram</a>
            </li>
            <li className="hover:underline hover:text-gray-500/70">
              <a href="#">Twitter</a>
            </li>
            <li className="hover:underline hover:text-gray-500/70">
              <a href="#">Facebook</a>
            </li>
            <li className="hover:underline hover:text-gray-500/70">
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="copyrights hover:underline flex flex-wrap hover:text-gray-500/70">
          &#169; Job Genie 2024. All rights reserved
        </div>
      </div>
    </>
  );
}
