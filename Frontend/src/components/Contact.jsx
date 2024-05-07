import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <>
        <Navbar />
        <div className="container contact">
            <div className="c_div_1">
                <img className="c_img1" src="https://st2.depositphotos.com/1265075/7785/i/450/depositphotos_77859302-stock-photo-contact-us-icons-web-globe.jpg" alt="Contact Image" style={{maxWidth: '100%', display: 'block', margin: '0 auto'}} />
            </div>
            <div className="c_div_2">
                <h1 className="bg-dark p-2 text-white text-center c_h1">CONTACT US</h1>
                <p className="text-justify mt-2 c_p">
                Never stop exploring! Let our dedicated team assist you with all your queries.
                </p>
                <p className="mt-3">
                    <BiMailSend /> : www.help@movengroove.com
                </p>
                <p className="mt-3">
                    <BiPhoneCall /> : 9678412367
                </p>
                <p className="mt-3">
                    <BiSupport /> : 1800-0055-0990 (toll free)
                </p>
            </div>           
        </div>
        <Footer />
    </>
  )
}

export default Contact

 