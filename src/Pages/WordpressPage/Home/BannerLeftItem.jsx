import React, { useEffect, useRef, useState } from "react";
import earth from "../../../assets/earth.jpg";
import themes from "../../../assets/themes.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import StudyPlan from "./LeftSideTabs/StudyPlan";
import medalImg from "../../../assets/medal.png";
import face from "../../../assets/face.png";
import faceA from "../../../assets/_face.png";
import AboutCourse from "./LeftSideTabs/AboutCourse";
import Review from "./LeftSideTabs/Review";

const BannerLeftItem = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  const sections = [
    { ref: section1Ref, id: 1 },
    { ref: section2Ref, id: 2 },
    { ref: section3Ref, id: 3 },
    { ref: section4Ref, id: 4 },
    { ref: section5Ref, id: 5 },
    { ref: section6Ref, id: 6 },
  ];

  const handleScroll = (sectionRef, active) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveBtn(active);
  };

  useEffect(() => {
    const handleScrollPosition = () => {
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.ref.current.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveBtn(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, [sections]);

  return (
    <div className="">
     {/* btn of tabs */}
      <div
        className="tabs bg-[#060633] text-white justify-around text-xs lg:text-sm font-semibold mt-10 mb-12 overflow-x-scroll flex gap-4"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          padding: "1rem",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button
          className={`${
            activeBtn === 1
              ? "bg-white text-blue-950"
              : "bg-blue-950 text-white"
          } px-2 lg:px-3 py-1 lg:py-2 rounded border-b-2`}
          onClick={() => handleScroll(section1Ref, 1)}
        >
          স্ট্যাডিপ্ল্যান
        </button>
        <button
          className={`${
            activeBtn === 2
              ? "bg-white text-blue-950"
              : "bg-blue-950 text-white"
          } px-2 lg:px-3 py-1 lg:py-2 rounded border-b-2`}
          onClick={() => handleScroll(section2Ref, 2)}
        >
          ইন্সট্রাক্টর
        </button>
        <button
          className={`${
            activeBtn === 3
              ? "bg-white text-blue-950"
              : "bg-blue-950 text-white"
          } px-2 lg:px-3 py-1 lg:py-2 rounded border-b-2`}
          onClick={() => handleScroll(section3Ref, 3)}
        >
          কোর্সসম্পর্কে
        </button>
        <button
          className={`${
            activeBtn === 4
              ? "bg-white text-blue-950"
              : "bg-blue-950 text-white"
          } px-2 lg:px-3 py-1 lg:py-2 rounded border-b-2`}
          onClick={() => handleScroll(section4Ref, 4)}
        >
          প্রজেক্টস
        </button>
        <button
          className={`${
            activeBtn === 5
              ? "bg-white text-blue-950"
              : "bg-blue-950 text-white"
          } px-2 lg:px-3 py-1 lg:py-2 rounded border-b-2`}
          onClick={() => handleScroll(section5Ref, 5)}
        >
          রিভিউ
        </button>
        <button
          className={`${
            activeBtn === 6
              ? "bg-white text-blue-950"
              : "bg-blue-950 text-white"
          } px-2 lg:px-3 py-1 lg:py-2 rounded border-b-2`}
          onClick={() => handleScroll(section6Ref, 6)}
        >
          হেল্প
        </button>
      </div>
      {/* extra section out of btn*/}

      <div
        className="flex flex-col lg:flex-row gap-5 bg-black/75 bg-blend-multiply p-3"
        style={{
          backgroundImage: `url(${earth})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex-1 text-white flex flex-col  px-2 justify-center">
          <h1 className="text-2xl">
            Kick-Start your career on{" "}
            <span className="uppercase font-bold">Free</span> MASTERCLASS
          </h1>
          <div>
            <button className="bg-gray-100 text-black mt-8 mb-3 btn btn-sm">
              ক্লাস টপিক
            </button>
          </div>
          <h2 className="text-3xl font-bold">
            থিম ডেভেলপমেন্টে কীভাবে Child Theme কাজ করে??
          </h2>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 flex-1 shadow-2xl">
          <div className="card-body p-4 font-semibold text-[#757575]">
            <h1 className="text-2xl font-bold text-[#151515] text-center">
              নতুন কিছু শিখতে আসুন মাস্টারক্লাসে
            </h1>
            <span className="flex my-2 justify-evenly">
              <p className="flex items-center gap-2">
                <FaCalendarAlt /> 26 অক্টোবর
              </p>
              <p className="flex items-center gap-2">
                <MdOutlineWatchLater /> রাত 9 টা
              </p>
              <p className="flex items-center gap-2">
                <IoLocationOutline />
                ZOOM
              </p>
            </span>

            <form>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">ফোন নাম্বার দিন</span>
                </label>
                <input
                  type="number"
                  placeholder="ফোন নাম্বার"
                  className="input py-8 input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">ই-মেইল দিন</span>
                </label>
                <input
                  type="email"
                  placeholder="ই-মেইল"
                  className="input py-8 input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">
                  মাস্টার-ক্লাস বুক করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    

    {/* scrl sectin */}
      <div ref={section1Ref}>
        <StudyPlan></StudyPlan>
      </div>


{/* admin details */}
      <div ref={section2Ref} className="bg-orange-100 p-5 rounded">
        <h1 className="flex items-center gap-3 text-xl font-bold text-[#151515]">
          <img src={medalImg} className="w-8" alt="" /> লিড ইন্সট্রাক্টর
        </h1>
        <div className="flex gap-3 my-3 items-center bg-white p-5 rounded-lg">
          <img className="w-12 lg:w-16" src={face} alt="" />{" "}
          <span>
            <h3 className="text-base lg:text-xl font-semibold text-[#151515]">
              Salim Rana
            </h3>
            <h5 className="text-[#747474] text-xs lg:text-base">
              Founder and Senior Software Engineer at ThemePure
            </h5>
          </span>
        </div>
        <div className="flex gap-3 items-center bg-white p-5 rounded-lg">
          <img className="w-12 lg:w-16" src={faceA} alt="" />{" "}
          <span>
            <h3 className="text-base lg:text-xl font-semibold text-[#151515]">
              Abdullah Al Noman Prince
            </h3>
            <h5 className="text-[#747474] text-xs lg:text-base">
              PHP Laravel | Web Application Developer
            </h5>
          </span>
        </div>
      </div>
      <div ref={section3Ref}>
        <AboutCourse></AboutCourse>
      </div>
      <div ref={section4Ref}>
        <div className="p-5 bg-blue-950 rounded-md">
          <div className="flex gap-5 items-center mb-5">
            <h1 className="text-white text-xl font-bold">
              কোর্স চলাকালী প্রজেক্টস সমূহ
            </h1>
            <hr className="w-1/2 border-t hidden md:block border-gray-300 mt-2" />
          </div>

          <img className="w-full lg:w-1/2 rounded-xl" src={themes} alt="" />
        </div>
        <div className="mt-12">
          <h1 className="pb-5 text-xl lg:text-3xl font-bold text-[#151515]">
            রিকোয়ারমেন্ট
          </h1>
          <hr className="pb-8" />
          <div className="pl-5 text-[#323232]">
            <p>
              - পূর্ব কোডিং নলেজ জানা না থাকলেও শেখা যাবে ওয়ার্ডপ্রেস থিম
              ডেভেলপমেন্ট
            </p>
            <p>- ল্যাপটপ/ডেস্কটপ (৪ জিবি র‍্যাম)</p>
            <p>- ভালো ইন্টারনেট কানেকশন</p>
            <p>- লেগে থাকার মানসিকতা</p>
          </div>
        </div>
      </div>
      <div ref={section5Ref}>
        <Review></Review>
      </div>
      <div ref={section6Ref}>
        <div className="mt-16 mb-24">
          <h1 className="pb-5 text-xl lg:text-3xl font-bold text-[#151515]">
            প্রয়োজনে
          </h1>
          <hr className="pb-8" />
          <p className="pl-5 text-[#323232]">
            ব্যাচ সংক্রান্ত যেকোনো তথ্যের জন্যে কল করুন{" "}
            <span className="font-semibold text-lg mx-2 underline text-[#151515]">
              +880 1940-444476
            </span>{" "}
            (সকাল ১০টা থেকে রাত ১০টা)
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerLeftItem;
