import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const CallFn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>

      {/* btn of modal */}
      <button
        onClick={handleOpen}
        className={`fixed bottom-28 md:bottom-4 right-4 bg-[#060633] text-white font-semibold p-3 rounded-lg flex items-center gap-2 shadow-lg transition-all duration-300 ease-in-out ${
          isScrolled ? "px-4" : "px-6"
        }`}
      >
        <FaPhoneAlt />
        <span
          className={`transition-opacity duration-300 ease-in-out ${
            isScrolled ? "hidden w-0" : "block"
          }`}
        >
          কল-করুন
        </span>
      </button>


{/* modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleClose}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4 text-center">
              কথা বলুন ক্যারিয়ার কাউন্সিলরের সাথে
            </h2>
            <div className="flex justify-center mb-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Counselor"
                className="rounded-full"
              />
            </div>
            <div className="flex gap-4 justify-center">
              <button className="bg-gray-200 text-gray-800 flex items-center gap-2 px-4 py-2 rounded">
                <FaPhoneAlt className="text-green-500" />
                WHATSAPP
              </button>
              <button className="bg-yellow-400 text-black flex items-center gap-2 px-4 py-2 rounded">
                <FaPhoneAlt />
                CALL
              </button>
            </div>
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CallFn;
