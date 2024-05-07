import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const About = () => {
  return (
    <>
        <Navbar/> 
        <div className="row aboutus ">
          <div className="abt_1">
            <img
              src="https://t4.ftcdn.net/jpg/04/77/26/49/360_F_477264959_oVYJN493m6I8CP3ok9jF9ST3W46p0EyP.jpg"
              alt="about us"
              style={{ width: "100%" }}
            />
          </div>
          <div className="abt_2">
            <p className="text-justify mt-2">
            We believe that the joy of dance belongs to everyone. Whether you're a complete beginner looking to try something new or a seasoned dancer seeking to refine your skills, we offer a welcoming and supportive environment to explore your passion. We cater to all ages and experience levels, with a diverse range of dance styles from the graceful elegance of ballet to the infectious energy of hip hop, and everything in between.
            Our passionate and experienced instructors are dedicated to fostering a love of dance in all our students. We create fun and engaging classes that focus on developing your technique, confidence, and self-expression. We go beyond just steps, incorporating the benefits of fitness, social interaction, and creative exploration into our curriculum. Join our vibrant dance community and discover the transformative power of movement!
            </p>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default About