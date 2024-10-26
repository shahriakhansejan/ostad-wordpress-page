import { useEffect, useState } from "react";

const AboutCourse = () => {
  const [sliceCourse, setSliceCourses] = useState(true);
  const [aboutCourses, setAboutCourses] = useState({});
  useEffect(() => {
    fetch("/aboutCourse.json")
      .then((res) => res.json())
      .then((data) => setAboutCourses(data));
  }, []);
  return (
    <div className="mt-16">
      <h1 className="text-2xl font-bold text-[#151515] border-b">
        কোর্স সম্পর্কে
      </h1>
      <div className="mt-4">
        {sliceCourse ? (
          <p>{aboutCourses.course?.slice(0, 375)}.....</p>
        ) : (
          <span>
            {aboutCourses.course}
            <p className="mt-4">
              {aboutCourses.benefits?.map((benefit, index) => (
                <li className="list-none ml-5">
                  <span className="mr-3">{index + 1}.</span>
                  {benefit}
                </li>
              ))}
            </p>
          </span>
        )}
      </div>

      <div className="text-center mt-4 font-semibold text-orange-500">
        <button onClick={() => setSliceCourses(!sliceCourse)}>
          {sliceCourse ? "আরো-দেখুন" : "কমিয়ে দেখুন"}
        </button>
      </div>
    </div>
  );
};

export default AboutCourse;
