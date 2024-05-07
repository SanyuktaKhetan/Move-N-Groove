import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";


function NewCourses() {
  const [DanceCourse, setCourses] = useState([]);
  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get("http://localhost:4001/DanceCourse");
        const data = res.data;
        console.log(data);
        console.log("DanceCourse Length:", data.length);
        setCourses(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourse();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2 tag_2">Explore Our New Courses</h1>
          <p className="p_1">
          We make that dream a reality! We offer a wide variety of dance courses for all ages and skill levels, from complete beginners to seasoned dancers looking to refine their technique. Whether you're interested in mastering the classic elegance of ballet, the infectious energy of hip hop, the rhythmic passion of salsa, or any style in between, we have a class for you. Our passionate and experienced instructors create a fun and supportive learning environment where you can learn at your own pace. We believe dance is about more than just steps; it's about self-expression, building confidence, and finding joy in movement. Join us and discover the transformative power of dance!
          </p>
        </div>
        

        <div>
          <Slider {...settings}>
          {DanceCourse.map((course, index) => (
            index < 5 && <Cards item={course} key={course._id} />
          ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default NewCourses;
