import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 b_1">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8 tag_1">
            <h1 className="text-2xl md:text-4xl font-bold">
            Turn Your Passion Into {" "}
              <span className="text-pink-500">Precision !!!</span>
            </h1>
          </div>
          <a href="About.jsx"> <button className="btn mt-6 btn-secondary btn_1">Know More</button> </a>
        </div>
        
      </div>
    </>
  );
}

export default Banner;
