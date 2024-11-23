import SpamLogo from "../assets/SpamLogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg  dark:bg-gray-900 mt-28 max-w-screen-xl mx-auto">
        <div className="w-full max-w-screen-xl mx-auto py-24 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href=""
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={SpamLogo} className="h-8" alt="Spam Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                SPAM
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline me-4 md:me-6">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline me-4 md:me-6">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="" className="hover:underline">
              SPAM™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
