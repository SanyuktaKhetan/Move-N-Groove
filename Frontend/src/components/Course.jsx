import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get("http://localhost:4001/DanceCourse"); 
        setCourses(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourse();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mit_1">
        <div className="items-center justify-center text-center cl_1">
          <h1 className="text-2xl md:text-4xl h_6">
            We're delighted to have you Here! :){" "}
            <br />
            <span className="h_7 "> Explore our Dance Courses</span>
          </h1>
          <Link to="/">
            <button className="btn_3 duration-300">
              Home
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {courses.map((course) => (
              <Cards item={course} key={course._id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Course;
