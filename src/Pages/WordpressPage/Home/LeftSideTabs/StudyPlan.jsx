import { useEffect, useState } from "react";
import { FaEye, FaPlay } from "react-icons/fa";
import videoplayback from "../../../../assets/videoplayback.mp4";

const StudyPlan = () => {
  const [courses, setCourses] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    fetch("/studyPlan.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  
  return (
    <div className="mt-8">
      <div className="flex gap-8 items-center mb-2">
        <h1 className="text-3xl font-bold text-[#151515]">স্টাডি প্ল্যান</h1>{" "}
        <p className="font-semibold text-[#747474]">
          * {courses.length} টি মডিউল
        </p>
      </div>
      <div className="border rounded p-2 ">
        {(seeAll ? courses : courses.slice(0, 4)).map((course, index) => (
          <div
            key={index}
            className="collapse mt-4 collapse-arrow bg-white border"
          >
            <input
              defaultChecked={index === 0}
              type="radio"
              name="my-accordion-2"
            />

            <div className="collapse-title text-lg lg:text-xl flex items-center gap-4 font-medium">
              <button
                className={`p-2 lg:p-3 text-white rounded-xl text-sm lg:text-base flex items-center font-medium lg:font-bold flex-col ${course.color}`}
              >
                <span>মডিউল</span>
                {course.id}
              </button>
              {course.name}
            </div>
            <div className="collapse-content my-2 px-8 text-justify">
              <h1 className="border-y my-2 py-1">{course.des}</h1>
              <div>
                {course.video.map((singleVideo,idx) => (
                  <div key={idx} className="flex flex-col lg:flex-row justify-between border-b py-2">
                    <p className="flex items-center gap-1">
                      <FaPlay />
                      {singleVideo.video1}{" "}
                    </p>
                    <span className="flex items-center gap-12 mt-2 lg:mt-0 lg:gap-3">
                      <p className="ml-3">{singleVideo.time} মিনিট</p>
                      <button className="btn btn-sm lg:btn-md flex items-center">
                        <FaEye></FaEye> দেখুন
                      </button>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setSeeAll(!seeAll)}
        className="btn btn-active btn-ghost w-full font-bold mt-8"
      >
        {seeAll ? "কমিয়ে দেখুন" : `আরো ${courses.length - 4} টি দেখুন`}
      </button>

      <div className="flex flex-col lg:flex-row gap-5 my-20 items-center">
        <h1 className="text-3xl lg:text-5xl w-full lg:w-1/2 font-bold text-[#151515]">
          ক্লিক করে দেখে নিন কোর্সের ডেমো ক্লাস
        </h1>
        <video className="w-full lg:w-1/2" src={videoplayback} controls></video>
      </div>
    </div>
  );
};

export default StudyPlan;
