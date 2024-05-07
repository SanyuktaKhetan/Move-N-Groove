import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NewCourses from "../components/NewCourses";
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <NewCourses />
      <Footer />
    </>
  );
}

export default Home;
