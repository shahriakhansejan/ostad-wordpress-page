import BannerLeft from "./BannerLeft";
import BannerSticky from "./BannerSticky";
import wordpressVideo from "../../../assets/Wordpress.mp4";
import bgImg from "../../../assets/bg.png";
import { IoIosArrowForward } from "react-icons/io";
import CallFn from "../../CallFn/CallFn";

const Banner = () => {
  return (
    <div>
      <div
        className="-z-10"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>

      {/* part 1 of banner */}

      <div className="grid grid-cols-1 md:grid-cols-2 pt-6 lg:grid-cols-5 gap-5 container mx-auto px-2 md:px-6 lg:px-12">
        <div className="col-span-1 lg:col-span-3">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#151515]">
            WordPress Theme Development
          </h1>
          <p className="text-[#727272] text-sm lg:text-base my-4 lg:my-8">
            বিশ্বের সবচেয়ে জনপ্রিয় কন্টেন্ট ম্যানেজমেন্ট সিস্টেম ওয়ার্ডপ্রেস থিম
            ডেভেলপমেন্ট শিখে মার্কেটপ্লেস থেকে ইনকাম শুরু করুন আপনিও! কোর্সটি
            করার জন্য পূর্ব কোডিং নলেজ না থাকলেও কোন সমস্যা নেই; কোর্সটিকে
            সাজানো হয়েছে একদম বিগিনার ফ্রেন্ডলি ওয়েতে, জয়েন করতে পারবেন ০.০
            বিগিনাররাও।
          </p>
        </div>

        <div className="col-span-1 lg:col-span-2 border">
        <button className="bg-[#ffcd33] w-full flex md:hidden text-sm items-center gap-3 mb-4 justify-center font-semibold p-3 rounded-lg">
            ব্যাচে ভর্তি হোন <IoIosArrowForward />
          </button>
          <div className="relative z-0">
            <video
              title="কোর্সের ইন্ট্রা ভিডিও"
              src={wordpressVideo}
              controls
              width="100%"
              loop
            ></video>
          </div>
        </div>
      </div>

      {/* 2nd part of banner*/}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 container mx-auto  px-2 md:px-6 lg:px-12  pb-6">
        <div className="col-span-1 order-2 md:order-1 lg:col-span-3">
          <BannerLeft></BannerLeft>

          
        </div>

        <div className="col-span-1 order-1 md:order-2 lg:col-span-2 border">
          <div className="bg-white col-span-1 lg:col-span-2 border"></div>
          <BannerSticky></BannerSticky>
        </div>
      </div>
      <CallFn></CallFn>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
