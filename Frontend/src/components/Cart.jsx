import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Banner from './Banner'

export default function Cart() {
    return (
        <>
           <Navbar />
            <Banner />
            <div className='div_b'>
              <h1 className='ty_h'>You Are Enrolled to The Course. Thank You! !</h1>
              <a href="/"> <button className='btn btn_back'>Home</button></a>
            </div>
           
            <Footer />
        
        </>
    
    
      )
    }

  
