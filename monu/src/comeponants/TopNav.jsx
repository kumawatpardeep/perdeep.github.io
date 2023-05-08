import React from "react";
import './TopNav.css'

export default function TopNav(){
    return(
        <div className='container'>
        <div className="logo">Pardeep</div>
        <div className="navbar">
          <a className="a" href="#home">Home</a>
          <a className="b" href="#news">News</a>
          <a className="c" href="#contact">Contact</a>
          <a className="d" href="#about">About</a>
  </div>

        </div>
    )
    
}