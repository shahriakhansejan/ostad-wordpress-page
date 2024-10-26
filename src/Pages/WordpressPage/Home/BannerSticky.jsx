import { MdOutlineWatchLater } from "react-icons/md";
import { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaDrawPolygon } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";

const BannerSticky = () => {
  const [isShow, setIsShow] = useState(false);
  const [courses, setCourses] = useState([]);
  // console.log(courses);
  useEffect(() => {
    fetch("/courseDetails.json")
      .then((res) => res.json())
      .then((data) => setCourses(data.course_details));
  }, []);
  return (
    <div className="bg-white pt-4 border-b sticky top-0">
      <div className="flex justify-evenly border-b py-4">
        <button className="bg-orange-100 px-5 md:px-3 py-2 font-semibold rounded flex items-center gap-2">
          <MdOutlineWatchLater className="text-2xl text-orange-400" /> ৭ দিন
          বাকি
        </button>
        <button className="bg-purple-100 px-3 py-2 font-semibold rounded flex items-center gap-2">
          <MdOutlineWatchLater className="text-2xl text-purple-400" />
          ৮৩ সিট বাকি
        </button>
      </div>
      <div className="border-b py-3 px-6 md:px-3 md:block md:relative fixed bottom-0 w-full bg-white z-50 ">
        {/* <div className="border-b py-3 hidden md:block px-3 "> */}
        <span className="flex items-center justify-between mb-2">
          <p className="text-2xl md:text-3xl font-bold text-orange-500">
            ৳৮,০০০
          </p>
          <button
            onClick={() => setIsShow(true)}
            className="flex items-center gap-1 font-medium border-b border-black"
          >
            <FaDrawPolygon /> প্রেমো কোড
          </button>
        </span>
        {isShow ? (
          <span className="flex justify-between gap-2 items-center">
            <button
              onClick={() => setIsShow(false)}
              className="btn border-orange-300 hover:bg-orange-200 bg-orange-100"
            >
              <ImCancelCircle className="text-2xl" />{" "}
            </button>{" "}
            <input
              className="input w-full border-orange-300"
              type="text"
              name=""
              id=""
            />{" "}
            <button
              onClick={() => {
                alert("This Code not Valid");
              }}
              className="btn btn-warning"
            >
              এপ্লাই
            </button>
          </span>
        ) : (
          <button className="bg-[#ffcd33] w-full flex items-center gap-3 justify-center font-semibold p-3 md:p-4 rounded-lg">
            ব্যাচে ভর্তি হোন <IoIosArrowForward />
          </button>
        )}
      </div>

      <div className="p-3">
        <h3 className="text-lg font-semibold">এই কোর্সে আপনি পাচ্ছেন</h3>
        {courses.map((course, idx) => (
          <p
            key={idx}
            className="flex pt-2 items-center gap-4 font-medium text-[#727272]"
          >
            <FaRegCheckCircle className="text-green-500" /> {course}
          </p>
        ))}
      </div>
      <hr />
      <h4 className="font-semibold text-[#323232] my-4 ml-6">
        <span className="text-orange-400">কল করুন</span> ‍
        <span className="font-bold underline text-orange-400">
          +880 1940-444476
        </span>{" "}
        (সকাল ১০টা থেকে রাত ১০টা)
      </h4>
    </div>
  );
};

export default BannerSticky;
