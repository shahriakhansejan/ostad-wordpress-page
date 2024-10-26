import {
  MdOutlineOndemandVideo,
  MdOutlineSlowMotionVideo,
} from "react-icons/md";
import BannerLeftItem from "./BannerLeftItem";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";

const BannerLeft = () => {
  return (
    <div className="col-span-1 lg:col-span-3">
      <div className="flex font-medium justify-between text-sm gap-3 bg-white rounded p-4 border-l-2 border-orange-500">
        <p className="bg-orange-500 btn btn-sm px-2 py-1 text-white rounded">
          ব্যাচ-৪
        </p>

        <p className="flex gap-1 border-x-2 px-3 lg:px-5">
          <FaCalendarAlt className="text-orange-500" />
          শুরু হবে
          <br /> বৃহস্পতিবার, 31 অক্টোবর
        </p>

        <p className="flex gap-1">
          <FaRegCalendarCheck className="text-orange-500" /> ক্লাস শিডিউল <br />{" "}
          বৃহ, সোম, (রাত 9:00 - 10:00)
        </p>
      </div>

      <div className="bg-white">
        <div className="flex font-medium justify-between text-sm gap-3 my-8 bg-white rounded p-4 border-l-2 border-green-500">
          <p className="flex items-center gap-2 lg:gap-5 text-base lg:text-xl font-semibold">
            <MdOutlineOndemandVideo className="text-green-400 text-2xl lg:text-5xl" />{" "}
            ফ্রি ডেমো ক্লাস
          </p>
          <p className="btn">
            <MdOutlineSlowMotionVideo className="text-2xl" /> ভিডিও দেখুন
          </p>
        </div>
      </div>

      <BannerLeftItem></BannerLeftItem>
    </div>
  );
};

export default BannerLeft;
