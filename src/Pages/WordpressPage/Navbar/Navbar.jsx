import { FaAppStore, FaArrowRightLong } from "react-icons/fa6";
import ostadLogo from "../../../assets/ostad_logo.png";
import ostadText from "../../../assets/ostad_text.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import ukFlag from "../../../assets/uk.png";
import searchText from "../../../assets/search.png";
import starIcon from "../../../assets/star.png";
import { AiOutlineAndroid } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiMenu3Fill, RiWindowsLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import AllCourseElements from "./AllCourseElements";

const Navbar = () => {
  // nav Item for xl or larger device
  const navElementsXl = (
    <>
      <li>
        <NavLink to="/codeMama">কোড মামা</NavLink>
      </li>
      <li>
        <NavLink to="/courses">ফ্রী কোর্স</NavLink>
      </li>
      <li>
        <NavLink to="/blog">ব্লগ</NavLink>
      </li>
      <li>
        <details>
          <summary>ডাউনলোড</summary>
          <ul className="p-2 text-base font-semibold">
            <li>
              <a href="https://play.google.com" target="_blank">
                <AiOutlineAndroid className="text-2xl" /> Android{" "}
                <MdOutlineFileDownload className="text-2xl ml-6" />{" "}
              </a>
            </li>
            <li>
              <a href="https://www.apple.com/app-store" target="_blank">
                <FaAppStore className="text-2xl" /> iOS/Mac{" "}
                <MdOutlineFileDownload className="text-2xl ml-6" />
              </a>
            </li>
            <li>
              <a href="https://apps.microsoft.com" target="_blank">
                <RiWindowsLine className="text-2xl" /> Windows{" "}
                <MdOutlineFileDownload className="text-2xl ml-6" />
              </a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  // Nav element for lg device
  const navElementsLg = (
    <>
      <li>
        <NavLink to="/codeMama">কোড মামা</NavLink>
      </li>
      <li>
        <details>
          <summary>আরও</summary>
          <ul className="p-2 text-base font-semibold relative">
            <li>
              <NavLink to="/courses">ফ্রী কোর্স</NavLink>
            </li>
            <li>
              <NavLink to="/blog">ব্লগ</NavLink>
            </li>
            <li>
              <details>
                <summary>ডাউনলোড</summary>
                <ul className="p-2 text-base bg-white font-semibold absolute">
                  <li>
                    <a href="https://play.google.com" target="_blank">
                      <AiOutlineAndroid className="text-2xl" /> Android{" "}
                      <MdOutlineFileDownload className="text-2xl ml-6" />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apple.com/app-store" target="_blank">
                      <FaAppStore className="text-2xl" /> iOS/Mac{" "}
                      <MdOutlineFileDownload className="text-2xl ml-6" />
                    </a>
                  </li>
                  <li>
                    <a href="https://apps.microsoft.com" target="_blank">
                      <RiWindowsLine className="text-2xl" /> Windows{" "}
                      <MdOutlineFileDownload className="text-2xl ml-6" />
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  // nav Element for md device
  const navElementsMd = (
    <>
      <li>
        <details>
          <summary>আরও</summary>
          <ul className="p-2 text-base font-semibold relative">
            <li>
              <NavLink to="/codeMama">কোড মামা</NavLink>
            </li>
            <li>
              <NavLink to="/courses">ফ্রী কোর্স</NavLink>
            </li>
            <li>
              <NavLink to="/blog">ব্লগ</NavLink>
            </li>
            <li>
              <details>
                <summary>ডাউনলোড</summary>
                <ul className="p-2 text-base bg-[#f7f7f7] rounded font-semibold absolute">
                  <li>
                    <a href="https://play.google.com" target="_blank">
                      <AiOutlineAndroid className="text-2xl" /> Android{" "}
                      <MdOutlineFileDownload className="text-2xl ml-6" />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apple.com/app-store" target="_blank">
                      <FaAppStore className="text-2xl" /> iOS/Mac{" "}
                      <MdOutlineFileDownload className="text-2xl ml-6" />
                    </a>
                  </li>
                  <li>
                    <a href="https://apps.microsoft.com" target="_blank">
                      <RiWindowsLine className="text-2xl" /> Windows{" "}
                      <MdOutlineFileDownload className="text-2xl ml-6" />
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <span className="items-center justify-center bg-[#f5f5f5] py-2 rounded gap-1 flex">
              <img className="w-5" src={ukFlag} alt="" />{" "}
              <p className="font-semibold">EN</p>
            </span>
          </ul>
        </details>
      </li>
    </>
  );

  const navMenuSm = (
    <>
      <li>
        <NavLink to="/codeMama">কোড মামা</NavLink>
      </li>
      <li>
        <NavLink to="/courses">ফ্রী কোর্স</NavLink>
      </li>
      <li>
        <NavLink to="/blog">ব্লগ</NavLink>
      </li>
      <li>
        <details>
          <summary>ডাউনলোড</summary>
          <ul className="p-2 text-base bg-[#f7f7f7] rounded font-semibold absolute">
            <li>
              <a
                className="text-sm"
                href="https://play.google.com"
                target="_blank"
              >
                <AiOutlineAndroid className="text-lg" /> Android{" "}
                <MdOutlineFileDownload className="text-lg" />{" "}
              </a>
            </li>
            <li>
              <a
                className="text-sm"
                href="https://www.apple.com/app-store"
                target="_blank"
              >
                <FaAppStore className="text-lg" /> iOS/Mac{" "}
                <MdOutlineFileDownload className="text-lg" />
              </a>
            </li>
            <li>
              <a
                className="text-sm"
                href="https://apps.microsoft.com"
                target="_blank"
              >
                <RiWindowsLine className="text-lg" /> Windows{" "}
                <MdOutlineFileDownload className="text-lg" />
              </a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  const [openBtn, setOpenBtn] = useState(false);

  return (
    <div className="bg-white">
      <div className="flex justify-between py-4 px-2 container mx-auto">
        <div className="flex">
          {/* navbar start */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2 h-8">
              <img src={ostadLogo} alt="" />
              <img className="hidden lg:block" src={ostadText} alt="" />
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <span className="hidden md:flex relative ">
                <img
                  className="w-5 absolute top-1/4 ml-5"
                  src={searchText}
                  alt=""
                />
                {/* search input */}
                <input
                  className="border pl-12 pr-4 py-3 bg-[#f9f9f9] text-xs font-semibold rounded-full"
                  placeholder={"কোর্স সার্চ করুন"}
                  type="text"
                  name=""
                  id=""
                />
              </span>
              <span role="button" className="block md:hidden w-5">
                <img src={searchText} alt="" />
              </span>
            </button>
            <dialog
              onClick={() => document.getElementById("my_modal_2").close()}
              id="my_modal_2"
              className="modal"
            >
              <div className="modal-box fixed top-5 bg-gray-100 w-full md:w-2/3 lg:w-1/2 p-2.5 left-0 lg:left-2 xl:ml-2 transform lg:translate-x-0">
                <span className="flex relative">
                  <img
                    className="w-5 absolute top-1/4 ml-5"
                    src={searchText}
                    alt=""
                  />
                  {/* search input */}
                  <input
                    className="border pl-12 pr-4 py-3 bg-transparent w-full text-xs font-semibold rounded-full"
                    placeholder={"লাইভ কোর্স, ওয়েবিনার সার্চ করুন"}
                    type="text"
                    name=""
                    id=""
                  />
                </span>
              </div>
            </dialog>

            {/* special offer btn */}
            <button className=" items-center md:flex border rounded font-semibold gap-3 text-[10px] md:text-sm p-2 border-[#12b76a]">
              <img className="w-5  hidden md:block" src={starIcon} alt="" />
              স্পেশাল অফার
            </button>
          </div>

          {/* nav elements MD */}
          <div className="hidden md:flex lg:hidden z-20 xl:hidden">
            <ul className="menu menu-horizontal px-1 font-semibold">
              {navElementsMd}
            </ul>
          </div>

          {/* nav elements Lg*/}
          <div className="hidden lg:flex xl:hidden">
            <ul className="menu menu-horizontal px-1 z-20 font-semibold">
              {navElementsLg}
            </ul>
          </div>

          {/* Nav elements xl */}
          <div className="hidden xl:flex">
            <ul className="menu menu-horizontal z-50 hidden xl:flex px-1 font-semibold">
              {navElementsXl}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-end">
          <span className="items-center gap-1 hidden lg:flex">
            <img className="w-5" src={ukFlag} alt="" />{" "}
            <p className="font-semibold">EN</p>
          </span>
          <details className="dropdown dropdown-end">
            {openBtn ? (
              <summary
                onClick={() => setOpenBtn(!openBtn)}
                className="flex bg-[#e6e6e6] border-2 border-black items-center gap-2 py-2 px-3 rounded text-sm font-bold hover:bg-gray-300"
              >
                <span className="hidden items-center gap-2 md:flex">
                  সব কোর্স <IoIosArrowUp />
                </span>
                {/* Text for sm devices */}
                <span className="block text-[10px] sm:hidden">কোর্স</span>
              </summary>
            ) : (
              <summary
                onClick={() => setOpenBtn(!openBtn)}
                className="bg-[#e6e6e6] flex items-center gap-2 py-2 px-3 rounded text-sm font-bold hover:bg-gray-300"
              >
                <span className="hidden items-center gap-2 md:flex">
                  সব কোর্স <IoIosArrowDown />
                </span>
                {/* Text for sm devices */}
                <span className="block text-[10px] sm:hidden">কোর্স</span>
              </summary>
            )}
            <ul className="menu dropdown-content bg-[#f3f3f3] border rounded-box z-[1] w-52 md:w-96 p-4 shadow-lg">
              <AllCourseElements></AllCourseElements>
            </ul>
          </details>
          <button className="bg-[#ffcd33] hidden md:flex items-center gap-2 py-2 px-3 rounded text-sm font-bold">
            লগ-ইন/সাইন-আপ <FaArrowRightLong />
          </button>
          <button className="bg-[#ffcd33] py-2 px-3 mr-4 rounded text-xs font-bold block md:hidden">
            লগইন
          </button>

          {/* sm device  */}
          <div className="drawer z-50 drawer-end md:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button z-50 fixed top-0 right-0 my-4 mx-1"
              >
                <RiMenu3Fill className="text-3xl font-bold" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-[#f3f3f3] z-50 text-base-content min-h-full w-1/2 p-2 pt-12 font-semibold">
                {navMenuSm}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
