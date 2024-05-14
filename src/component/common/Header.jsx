import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    console.log("show menu");
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <header>
        <div className=" bg-primary">
          <nav className="flex items-center justify-between bg-primary px-[277px] py-[14] font-josefin text-white">
            <div>
              <CiMail className="inline-block" />
              makfnas@gmail.com
            </div>
            <div className="flex ">
              <LuPhoneCall className="inline-block h-5 w-5 pt-1" />
              (12345)67890
            </div>
            <div className="flex space-x-4 ">
              <span> English</span>
              <span> USD</span>
              <span>
                <Link to="/login">Login</Link>
              </span>
              <span> Wishlist</span>
              <span>
                <FaShoppingCart className="inline-block" />
              </span>
            </div>
          </nav>
        </div>
        <nav className="container flex justify-between py-[19px]">
          <div className="flex items-center gap-[90px]">
            <p className="text-semibold leading-auto inline-block text-[34px] text-primary-dark hover:text-secondary hover:transition-all">
             <Link> Hekto</Link>
            </p>
            <div
              className={` fixed bottom-0 right-0 top-0 w-[50%] place-items-center bg-orange-400 transition-all ${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"} z-20 flex flex-col p-8 ease-linear md:static md:w-auto md:flex-row md:gap-4 md:bg-transparent  md:p-0 `}
            >
              <button className="md:hidden ">
                <IoMdClose onClick={toggleMenu} />
              </button>
              <span className="hover:text-secondary "><Link to="/">Home</Link></span>
              <span className="hover:text-secondary"><Link to='/Pages'>Pages</Link></span>
              <span className="hover:text-secondary">Products</span>
              <span className="hover:text-secondary">Blog</span>
              <span className="hover:text-secondary">Shop</span>
              <span className="hover:text-secondary">Contact</span>
            </div>
          </div>

          <HiMenuAlt3 onClick={toggleMenu} className="text-3xl md:hidden " />
          <div className="hidden lg:flex">
            <form>
              <input
                type="text"
                className="border-2 border-primary focus:rounded-md focus:border-secondary focus:outline-none focus:transition-all"
              />
            </form>
            <button className="bg-secondary px-2 py-1">
              <IoSearch className=" text-white" />
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div
            onClick={toggleMenu}
            className="fixed  bottom-0 left-0 right-0 top-0 z-10 bg-[rgb(0,0,0,0.5)] "
          ></div>
        )}
      </header>
    </>
  );
}
