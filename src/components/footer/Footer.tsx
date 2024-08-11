import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="bg-blue-500/10 pt-10">
        <div className="container mx-auto py-5 bg-white grid-cols-2 flex justify-between items-center px-10 rounded-2xl">
          <div className="company-location-section grid-rows-2">
            <div className="logo_section flex">
              <img
                className="object-fill h-10 w-10"
                src="/assets/favicon.ico"
                alt="company logo"
              />
              <div>
                <h1 className="font-semibold  pl-2">JobGenie</h1>
                <p className="text-xs pl-2 text-gray-400">
                  The Ultimate for Job Seekers
                </p>
              </div>
            </div>
            <div className="text-gray-400 mt-3">
              <h1 className="text-gray-500 text-sm">Mitrapark-10, Chabahil</h1>
              <h1 className="text-gray-500 text-sm">Kathmandu, Nepal</h1>
            </div>
          </div>
          <div className="newsletter-section w-2/5">
            <h1 className="text-3xl font-medium">Newsletter</h1>
            <p className="text-gray-500 text-sm">
              Subscribe to our newletter to get the latest JobGenie news
            </p>
            <div className="flex mt-3">
              <div className="flex  bg-white border border-gray-300 rounded-3xl px-4 w-[300px] mr-3">
                <img className="pr-2" src="/assets/mail.svg" alt="mail icon" />
                <input
                  className="outline-none text-sm bg-white py-3 w-full"
                  type="email"
                  placeholder="Whats your work email?"
                />
              </div>
              <button className="hover:text-[--color-text] hover:bg-white border hover:border-[--color-text] text-white bg-[--color-text] px-3 py-2 rounded-3xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="footer-middle container mx-auto py-10 border-b">
          <p className="text-gray-500">
            © 2023 Jobstera Business Corporation. "Jobstera" and the Jobstera
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
        <div className="footer-bottom flex justify-between container mx-auto text-gray-500 py-5">
          <div className="social-links">
            <ul className="flex gap-20">
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className="copyrights">JobGenie 2024. all Rights Reserved</div>
        </div>
      </div>
    </>
  );
}
