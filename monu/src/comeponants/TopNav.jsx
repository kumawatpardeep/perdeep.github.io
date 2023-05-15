import React from "react";
import './TopNav.css'
import Ddd from './image/dddd.jpg'
import { BrowserRouter,Route,Routes,Link, NavLink } from "react-router-dom"

export default function TopNav(){
    return(
        <div className='container'>
        <div className="logo"><img src={Ddd} alt="" className="imm" /></div>
        <NavLink className="navbar">
          <Link className="a" to="/home">Home</Link>
          <Link className="b" to="/news">News</Link>
          <Link className="c" to="/Contact">Contact us</Link>
          <Link className="d" to="/about">About</Link>
          

  </NavLink>

        </div>
    )
    
}