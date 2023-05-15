import React from 'react'
import './About.css'
import Desc from './image/dddd.png'

export const About = () => {
  return (
    <div className='main-container'>
    
      <div className='abo'>
        <div className='pro'><i>Profile</i></div>
        <div className='info'>
          <div className='ime'>
            <img  className='qqqqq' src={Desc} alt="" />
          </div>
          <div className='add'>
            <div className='name'>
              <h3>Name:</h3><h5>Pardeep Kumawat</h5>
            </div>
            <div className='email'>
              <h3>Email:</h3><h5>kumawatpradeep701@gmail.com</h5>
            </div>
            <div className='mobile'>
              <h3>Mobile:</h3><h5>8890941174</h5>
            </div>
            <div className='city'>
              <h3>City:</h3><h5>Jhunjhunu</h5>
            </div>

            <div className='viewpdf'>
              <a1 href="#">View Pdf</a1>
            </div>
            <div className='dowpdf'>
              <a1 href="#">Download Pdf</a1>
            </div>
          </div>
        </div>
      </div>
      <div className='abc'>
<div className=''></div>
      </div>
      
    </div>
    
  )
}
