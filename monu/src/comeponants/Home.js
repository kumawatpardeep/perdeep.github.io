import React from 'react'
import './Home.css';
import MainBackImg from './image/monu.png';

// const image="pardeep.jpg";
export const Home = () => {
  return (
    <div className='wel'><h1>Welcome</h1>
    <div className='imagess'>
    <div className='image'>
        <img src={MainBackImg} alt="" className='picmy' />
        </div>
        <div className='pra'>
    <p1>
    <h2>My Name Is A Pardeep Kumawat</h2>
   <h4> To secure a challenging position as a Full Stack Developer in a fast-paced environment, where I can utilize my expertise in developing web applications and software solutions. Seeking a full stack developer role with an opportunity to use my skills in developing web applications and software solutions</h4>
    </p1>

    </div>
    </div>
    
    </div>
  )
}
